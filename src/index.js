const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const AniMaxEngine = require('./engine/animaxEngine');
const Router = require('./router');
const NodeRunner = require('./engine/nodeRunner');
const styles = require('./engine/styles');
const ThemeBuilder = require('./engine/themeBuilder');
const ThemeManager = require('./engine/themeManager');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// AniMax Motor örneği
const animaxEngine = new AniMaxEngine();

// Router örneği
const router = new Router(animaxEngine);

// Tema yöneticisi örneği
const themeManager = new ThemeManager();

// Örnek özel tag tanımla
animaxEngine.defineTag('zaman', () => {
  return new Date().toLocaleString('tr-TR');
});

// Tema değiştirme endpoint'i
app.post('/switch-theme', (req, res) => {
  const { theme } = req.body;
  if (themeManager.setCurrentTheme(theme)) {
    const css = themeManager.generateThemeCSS(theme);
    res.json({ success: true, css });
  } else {
    res.status(400).json({ success: false, error: 'Geçersiz tema' });
  }
});

// Router'ı kullan
app.use('/', router.getRouter());

// Statik dosyalar
app.use('/public', express.static(path.join(__dirname, '..', 'public')));

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`AniMax motoru http://localhost:${port} adresinde çalışıyor`);
});

module.exports = {
  NodeRunner,
  styles,
  ThemeBuilder,
  ThemeManager
}; 