const ThemeBuilder = require('./themeBuilder');
const ThemeManager = require('./themeManager');
const templates = require('./themes/templates');
const components = require('./components/modern');
const animations = require('./animations');
const effects = require('./effects');

// Varsayılan tema ve bileşenleri dışa aktar
module.exports = {
  ThemeBuilder,
  ThemeManager,
  templates,
  components,
  animations,
  effects,
  defaultTheme: templates.modernPastel
}; 