const childProcess = require('child_process');
const crypto = require('crypto');

class UtilModule {
  constructor(nodeRunner) {
    this.nodeRunner = nodeRunner;
  }

  createUtilContext() {
    return {
      execCommand: (command) => {
        try {
          const { stdout, stderr } = childProcess.execSync(command, { encoding: 'utf8' });
          if (stderr) {
            this.nodeRunner.output += `<div class="console-warn">${stderr}</div>`;
          }
          return stdout;
        } catch (err) {
          this.nodeRunner.hasError = true;
          this.nodeRunner.output += `<div class="error-container">${err.message}</div>`;
          return null;
        }
      },
      parseJSON: (str) => {
        try {
          return JSON.parse(str);
        } catch (err) {
          this.nodeRunner.hasError = true;
          this.nodeRunner.output += `<div class="error-container">${err.message}</div>`;
          return null;
        }
      },
      toBase64: (str) => Buffer.from(str).toString('base64'),
      fromBase64: (str) => Buffer.from(str, 'base64').toString('utf8'),
      crypto: crypto,
      escapeHTML: (str) => str.replace(/[&<>"']/g, (m) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#39;'
      })[m]),
      formatDate: (date = new Date()) => {
        return new Intl.DateTimeFormat('tr-TR', {
          dateStyle: 'full',
          timeStyle: 'long'
        }).format(date);
      }
    };
  }
}

module.exports = UtilModule; 