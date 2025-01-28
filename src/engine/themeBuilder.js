class ThemeBuilder {
  constructor() {
    this.theme = {
      colors: {
        primary: '#3498db',
        secondary: '#2ecc71',
        accent: '#e74c3c',
        success: '#27ae60',
        warning: '#f1c40f',
        error: '#e74c3c',
        info: '#3498db',
        background: '#f5f6fa',
        backgroundSecondary: '#fafbfc',
        text: '#2c3e50',
        textLight: '#7f8c8d',
        border: '#dcdde1'
      },
      typography: {
        fontFamily: '\'Segoe UI\', system-ui, -apple-system, sans-serif',
        monoFamily: '\'Fira Code\', \'Consolas\', monospace',
        sizes: {
          xs: '0.75rem',
          sm: '0.875rem',
          md: '1rem',
          lg: '1.125rem',
          xl: '1.25rem',
          '2xl': '1.5rem',
          '3xl': '1.875rem',
          '4xl': '2.25rem'
        },
        weights: {
          light: 300,
          normal: 400,
          medium: 500,
          semibold: 600,
          bold: 700
        },
        lineHeights: {
          none: 1,
          tight: 1.25,
          normal: 1.5,
          loose: 2
        }
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem'
      },
      borders: {
        radius: {
          sm: '4px',
          md: '8px',
          lg: '12px',
          xl: '16px',
          full: '9999px'
        },
        width: {
          none: '0',
          thin: '1px',
          thick: '2px',
          heavy: '4px'
        }
      },
      shadows: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
      },
      transitions: {
        fast: '150ms ease',
        normal: '250ms ease',
        slow: '350ms ease'
      },
      zIndex: {
        negative: -1,
        normal: 1,
        tooltip: 10,
        fixed: 100,
        modal: 1000
      },
      gradients: {
        primary: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
        accent: 'linear-gradient(135deg, var(--accent-color), var(--error-color))',
        success: 'linear-gradient(135deg, var(--success-color), var(--secondary-color))',
        warning: 'linear-gradient(135deg, var(--warning-color), var(--accent-color))'
      },
      animations: {
        bounce: {
          keyframes: `
                        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                        40% { transform: translateY(-20px); }
                        60% { transform: translateY(-10px); }
                    `,
          duration: '2s'
        },
        fadeIn: {
          keyframes: `
                        from { opacity: 0; transform: translateY(-10px); }
                        to { opacity: 1; transform: translateY(0); }
                    `,
          duration: '250ms'
        },
        slideIn: {
          keyframes: `
                        from { transform: translateX(-10px); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    `,
          duration: '250ms'
        },
        pulse: {
          keyframes: `
                        0% { transform: scale(1); }
                        50% { transform: scale(1.05); }
                        100% { transform: scale(1); }
                    `,
          duration: '2s'
        }
      },
      darkMode: {
        colors: {
          background: '#1a1a1a',
          backgroundSecondary: '#2d2d2d',
          text: '#ffffff',
          textLight: '#a0a0a0',
          border: '#404040'
        }
      },
      components: {
        card: {
          padding: 'var(--spacing-lg)',
          background: 'white',
          borderRadius: 'var(--border-radius-lg)',
          shadow: 'var(--box-shadow-md)'
        },
        button: {
          padding: 'var(--spacing-sm) var(--spacing-lg)',
          borderRadius: 'var(--border-radius-md)',
          fontSize: 'var(--font-size-md)',
          fontWeight: 500
        },
        input: {
          padding: 'var(--spacing-sm) var(--spacing-md)',
          borderRadius: 'var(--border-radius-md)',
          borderColor: 'var(--border-color)',
          fontSize: 'var(--font-size-md)'
        }
      }
    };
  }

  // Renk ayarları
  setColors(colors) {
    this.theme.colors = { ...this.theme.colors, ...colors };
    return this;
  }

  // Tipografi ayarları
  setTypography(typography) {
    this.theme.typography = { ...this.theme.typography, ...typography };
    return this;
  }

  // Boşluk ayarları
  setSpacing(spacing) {
    this.theme.spacing = { ...this.theme.spacing, ...spacing };
    return this;
  }

  // Kenarlık ayarları
  setBorders(borders) {
    this.theme.borders = { ...this.theme.borders, ...borders };
    return this;
  }

  // Gölge ayarları
  setShadows(shadows) {
    this.theme.shadows = { ...this.theme.shadows, ...shadows };
    return this;
  }

  // Geçiş ayarları
  setTransitions(transitions) {
    this.theme.transitions = { ...this.theme.transitions, ...transitions };
    return this;
  }

  // Gradyan ayarları
  setGradients(gradients) {
    this.theme.gradients = { ...this.theme.gradients, ...gradients };
    return this;
  }

  // Animasyon ayarları
  setAnimations(animations) {
    this.theme.animations = { ...this.theme.animations, ...animations };
    return this;
  }

  // Karanlık mod ayarları
  setDarkMode(darkMode) {
    this.theme.darkMode = { ...this.theme.darkMode, ...darkMode };
    return this;
  }

  // Bileşen ayarları
  setComponents(components) {
    this.theme.components = { ...this.theme.components, ...components };
    return this;
  }

  // CSS değişkenlerini oluştur
  generateCSSVariables() {
    return `
            :root {
                /* Renkler */
                --primary-color: ${this.theme.colors.primary};
                --secondary-color: ${this.theme.colors.secondary};
                --accent-color: ${this.theme.colors.accent};
                --success-color: ${this.theme.colors.success};
                --warning-color: ${this.theme.colors.warning};
                --error-color: ${this.theme.colors.error};
                --info-color: ${this.theme.colors.info};
                --bg-color: ${this.theme.colors.background};
                --bg-secondary: ${this.theme.colors.backgroundSecondary};
                --text-color: ${this.theme.colors.text};
                --text-light: ${this.theme.colors.textLight};
                --border-color: ${this.theme.colors.border};

                /* Tipografi */
                --font-primary: ${this.theme.typography.fontFamily};
                --font-mono: ${this.theme.typography.monoFamily};
                --font-size-xs: ${this.theme.typography.sizes.xs};
                --font-size-sm: ${this.theme.typography.sizes.sm};
                --font-size-md: ${this.theme.typography.sizes.md};
                --font-size-lg: ${this.theme.typography.sizes.lg};
                --font-size-xl: ${this.theme.typography.sizes.xl};
                --font-size-2xl: ${this.theme.typography.sizes['2xl']};
                --font-size-3xl: ${this.theme.typography.sizes['3xl']};
                --font-size-4xl: ${this.theme.typography.sizes['4xl']};

                /* Boşluklar */
                --spacing-xs: ${this.theme.spacing.xs};
                --spacing-sm: ${this.theme.spacing.sm};
                --spacing-md: ${this.theme.spacing.md};
                --spacing-lg: ${this.theme.spacing.lg};
                --spacing-xl: ${this.theme.spacing.xl};
                --spacing-2xl: ${this.theme.spacing['2xl']};

                /* Kenarlıklar */
                --border-radius-sm: ${this.theme.borders.radius.sm};
                --border-radius-md: ${this.theme.borders.radius.md};
                --border-radius-lg: ${this.theme.borders.radius.lg};
                --border-radius-xl: ${this.theme.borders.radius.xl};
                --border-radius-full: ${this.theme.borders.radius.full};

                /* Gölgeler */
                --box-shadow-sm: ${this.theme.shadows.sm};
                --box-shadow-md: ${this.theme.shadows.md};
                --box-shadow-lg: ${this.theme.shadows.lg};
                --box-shadow-xl: ${this.theme.shadows.xl};

                /* Geçişler */
                --transition-fast: ${this.theme.transitions.fast};
                --transition-normal: ${this.theme.transitions.normal};
                --transition-slow: ${this.theme.transitions.slow};

                /* Z-index */
                --z-negative: ${this.theme.zIndex.negative};
                --z-normal: ${this.theme.zIndex.normal};
                --z-tooltip: ${this.theme.zIndex.tooltip};
                --z-fixed: ${this.theme.zIndex.fixed};
                --z-modal: ${this.theme.zIndex.modal};
            }

            /* Karanlık Mod */
            @media (prefers-color-scheme: dark) {
                :root {
                    --bg-color: ${this.theme.darkMode.colors.background};
                    --bg-secondary: ${this.theme.darkMode.colors.backgroundSecondary};
                    --text-color: ${this.theme.darkMode.colors.text};
                    --text-light: ${this.theme.darkMode.colors.textLight};
                    --border-color: ${this.theme.darkMode.colors.border};
                }
            }
        `;
  }

  // Animasyonları oluştur
  generateAnimations() {
    return Object.entries(this.theme.animations).map(([name, animation]) => `
            @keyframes ${name} {
                ${animation.keyframes}
            }
        `).join('\n');
  }

  // Tüm CSS'i oluştur
  generateCSS() {
    return `
            ${this.generateCSSVariables()}
            ${this.generateAnimations()}
        `;
  }
}

module.exports = ThemeBuilder; 