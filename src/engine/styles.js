const styles = {
  // Ana stil değişkenleri
  variables: `
        :root {
            /* Ana renkler */
            --primary-color: #3498db;
            --secondary-color: #2ecc71;
            --accent-color: #e74c3c;
            --success-color: #27ae60;
            --warning-color: #f1c40f;
            --error-color: #e74c3c;
            --info-color: #3498db;

            /* Nötr renkler */
            --text-color: #2c3e50;
            --text-light: #7f8c8d;
            --bg-color: #f5f6fa;
            --bg-secondary: #fafbfc;
            --border-color: #dcdde1;

            /* Tipografi */
            --font-primary: 'Segoe UI', system-ui, -apple-system, sans-serif;
            --font-mono: 'Fira Code', 'Consolas', monospace;
            --font-size-xs: 0.75rem;
            --font-size-sm: 0.875rem;
            --font-size-md: 1rem;
            --font-size-lg: 1.125rem;
            --font-size-xl: 1.25rem;
            --font-size-2xl: 1.5rem;
            --font-size-3xl: 1.875rem;
            --font-size-4xl: 2.25rem;

            /* Boşluklar */
            --spacing-xs: 0.25rem;
            --spacing-sm: 0.5rem;
            --spacing-md: 1rem;
            --spacing-lg: 1.5rem;
            --spacing-xl: 2rem;
            --spacing-2xl: 3rem;

            /* Tasarım */
            --border-radius-sm: 4px;
            --border-radius-md: 8px;
            --border-radius-lg: 12px;
            --border-radius-xl: 16px;
            --border-radius-full: 9999px;
            
            --box-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
            --box-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            --box-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            --box-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

            /* Animasyonlar */
            --transition-fast: 150ms ease;
            --transition-normal: 250ms ease;
            --transition-slow: 350ms ease;
            
            /* Z-index katmanları */
            --z-negative: -1;
            --z-normal: 1;
            --z-tooltip: 10;
            --z-fixed: 100;
            --z-modal: 1000;
        }
    `,

  // Genel stil
  global: `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: var(--font-primary);
            font-size: var(--font-size-md);
            line-height: 1.6;
            color: var(--text-color);
            background: var(--bg-color);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 var(--spacing-md);
        }

        .card {
            background: white;
            border-radius: var(--border-radius-lg);
            box-shadow: var(--box-shadow-md);
            padding: var(--spacing-lg);
            margin-bottom: var(--spacing-lg);
            transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .card:hover {
            transform: translateY(-2px);
            box-shadow: var(--box-shadow-lg);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: var(--spacing-lg);
            margin: var(--spacing-lg) 0;
        }

        /* Tipografi */
        h1, h2, h3, h4, h5, h6 {
            font-weight: 600;
            line-height: 1.3;
            margin-bottom: var(--spacing-md);
            color: var(--text-color);
        }

        h1 { font-size: var(--font-size-4xl); }
        h2 { font-size: var(--font-size-3xl); }
        h3 { font-size: var(--font-size-2xl); }
        h4 { font-size: var(--font-size-xl); }
        h5 { font-size: var(--font-size-lg); }
        h6 { font-size: var(--font-size-md); }

        a {
            color: var(--primary-color);
            text-decoration: none;
            transition: color var(--transition-fast);
        }

        a:hover {
            color: var(--accent-color);
        }

        /* Butonlar */
        .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: var(--spacing-sm) var(--spacing-lg);
            border-radius: var(--border-radius-md);
            font-weight: 500;
            text-align: center;
            cursor: pointer;
            transition: all var(--transition-normal);
            border: none;
            outline: none;
            font-size: var(--font-size-md);
        }

        .button-primary {
            background: var(--primary-color);
            color: white;
        }

        .button-secondary {
            background: var(--secondary-color);
            color: white;
        }

        .button-accent {
            background: var(--accent-color);
            color: white;
        }

        .button:hover {
            filter: brightness(110%);
            transform: translateY(-1px);
        }

        .button:active {
            transform: translateY(0);
        }

        /* Form elemanları */
        input, textarea, select {
            width: 100%;
            padding: var(--spacing-sm) var(--spacing-md);
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius-md);
            font-family: var(--font-primary);
            font-size: var(--font-size-md);
            transition: border-color var(--transition-fast);
        }

        input:focus, textarea:focus, select:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
        }
    `,

  // Konsol çıktıları için stiller
  console: `
        .console-output {
            font-family: var(--font-mono);
            font-size: var(--font-size-sm);
            line-height: 1.6;
            padding: var(--spacing-md);
            border-radius: var(--border-radius-md);
            background: var(--bg-secondary);
            margin: var(--spacing-md) 0;
            overflow-x: auto;
        }

        .console-log, .console-error, .console-warn, .console-info {
            padding: var(--spacing-sm) var(--spacing-md);
            border-radius: var(--border-radius-sm);
            margin: var(--spacing-xs) 0;
            position: relative;
            padding-left: var(--spacing-xl);
        }

        .console-log::before, .console-error::before, .console-warn::before, .console-info::before {
            position: absolute;
            left: var(--spacing-sm);
            top: 50%;
            transform: translateY(-50%);
            font-size: var(--font-size-md);
        }

        .console-log {
            background: var(--bg-secondary);
            border-left: 3px solid var(--text-color);
        }
        .console-log::before { content: "📝"; }

        .console-error {
            background: #fff5f5;
            border-left: 3px solid var(--error-color);
            color: var(--error-color);
        }
        .console-error::before { content: "❌"; }

        .console-warn {
            background: #fffbeb;
            border-left: 3px solid var(--warning-color);
            color: var(--warning-color);
        }
        .console-warn::before { content: "⚠️"; }

        .console-info {
            background: #ebf8ff;
            border-left: 3px solid var(--info-color);
            color: var(--info-color);
        }
        .console-info::before { content: "ℹ️"; }
    `,

  // Tablo stilleri
  table: `
        .console-table {
            width: 100%;
            margin: var(--spacing-md) 0;
            border-radius: var(--border-radius-md);
            overflow: hidden;
            box-shadow: var(--box-shadow-sm);
        }

        .console-table table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            font-size: var(--font-size-sm);
        }

        .console-table th {
            background: var(--primary-color);
            color: white;
            font-weight: 600;
            text-align: left;
            padding: var(--spacing-sm) var(--spacing-md);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .console-table td {
            padding: var(--spacing-sm) var(--spacing-md);
            border-bottom: 1px solid var(--border-color);
        }

        .console-table tr:nth-child(even) {
            background: var(--bg-secondary);
        }

        .console-table tr:hover {
            background: rgba(52, 152, 219, 0.05);
        }

        .console-table tr:last-child td {
            border-bottom: none;
        }
    `,

  // Bildirim stilleri
  notifications: `
        .notification {
            padding: var(--spacing-md);
            border-radius: var(--border-radius-md);
            margin: var(--spacing-md) 0;
            position: relative;
            padding-left: var(--spacing-2xl);
            animation: slideIn var(--transition-normal);
        }

        @keyframes slideIn {
            from {
                transform: translateX(-10px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        .notification::before {
            position: absolute;
            left: var(--spacing-md);
            top: 50%;
            transform: translateY(-50%);
            font-size: var(--font-size-xl);
        }

        .error-container {
            background: #fff5f5;
            border-left: 4px solid var(--error-color);
        }
        .error-container::before { content: "🚫"; }

        .success-container {
            background: #f0fff4;
            border-left: 4px solid var(--success-color);
        }
        .success-container::before { content: "✅"; }

        .warning-container {
            background: #fffbeb;
            border-left: 4px solid var(--warning-color);
        }
        .warning-container::before { content: "⚠️"; }

        .info-container {
            background: #ebf8ff;
            border-left: 4px solid var(--info-color);
        }
        .info-container::before { content: "ℹ️"; }
    `,

  // Hata sayfası stilleri
  errorPage: `
        .error-page {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: var(--spacing-xl);
            background: var(--bg-color);
        }

        .error-content {
            background: white;
            border-radius: var(--border-radius-lg);
            box-shadow: var(--box-shadow-xl);
            padding: var(--spacing-2xl);
            max-width: 800px;
            width: 100%;
            animation: fadeIn var(--transition-normal);
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .error-header {
            text-align: center;
            margin-bottom: var(--spacing-xl);
        }

        .error-icon {
            font-size: var(--font-size-4xl);
            color: var(--error-color);
            margin-bottom: var(--spacing-md);
            animation: bounce 2s infinite;
        }

        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-20px);
            }
            60% {
                transform: translateY(-10px);
            }
        }

        .error-title {
            font-size: var(--font-size-3xl);
            color: var(--error-color);
            margin-bottom: var(--spacing-sm);
        }

        .error-subtitle {
            color: var(--text-light);
            font-size: var(--font-size-lg);
        }

        .error-details {
            background: var(--bg-secondary);
            border-radius: var(--border-radius-md);
            padding: var(--spacing-lg);
            margin: var(--spacing-lg) 0;
        }

        .error-code {
            background: #2d3436;
            color: #dfe6e9;
            padding: var(--spacing-md);
            border-radius: var(--border-radius-md);
            font-family: var(--font-mono);
            font-size: var(--font-size-sm);
            margin: var(--spacing-md) 0;
            overflow-x: auto;
            position: relative;
        }

        .error-code::before {
            content: attr(data-language);
            position: absolute;
            top: var(--spacing-xs);
            right: var(--spacing-sm);
            color: var(--text-light);
            font-size: var(--font-size-xs);
            text-transform: uppercase;
        }

        .error-meta {
            display: flex;
            justify-content: space-between;
            color: var(--text-light);
            font-size: var(--font-size-sm);
            margin-top: var(--spacing-lg);
            padding-top: var(--spacing-lg);
            border-top: 1px solid var(--border-color);
        }

        .back-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--error-color);
            color: white;
            padding: var(--spacing-sm) var(--spacing-xl);
            border-radius: var(--border-radius-full);
            font-weight: 500;
            margin-top: var(--spacing-lg);
            transition: all var(--transition-normal);
        }

        .back-button:hover {
            transform: translateY(-2px);
            box-shadow: var(--box-shadow-lg);
            background: #c0392b;
        }

        .back-button::before {
            content: "←";
            margin-right: var(--spacing-sm);
            font-size: var(--font-size-lg);
        }
    `,

  // Grafikler için stiller
  charts: `
        .chart-container {
            position: relative;
            padding: var(--spacing-md);
            margin: var(--spacing-md) 0;
        }

        .progress-bar {
            width: 100%;
            height: 8px;
            background: var(--bg-secondary);
            border-radius: var(--border-radius-full);
            overflow: hidden;
            position: relative;
        }

        .progress-bar-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
            border-radius: var(--border-radius-full);
            transition: width var(--transition-normal);
            position: relative;
        }

        .progress-bar-fill::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
                45deg,
                rgba(255,255,255,0.2) 25%,
                transparent 25%,
                transparent 50%,
                rgba(255,255,255,0.2) 50%,
                rgba(255,255,255,0.2) 75%,
                transparent 75%
            );
            background-size: 15px 15px;
            animation: progressStripes 1s linear infinite;
        }

        @keyframes progressStripes {
            0% { background-position: 0 0; }
            100% { background-position: 15px 0; }
        }

        .stat-circle {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: conic-gradient(var(--primary-color) var(--percent), var(--bg-secondary) 0);
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
        }

        .stat-circle::before {
            content: attr(data-value);
            position: absolute;
            width: 80%;
            height: 80%;
            background: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: var(--font-size-lg);
        }

        .sparkline {
            height: 30px;
            stroke: var(--primary-color);
            stroke-width: 2;
            fill: none;
            stroke-linecap: round;
            stroke-linejoin: round;
        }

        .sparkline-fill {
            fill: rgba(52, 152, 219, 0.1);
        }
    `,

  // Kartlar için ek stiller
  cards: `
        .card-glass {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .card-gradient {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
        }

        .card-hover-effect {
            transition: all var(--transition-normal);
            cursor: pointer;
        }

        .card-hover-effect:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: var(--box-shadow-xl);
        }

        .card-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: var(--spacing-md);
            padding-bottom: var(--spacing-sm);
            border-bottom: 1px solid var(--border-color);
        }

        .card-icon {
            width: 40px;
            height: 40px;
            border-radius: var(--border-radius-md);
            background: var(--primary-color);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: var(--font-size-xl);
        }

        .card-footer {
            margin-top: var(--spacing-md);
            padding-top: var(--spacing-sm);
            border-top: 1px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: var(--font-size-sm);
            color: var(--text-light);
        }
    `,

  // Badges ve etiketler
  badges: `
        .badge {
            display: inline-flex;
            align-items: center;
            padding: var(--spacing-xs) var(--spacing-sm);
            border-radius: var(--border-radius-full);
            font-size: var(--font-size-xs);
            font-weight: 500;
            line-height: 1;
            white-space: nowrap;
        }

        .badge-primary { background: var(--primary-color); color: white; }
        .badge-secondary { background: var(--secondary-color); color: white; }
        .badge-accent { background: var(--accent-color); color: white; }
        .badge-success { background: var(--success-color); color: white; }
        .badge-warning { background: var(--warning-color); color: white; }
        .badge-error { background: var(--error-color); color: white; }

        .badge-outline {
            background: transparent;
            border: 1px solid currentColor;
        }

        .badge-dot::before {
            content: '';
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: currentColor;
            margin-right: var(--spacing-xs);
        }
    `,

  // Tooltips
  tooltips: `
        [data-tooltip] {
            position: relative;
            cursor: help;
        }

        [data-tooltip]::before,
        [data-tooltip]::after {
            position: absolute;
            opacity: 0;
            visibility: hidden;
            transition: all var(--transition-fast);
            z-index: var(--z-tooltip);
        }

        [data-tooltip]::before {
            content: attr(data-tooltip);
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(-5px);
            padding: var(--spacing-xs) var(--spacing-sm);
            border-radius: var(--border-radius-sm);
            background: var(--text-color);
            color: white;
            font-size: var(--font-size-xs);
            white-space: nowrap;
        }

        [data-tooltip]::after {
            content: '';
            bottom: calc(100% - 5px);
            left: 50%;
            transform: translateX(-50%) translateY(-5px);
            border: 5px solid transparent;
            border-top-color: var(--text-color);
        }

        [data-tooltip]:hover::before,
        [data-tooltip]:hover::after {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(0);
        }
    `,

  // Skeleton loading
  skeleton: `
        @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
        }

        .skeleton {
            background: linear-gradient(
                90deg,
                var(--bg-secondary) 0px,
                rgba(255, 255, 255, 0.8) 50%,
                var(--bg-secondary) 100%
            );
            background-size: 1000px 100%;
            animation: shimmer 2s infinite linear;
            border-radius: var(--border-radius-sm);
        }

        .skeleton-text {
            height: 1em;
            margin: var(--spacing-xs) 0;
        }

        .skeleton-circle {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }

        .skeleton-button {
            height: 40px;
            width: 100px;
        }
    `,

  // Medya sorguları
  mediaQueries: `
        @media (max-width: 768px) {
            .container {
                padding: 0 var(--spacing-sm);
            }

            .grid {
                grid-template-columns: 1fr;
                gap: var(--spacing-md);
            }

            h1 { font-size: var(--font-size-3xl); }
            h2 { font-size: var(--font-size-2xl); }
            h3 { font-size: var(--font-size-xl); }
        }

        @media (max-width: 480px) {
            body {
                font-size: var(--font-size-sm);
            }

            .card {
                padding: var(--spacing-md);
            }

            .error-content {
                padding: var(--spacing-lg);
            }
        }

        @media (prefers-color-scheme: dark) {
            :root {
                --bg-color: #1a1a1a;
                --bg-secondary: #2d2d2d;
                --text-color: #ffffff;
                --text-light: #a0a0a0;
                --border-color: #404040;
            }

            .card, .error-content {
                background: var(--bg-secondary);
            }

            .console-log {
                background: rgba(255, 255, 255, 0.05);
            }

            .skeleton {
                background: linear-gradient(
                    90deg,
                    var(--bg-secondary) 0px,
                    rgba(255, 255, 255, 0.1) 50%,
                    var(--bg-secondary) 100%
                );
            }
        }
    `,

  // Tüm stilleri birleştir
  getFullStyles() {
    return `
            ${this.variables}
            ${this.global}
            ${this.console}
            ${this.table}
            ${this.notifications}
            ${this.errorPage}
            ${this.charts}
            ${this.cards}
            ${this.badges}
            ${this.tooltips}
            ${this.skeleton}
            ${this.mediaQueries}
        `;
  },

  // Hata sayfası HTML şablonu
  getErrorPageTemplate(error, filePath, code, errorId, errorTime) {
    return `
        <!DOCTYPE html>
        <html lang="tr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>AniMax - Hata Oluştu</title>
            <style>${this.getFullStyles()}</style>
        </head>
        <body>
            <div class="error-page">
                <div class="error-content">
                    <div class="error-header">
                        <div class="error-icon">🚫</div>
                        <h1 class="error-title">Hata Oluştu</h1>
                        <p class="error-subtitle">Kodunuz çalıştırılırken bir hata ile karşılaşıldı.</p>
                    </div>
                    
                    <div class="error-details">
                        <strong>Hata Mesajı:</strong>
                        <div class="error-code" data-language="error">${error.message}</div>
                        
                        <strong>Hata Konumu:</strong>
                        <div class="error-code" data-language="path">${filePath}</div>
                        
                        <strong>Hatalı Kod:</strong>
                        <div class="error-code" data-language="javascript">${code}</div>
                        
                        ${error.stack ? `
                            <strong>Hata Detayı:</strong>
                            <div class="error-code" data-language="stack">${error.stack}</div>
                        ` : ''}
                    </div>
                    
                    <div class="error-meta">
                        <span>Hata ID: ${errorId}</span>
                        <span>Zaman: ${errorTime}</span>
                    </div>
                    
                    <div style="text-align: center;">
                        <a href="/anasayfa" class="back-button">Ana Sayfaya Dön</a>
                    </div>
                </div>
            </div>
        </body>
        </html>
        `;
  }
};

module.exports = styles; 