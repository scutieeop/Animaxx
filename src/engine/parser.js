class HTMLParser {
  constructor() {
    this.customTags = new Map();
  }

  // Özel tag tanımlama
  defineTag(name, handler) {
    this.customTags.set(name, handler);
  }

  // HTML içindeki özel tagları işle
  parseCustomTags(content) {
    let result = content;
        
    for (const [tag, handler] of this.customTags) {
      const regex = new RegExp(`<${tag}([^>]*)>([\\s\\S]*?)<\\/${tag}>`, 'g');
      result = result.replace(regex, (match, attrs, inner) => {
        const attributes = this.parseAttributes(attrs);
        return handler(attributes, inner);
      });
    }

    return result;
  }

  // Öznitelikleri ayrıştır
  parseAttributes(attributeString) {
    const attributes = {};
    const regex = /(\w+)="([^"]*)"/g;
    let match;

    while ((match = regex.exec(attributeString)) !== null) {
      attributes[match[1]] = match[2];
    }

    return attributes;
  }

  // Değişkenleri işle
  parseVariables(content, variables = {}) {
    return content.replace(/\{\{([^}]+)\}\}/g, (match, variable) => {
      const trimmed = variable.trim();
      return variables[trimmed] || '';
    });
  }

  // Ana işleme fonksiyonu
  parse(content, variables = {}) {
    let processed = this.parseCustomTags(content);
    processed = this.parseVariables(processed, variables);
    return processed;
  }
}

module.exports = HTMLParser; 