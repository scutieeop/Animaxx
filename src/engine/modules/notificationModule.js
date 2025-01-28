class NotificationModule {
  constructor(nodeRunner) {
    this.nodeRunner = nodeRunner;
  }

  createNotificationContext() {
    return {
      print: (content) => {
        this.nodeRunner.output += content;
      },
      error: (message) => {
        this.nodeRunner.hasError = true;
        this.nodeRunner.output += `
                    <div class="error-container">
                        <div class="error-message">${message}</div>
                    </div>
                `;
      },
      success: (message) => {
        this.nodeRunner.output += `
                    <div class="success-container">
                        <div class="success-message">${message}</div>
                    </div>
                `;
      },
      warn: (message) => {
        this.nodeRunner.output += `
                    <div class="warning-container">
                        <div class="warning-message">${message}</div>
                    </div>
                `;
      }
    };
  }
}

module.exports = NotificationModule; 