const { ThemeBuilder } = require('../engine/themeBuilder');

// Modern Pastel Tema
const modernPastel = new ThemeBuilder()
  .setColors({
    primary: '#6c5ce7',
    secondary: '#a8e6cf',
    accent: '#ff8993',
    success: '#2ecc71',
    warning: '#ffd93d',
    error: '#ff6b6b',
    info: '#74b9ff'
  })
  .setTypography({
    fontFamily: '\'Poppins\', sans-serif',
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem'
    }
  });

// Neon Gece Teması
const neonNight = new ThemeBuilder()
  .setColors({
    primary: '#00fff5',
    secondary: '#00ff88',
    accent: '#ff00ff',
    success: '#00ffaa',
    warning: '#ffff00',
    error: '#ff0055',
    info: '#00ccff',
    background: '#0a0a0a',
    backgroundSecondary: '#1a1a1a',
    text: '#ffffff',
    textLight: '#888888'
  })
  .setGradients({
    primary: 'linear-gradient(135deg, #00fff5, #00ff88)',
    accent: 'linear-gradient(135deg, #ff00ff, #ff0055)',
    success: 'linear-gradient(135deg, #00ffaa, #00ff88)',
    warning: 'linear-gradient(135deg, #ffff00, #ff00ff)'
  })
  .setShadows({
    sm: '0 0 5px rgba(0, 255, 245, 0.3)',
    md: '0 0 15px rgba(0, 255, 245, 0.5)',
    lg: '0 0 25px rgba(0, 255, 245, 0.7)',
    xl: '0 0 35px rgba(0, 255, 245, 0.9)'
  });

// Minimalist Tema
const minimalist = new ThemeBuilder()
  .setColors({
    primary: '#2c3e50',
    secondary: '#34495e',
    accent: '#3498db',
    success: '#27ae60',
    warning: '#f39c12',
    error: '#c0392b',
    info: '#2980b9',
    background: '#ffffff',
    backgroundSecondary: '#f8f9fa',
    text: '#2c3e50',
    textLight: '#7f8c8d'
  })
  .setTypography({
    fontFamily: '\'Inter\', sans-serif',
    monoFamily: '\'IBM Plex Mono\', monospace'
  })
  .setBorders({
    radius: {
      sm: '2px',
      md: '4px',
      lg: '6px',
      xl: '8px',
      full: '9999px'
    }
  });

// Retro Tema
const retro = new ThemeBuilder()
  .setColors({
    primary: '#ff6b6b',
    secondary: '#ffd93d',
    accent: '#4ecdc4',
    success: '#95e1d3',
    warning: '#ffd93d',
    error: '#ff6b6b',
    info: '#4ecdc4',
    background: '#f7f1e3',
    backgroundSecondary: '#ece2cd',
    text: '#2c3e50',
    textLight: '#7f8c8d'
  })
  .setTypography({
    fontFamily: '\'Press Start 2P\', cursive',
    sizes: {
      xs: '0.625rem',
      sm: '0.75rem',
      md: '0.875rem',
      lg: '1rem',
      xl: '1.25rem'
    }
  })
  .setShadows({
    sm: '2px 2px 0 rgba(0, 0, 0, 0.2)',
    md: '4px 4px 0 rgba(0, 0, 0, 0.2)',
    lg: '6px 6px 0 rgba(0, 0, 0, 0.2)',
    xl: '8px 8px 0 rgba(0, 0, 0, 0.2)'
  });

module.exports = {
  modernPastel,
  neonNight,
  minimalist,
  retro
}; 