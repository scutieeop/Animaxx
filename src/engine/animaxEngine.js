const fs = require('fs').promises;
const path = require('path');
const HTMLParser = require('./parser');
const NodeRunner = require('./nodeRunner');

class AniMaxEngine {
  constructor() {
    this.parser = new HTMLParser();
    this.nodeRunner = new NodeRunner();
    this.cache = new Map();
    this.setupDefaultTags();
  }

  // Varsayılan özel tagları tanımla
  setupDefaultTags() {
    // Değişken tag'i
    this.parser.defineTag('var', (attrs) => {
      return `{{${attrs.name}}}`;
    });

    // Döngü tag'i
    this.parser.defineTag('for', (attrs, content) => {
      const items = JSON.parse(attrs.items || '[]');
      return items.map(item => {
        return this.parser.parse(content, { item });
      }).join('');
    });

    // Koşul tag'i
    this.parser.defineTag('if', (attrs, content) => {
      const condition = attrs.condition === 'true';
      return condition ? content : '';
    });
  }

  // Yeni özel tag tanımla
  defineTag(name, handler) {
    this.parser.defineTag(name, handler);
  }

  // Dosyayı işle
  async processFile(filePath, variables = {}) {
    try {
      // Önbellekten kontrol
      if (this.cache.has(filePath)) {
        return this.cache.get(filePath);
      }

      // Dosyayı oku
      const content = await fs.readFile(filePath, 'utf8');

      // Node.js kodlarını çalıştır
      let processed = this.nodeRunner.processScripts(content, filePath);

      // HTML işle
      processed = this.parser.parse(processed, variables);

      // Önbelleğe al
      this.cache.set(filePath, processed);

      return processed;
    } catch (error) {
      throw new Error(`Dosya işleme hatası: ${error.message}`);
    }
  }

  // Önbelleği temizle
  clearCache() {
    this.cache.clear();
  }

  // Önbellekten dosya sil
  invalidateCache(filePath) {
    this.cache.delete(filePath);
  }
}

module.exports = AniMaxEngine; 