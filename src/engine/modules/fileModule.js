const fs = require('fs');
const path = require('path');

class FileModule {
  constructor(nodeRunner) {
    this.nodeRunner = nodeRunner;
  }

  createFileContext(filePath) {
    return {
      readFile: (file) => {
        try {
          return fs.readFileSync(path.join(path.dirname(filePath), file), 'utf8');
        } catch (err) {
          this.nodeRunner.hasError = true;
          this.nodeRunner.output += `<div class="error-container">${err.message}</div>`;
          return null;
        }
      },
      writeFile: (file, content) => {
        try {
          fs.writeFileSync(path.join(path.dirname(filePath), file), content);
          this.nodeRunner.output += `<div class="success-container">✅ ${file} dosyası başarıyla yazıldı.</div>`;
          return true;
        } catch (err) {
          this.nodeRunner.hasError = true;
          this.nodeRunner.output += `<div class="error-container">${err.message}</div>`;
          return false;
        }
      }
    };
  }
}

module.exports = FileModule; 