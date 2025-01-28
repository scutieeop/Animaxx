// Özel efektler
const effects = `
    /* Cam efekti */
    .glass {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: var(--border-radius-lg);
    }

    /* Neon efekti */
    .neon {
        box-shadow: 0 0 10px var(--primary-color),
                   0 0 20px var(--primary-color),
                   0 0 30px var(--primary-color);
        text-shadow: 0 0 5px var(--primary-color);
    }

    /* Gradyan metin */
    .gradient-text {
        background: var(--gradient-primary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    /* Parıltı efekti */
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
        transform: rotate(45deg);
        animation: shine 3s infinite;
    }

    @keyframes shine {
        0% { transform: translateX(-100%) rotate(45deg); }
        100% { transform: translateX(100%) rotate(45deg); }
    }

    /* 3D dönüşüm */
    .transform-3d {
        transform-style: preserve-3d;
        perspective: 1000px;
    }

    .transform-3d:hover {
        transform: rotateX(10deg) rotateY(10deg);
    }

    /* Gölge efekti */
    .shadow-soft {
        box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
    }

    .shadow-sharp {
        box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.2);
    }

    /* Kenar parıltısı */
    .border-glow {
        border: 2px solid transparent;
        background: linear-gradient(var(--bg-color), var(--bg-color)) padding-box,
                    var(--gradient-primary) border-box;
    }

    /* Dalgalı kenarlık */
    .border-wave {
        --border-width: 3px;
        --border-color: var(--primary-color);
        
        position: relative;
        border: var(--border-width) solid transparent;
    }

    .border-wave::after {
        content: '';
        position: absolute;
        top: calc(-1 * var(--border-width));
        left: calc(-1 * var(--border-width));
        right: calc(-1 * var(--border-width));
        bottom: calc(-1 * var(--border-width));
        background: linear-gradient(60deg, var(--border-color) 0%, transparent 50%, var(--border-color) 100%);
        animation: borderWave 3s linear infinite;
        z-index: -1;
    }

    @keyframes borderWave {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
    }

    /* Bulanık arka plan */
    .blur-bg {
        position: relative;
    }

    .blur-bg::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: inherit;
        filter: blur(10px);
        transform: scale(1.1);
        z-index: -1;
    }
`;

module.exports = effects; 