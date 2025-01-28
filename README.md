# AniMax Engine

Node.js tabanlı, modern ve zengin tasarım öğelerine sahip dinamik web sayfası motoru. HTML dosyaları içinde Node.js kodu çalıştırmanızı sağlar.

## ✨ Özellikler

### 🚀 Temel Özellikler
- HTML dosyaları içinde `<node>` etiketleri ile Node.js kodu çalıştırma
- Güvenli kod yürütme ortamı
- Zengin API desteği
- Modüler yapı
- Hata yönetimi ve güzel hata sayfaları

### 🎨 Tasarım Sistemi

AniMax, modern ve özelleştirilebilir bir tasarım sistemi sunar. Tüm tasarım öğeleri `src/design` klasöründe toplanmıştır.

#### 📁 Tasarım Sistemi Yapısı
```
src/design/
├── index.js         # Ana tasarım modülü
├── animations.js    # Animasyonlar
├── effects.js       # Özel efektler
├── themes/         
│   └── templates.js # Hazır tema şablonları
└── components/
    └── modern.js    # Modern bileşenler
```

#### 🎭 Animasyonlar
```html
<!-- Temel Animasyonlar -->
<div class="float">Yukarı-aşağı hareket</div>
<div class="pulse">Nabız efekti</div>
<div class="shake">Sallama efekti</div>
<div class="slide-in">Kayma efekti</div>
<div class="fade-in">Solma efekti</div>
<div class="rotate">Dönme efekti</div>
<div class="bounce">Zıplama efekti</div>
<div class="glow">Parıltı efekti</div>

<!-- Hover Animasyonları -->
<div class="hover-float">Hover ile yukarı-aşağı</div>
<div class="hover-shake">Hover ile sallama</div>
<div class="hover-pulse">Hover ile nabız</div>
<div class="hover-glow">Hover ile parıltı</div>
```

#### ✨ Özel Efektler
```html
<!-- Temel Efektler -->
<div class="glass">Cam efekti</div>
<div class="neon">Neon efekti</div>
<h1 class="gradient-text">Gradyan metin</h1>
<div class="shine">Parıltı efekti</div>
<div class="transform-3d">3D dönüşüm</div>

<!-- Gölge Efektleri -->
<div class="shadow-soft">Yumuşak gölge</div>
<div class="shadow-sharp">Keskin gölge</div>

<!-- Kenarlık Efektleri -->
<div class="border-glow">Parlayan kenarlık</div>
<div class="border-wave">Dalgalı kenarlık</div>

<!-- Arka Plan Efektleri -->
<div class="blur-bg">Bulanık arka plan</div>
```

#### 🎨 Hazır Temalar

1. Modern Pastel
```javascript
const { templates } = require('animax-engine/design');
const modernPastel = templates.modernPastel;
```
- Yumuşak renkler
- Modern tipografi
- Poppins font ailesi
- Yumuşak gölgeler

2. Neon Gece
```javascript
const { templates } = require('animax-engine/design');
const neonNight = templates.neonNight;
```
- Parlak neon renkler
- Koyu arka plan
- Işıltılı efektler
- Neon gölgeler

3. Minimalist
```javascript
const { templates } = require('animax-engine/design');
const minimalist = templates.minimalist;
```
- Sade renkler
- Inter font ailesi
- İnce kenarlıklar
- Minimal gölgeler

4. Retro
```javascript
const { templates } = require('animax-engine/design');
const retro = templates.retro;
```
- Retro renkler
- Press Start 2P font
- Keskin gölgeler
- Piksel efektleri

#### 🧩 Modern Bileşenler
```html
<!-- Kartlar -->
<div class="card-glass">Cam efektli kart</div>
<div class="card-gradient">Gradyan kart</div>

<!-- Butonlar -->
<button class="button-3d">3D Buton</button>
<button class="button-neon">Neon Buton</button>

<!-- Rozetler -->
<span class="badge-pulse">Yeni</span>

<!-- Form Elemanları -->
<input class="input-modern" type="text">

<!-- İpuçları -->
<div class="tooltip-modern" data-tooltip="İpucu metni">Üzerime gel</div>

<!-- İlerleme Çubukları -->
<div class="progress-bar-modern">
    <div class="fill" style="width: 75%"></div>
</div>
```

### 🎨 Özel Tema Oluşturma

```javascript
const { ThemeBuilder } = require('animax-engine/design');

const customTheme = new ThemeBuilder()
    .setColors({
        primary: '#6c5ce7',
        secondary: '#a8e6cf',
        accent: '#ff8993'
    })
    .setTypography({
        fontFamily: "'Poppins', sans-serif",
        sizes: {
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1rem'
        }
    })
    .setAnimations({
        float: {
            keyframes: `
                0% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
                100% { transform: translateY(0); }
            `,
            duration: '3s'
        }
    });
```

### 🌈 Tema Değiştirme

```javascript
const { ThemeManager } = require('animax-engine/design');
const themeManager = new ThemeManager();

// Tema değiştir
themeManager.setCurrentTheme('neonNight');

// CSS oluştur
const css = themeManager.generateThemeCSS('neonNight');
```

### 🎨 Tasarım Sistemi
- Modern ve tutarlı tasarım dili
- CSS değişkenleri sistemi
- Responsive tasarım desteği
- Karanlık mod desteği
- Özelleştirilebilir tema sistemi

### 📊 Görsel Bileşenler
- İlerleme çubukları ve animasyonları
- İstatistik daireleri
- Sparkline grafikleri
- Modern tablo tasarımları
- Yükleme animasyonları (Skeleton loading)

### 🎭 Kart Çeşitleri
- Standart kartlar
- Cam efektli kartlar
- Gradyan kartlar
- Hover efektli kartlar
- Başlık ve altbilgi bölümleri

### 🏷️ UI Elementleri
- Rozetler (Badges)
- İpuçları (Tooltips)
- Bildirimler
- Butonlar
- Form elemanları

### 🌈 Animasyonlar
- Yumuşak geçişler
- Yükleme animasyonları
- İlerleme çubuğu animasyonları
- Hover efektleri
- Sayfa geçişleri

### 🎨 Tema Sistemi
- Tamamen özelleştirilebilir tema yapısı
- Akıcı API ile kolay tema oluşturma
- Hazır tema şablonları
- Otomatik CSS değişkenleri
- Karanlık mod desteği
- Özel animasyonlar ve geçişler
- Gradyan ve efekt koleksiyonu

### 🎭 Bileşen Stilleri
- Modern kart tasarımları
- Cam efekti (glassmorphism)
- Gradyan arka planlar
- Animasyonlu bileşenler
- Özel butonlar ve formlar
- İstatistik göstergeleri
- Yükleme animasyonları

### 🌈 Görsel Efektler
- Özel animasyonlar
- Yumuşak geçişler
- Hover efektleri
- Gölge varyasyonları
- Gradyan koleksiyonu
- Parıltı efektleri
- 3D dönüşümler

## 🛠️ Kurulum

```bash
npm install animax-engine
```

## 📖 Kullanım

```javascript
const { NodeRunner, styles } = require('animax-engine');
const runner = new NodeRunner();

// HTML içindeki Node.js kodlarını çalıştır
const html = `
<html>
<head>
    <node>
        print(`<style>${styles.getFullStyles()}</style>`);
    </node>
</head>
<body>
    <div class="container">
        <div class="card card-gradient">
            <div class="card-header">
                <h2>Sistem Durumu</h2>
                <div class="card-icon">📊</div>
            </div>
            
            <node>
                const os = require('os');
                const cpuUsage = Math.round((1 - os.loadavg()[0]) * 100);
                
                print(`
                    <div class="stat-circle" style="--percent: ${cpuUsage}%" data-value="${cpuUsage}%">
                    </div>
                `);
                
                success('Sistem normal çalışıyor');
            </node>
            
            <div class="card-footer">
                <span>Son güncelleme: <node>print(new Date().toLocaleString('tr-TR'));</node></span>
                <span class="badge badge-success badge-dot">Aktif</span>
            </div>
        </div>
    </div>
</body>
</html>
`;

const result = runner.processScripts(html, __filename);
```

## 🎨 Stil Özelleştirme

```javascript
// Özel tema tanımlama
styles.variables = `
    :root {
        --primary-color: #ff6b6b;
        --secondary-color: #4ecdc4;
        --accent-color: #45b7d1;
        // ... diğer özelleştirmeler
    }
`;

// Özel font ekleme
styles.global += `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
    
    body {
        font-family: 'Poppins', var(--font-primary);
    }
`;

// Özel kart stili
styles.cards += `
    .card-custom {
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        transform: rotate(-1deg);
    }
`;
```

## 🎨 Tema Özelleştirme

### ThemeBuilder Kullanımı

```javascript
const { ThemeBuilder } = require('animax-engine');

// Yeni tema oluştur
const theme = new ThemeBuilder()
    .setColors({
        primary: '#6c5ce7',
        secondary: '#a8e6cf',
        accent: '#ff8993'
    })
    .setTypography({
        fontFamily: "'Poppins', sans-serif",
        monoFamily: "'JetBrains Mono', monospace"
    })
    .setAnimations({
        float: {
            keyframes: `
                0% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
                100% { transform: translateY(0); }
            `,
            duration: '3s'
        }
    });

// Temayı HTML'de kullan
const html = `
<html>
<head>
    <style>${theme.generateCSS()}</style>
</head>
<body>
    <div class="card card-animated">
        <h2>Animasyonlu Kart</h2>
        <p>Bu kart özel animasyona sahip!</p>
    </div>
</body>
</html>
`;
```

### Özelleştirilebilir Özellikler

#### 🎨 Renkler
```javascript
theme.setColors({
    primary: '#6c5ce7',
    secondary: '#a8e6cf',
    accent: '#ff8993',
    success: '#2ecc71',
    warning: '#ffd93d',
    error: '#ff6b6b',
    info: '#74b9ff'
});
```

#### 📝 Tipografi
```javascript
theme.setTypography({
    fontFamily: "'Poppins', sans-serif",
    sizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.25rem',
        xl: '1.5rem'
    },
    weights: {
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700
    }
});
```

#### 🎭 Animasyonlar
```javascript
theme.setAnimations({
    float: {
        keyframes: `
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
        `,
        duration: '3s'
    },
    shake: {
        keyframes: `
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        `,
        duration: '500ms'
    }
});
```

#### 🌈 Gradyanlar
```javascript
theme.setGradients({
    primary: 'linear-gradient(135deg, #6c5ce7, #74b9ff)',
    accent: 'linear-gradient(135deg, #ff8993, #ffd93d)',
    success: 'linear-gradient(135deg, #2ecc71, #a8e6cf)'
});
```

#### 🌙 Karanlık Mod
```javascript
theme.setDarkMode({
    colors: {
        background: '#2d3436',
        backgroundSecondary: '#353b48',
        text: '#dfe6e9',
        textLight: '#b2bec3',
        border: '#636e72'
    }
});
```

#### 🎯 Bileşenler
```javascript
theme.setComponents({
    card: {
        padding: '2rem',
        background: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '16px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)'
    },
    button: {
        padding: '0.75rem 1.5rem',
        borderRadius: '9999px',
        fontSize: '1rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
    }
});
```

### 🎭 Hazır Efektler

#### Cam Efekti
```css
.glass {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}
```

#### Gradyan Metin
```css
.gradient-text {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
```

#### Parıltı Efekti
```css
.shine {
    position: relative;
    overflow: hidden;
}

.shine::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
        45deg,
        transparent 45%,
        rgba(255, 255, 255, 0.1) 50%,
        transparent 55%
    );
    animation: shine 2s infinite;
}
```

#### 3D Hover
```css
.hover-3d {
    transition: transform 0.3s;
    transform-style: preserve-3d;
}

.hover-3d:hover {
    transform: perspective(1000px) rotateX(10deg) rotateY(10deg);
}
```

### 🎨 Renk Paletleri

#### Modern Pastel
```javascript
theme.setColors({
    primary: '#6c5ce7',
    secondary: '#a8e6cf',
    accent: '#ff8993',
    success: '#2ecc71',
    warning: '#ffd93d'
});
```

#### Neon Gece
```javascript
theme.setColors({
    primary: '#00fff5',
    secondary: '#00ff88',
    accent: '#ff00ff',
    background: '#1a1a1a',
    text: '#ffffff'
});
```

#### Sonbahar
```javascript
theme.setColors({
    primary: '#ff6b6b',
    secondary: '#ffd93d',
    accent: '#e17055',
    background: '#fff3e0',
    text: '#2d3436'
});
```

## 🧩 Bileşenler

### İlerleme Çubukları
```html
<div class="progress-bar">
    <div class="progress-bar-fill" style="width: 75%"></div>
</div>
```

### İstatistik Daireleri
```html
<div class="stat-circle" style="--percent: 85%" data-value="85%"></div>
```

### Rozetler
```html
<span class="badge badge-primary">Yeni</span>
<span class="badge badge-success badge-dot">Aktif</span>
<span class="badge badge-warning badge-outline">Uyarı</span>
```

### İpuçları
```html
<span data-tooltip="Bu bir ipucu">Yardım</span>
```

### Yükleme Animasyonları
```html
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-circle"></div>
```

## 🌙 Karanlık Mod

Otomatik karanlık mod desteği için `prefers-color-scheme` medya sorgusu kullanılmıştır. Kullanıcının sistem tercihine göre otomatik olarak değişir.

## 📱 Responsive Tasarım

- Mobil öncelikli yaklaşım
- Esnek grid sistemi
- Breakpoint'lere göre özelleştirilmiş görünüm
- Dinamik font boyutları
- Touch-friendly etkileşimler

## 🔒 Güvenlik

- Güvenli kod yürütme ortamı
- XSS koruması
- HTML escape fonksiyonları
- Hata yönetimi
- Güvenli dosya işlemleri

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: amazing new feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

MIT

## 🙋‍♂️ SSS

### Özel stil nasıl eklerim?
```javascript
styles.custom = `
    .my-class {
        // özel stiller
    }
`;
styles.getFullStyles(); // Tüm stilleri alır
```

### Karanlık mod nasıl özelleştirilir?
```javascript
styles.mediaQueries += `
    @media (prefers-color-scheme: dark) {
        :root {
            --bg-color: #000000;
            // özel karanlık mod değişkenleri
        }
    }
`;
```

### Yeni bir bileşen nasıl oluşturulur?
```javascript
styles.components += `
    .my-component {
        // bileşen stilleri
    }
`;
``` 