class ConsoleModule {
  constructor(nodeRunner) {
    this.nodeRunner = nodeRunner;
  }

  createConsoleContext() {
    return {
      log: (...args) => {
        this.nodeRunner.output += `<div class="console-log">${args.join(' ')}</div>`;
      },
      error: (...args) => {
        this.nodeRunner.hasError = true;
        this.nodeRunner.output += `<div class="console-error">${args.join(' ')}</div>`;
      },
      warn: (...args) => {
        this.nodeRunner.output += `<div class="console-warn">${args.join(' ')}</div>`;
      },
      info: (...args) => {
        this.nodeRunner.output += `<div class="console-info">${args.join(' ')}</div>`;
      },
      table: (data) => {
        this.nodeRunner.output += this.createTable(data);
      }
    };
  }

  createTable(data) {
    if (!data || typeof data !== 'object') return '';
        
    const headers = Object.keys(Array.isArray(data) ? data[0] || {} : data);
    const rows = Array.isArray(data) ? data : [data];

    return `
            <div class="console-table">
                <table>
                    <thead>
                        <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
                    </thead>
                    <tbody>
                        ${rows.map(row => `
                            <tr>${headers.map(h => `<td>${this.formatValue(row[h])}</td>`).join('')}</tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
  }

  formatValue(value) {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (typeof value === 'object') return JSON.stringify(value);
    return value.toString();
  }
}

module.exports = ConsoleModule; 