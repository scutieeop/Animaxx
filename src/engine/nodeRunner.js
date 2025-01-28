const vm = require('vm');
const path = require('path');
const styles = require('./styles');
const ConsoleModule = require('./modules/consoleModule');
const FileModule = require('./modules/fileModule');
const UtilModule = require('./modules/utilModule');
const NotificationModule = require('./modules/notificationModule');

class NodeRunner {
  constructor() {
    this.output = '';
    this.hasError = false;
        
    // Modülleri başlat
    this.consoleModule = new ConsoleModule(this);
    this.fileModule = new FileModule(this);
    this.utilModule = new UtilModule(this);
    this.notificationModule = new NotificationModule(this);
        
    // Temel context'i oluştur
    this.context = {
      require: require,
      console: this.consoleModule.createConsoleContext(),
      Buffer: Buffer,
      process: process,
      global: global,
      setTimeout: setTimeout,
      setInterval: setInterval,
      clearTimeout: clearTimeout,
      clearInterval: clearInterval
    };
  }

  // Güvenli context oluştur
  createSafeContext(filePath = '') {
    return vm.createContext({
      ...this.context,
      module: { exports: {} },
      exports: {},
      __dirname: path.dirname(filePath),
      __filename: filePath,
      // Modüllerden gelen context'leri birleştir
      ...this.notificationModule.createNotificationContext(),
      ...this.fileModule.createFileContext(filePath),
      ...this.utilModule.createUtilContext()
    });
  }

  // Node.js kodunu çalıştır
  execute(code, filePath) {
    try {
      this.output = '';
      this.hasError = false;
      const context = this.createSafeContext(filePath);
      vm.runInContext(code, context);
            
      if (this.hasError) {
        const errorId = Math.random().toString(36).substring(7);
        const errorTime = new Date().toLocaleString('tr-TR');
        return styles.getErrorPageTemplate(
          new Error('Kod çalıştırılırken hatalar oluştu'),
          filePath,
          code,
          errorId,
          errorTime
        );
      }
            
      return this.output || '';
    } catch (error) {
      const errorId = Math.random().toString(36).substring(7);
      const errorTime = new Date().toLocaleString('tr-TR');
      return styles.getErrorPageTemplate(error, filePath, code, errorId, errorTime);
    }
  }

  // Node.js script taglarını işle
  processScripts(content, filePath) {
    const scriptRegex = /<node>([\s\S]*?)<\/node>/g;
    return content.replace(scriptRegex, (match, code) => {
      return this.execute(code, filePath);
    });
  }
}

module.exports = NodeRunner; 