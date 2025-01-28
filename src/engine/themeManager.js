const { modernPastel, neonNight, minimalist, retro } = require('../themes/templates');
const modernComponents = require('../components/modern');

class ThemeManager {
  constructor() {
    this.themes = {
      modernPastel,
      neonNight,
      minimalist,
      retro
    };
    this.currentTheme = 'modernPastel';
  }

  generateThemeCSS(themeName) {
    const theme = this.themes[themeName];
    if (!theme) {
      console.error(`Tema bulunamadı: ${themeName}`);
      return '';
    }

    return `
            ${theme.generateCSS()}
            ${modernComponents}
        `;
  }

  getCurrentTheme() {
    return this.currentTheme;
  }

  setCurrentTheme(themeName) {
    if (this.themes[themeName]) {
      this.currentTheme = themeName;
      return true;
    }
    return false;
  }

  getAllThemes() {
    return Object.keys(this.themes);
  }

  // Tema değiştirme için client-side kod üret
  generateThemeSwitcher() {
    return `
            <script>
                function switchTheme(themeName) {
                    fetch('/switch-theme', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ theme: themeName })
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            document.documentElement.style.cssText = data.css;
                            console.log('Tema değiştirildi:', themeName);
                        }
                    })
                    .catch(error => console.error('Tema değiştirme hatası:', error));
                }
            </script>
        `;
  }
}

module.exports = ThemeManager; 