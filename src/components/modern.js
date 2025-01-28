// Modern bileşen stilleri
const modernComponents = `
    /* Modern Kartlar */
    .card-glass {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: var(--border-radius-lg);
        padding: var(--spacing-lg);
        transition: all var(--transition-normal);
    }

    .card-glass:hover {
        transform: translateY(-5px);
        box-shadow: var(--box-shadow-lg);
    }

    .card-gradient {
        background: var(--gradient-primary);
        color: white;
        border-radius: var(--border-radius-lg);
        padding: var(--spacing-lg);
        transition: all var(--transition-normal);
    }

    /* Modern Butonlar */
    .button-3d {
        background: var(--primary-color);
        color: white;
        padding: var(--spacing-sm) var(--spacing-lg);
        border: none;
        border-radius: var(--border-radius-md);
        transform-style: preserve-3d;
        transform: perspective(1000px) translateZ(0);
        transition: all var(--transition-normal);
    }

    .button-3d:hover {
        transform: perspective(1000px) translateZ(20px) rotateX(-10deg);
    }

    .button-neon {
        background: transparent;
        color: var(--primary-color);
        border: 2px solid var(--primary-color);
        padding: var(--spacing-sm) var(--spacing-lg);
        border-radius: var(--border-radius-full);
        text-transform: uppercase;
        letter-spacing: 2px;
        position: relative;
        overflow: hidden;
        transition: all var(--transition-normal);
    }

    .button-neon:hover {
        box-shadow: 0 0 20px var(--primary-color);
        text-shadow: 0 0 10px var(--primary-color);
    }

    /* Modern Rozetler */
    .badge-pulse {
        display: inline-block;
        padding: 0.25em 0.75em;
        border-radius: var(--border-radius-full);
        background: var(--accent-color);
        color: white;
        position: relative;
    }

    .badge-pulse::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: var(--border-radius-full);
        border: 2px solid var(--accent-color);
        animation: pulse 2s infinite;
    }

    /* Modern İlerleme Çubukları */
    .progress-bar-modern {
        width: 100%;
        height: 8px;
        background: var(--bg-secondary);
        border-radius: var(--border-radius-full);
        overflow: hidden;
        position: relative;
    }

    .progress-bar-modern .fill {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background: var(--gradient-primary);
        border-radius: var(--border-radius-full);
        transition: width var(--transition-normal);
    }

    /* Modern Form Elemanları */
    .input-modern {
        width: 100%;
        padding: var(--spacing-md);
        border: 2px solid var(--border-color);
        border-radius: var(--border-radius-md);
        background: var(--bg-color);
        transition: all var(--transition-normal);
    }

    .input-modern:focus {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb), 0.2);
    }

    /* Modern İpuçları */
    .tooltip-modern {
        position: relative;
        display: inline-block;
    }

    .tooltip-modern::after {
        content: attr(data-tooltip);
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        padding: var(--spacing-sm) var(--spacing-md);
        background: var(--bg-secondary);
        color: var(--text-color);
        border-radius: var(--border-radius-sm);
        font-size: var(--font-size-sm);
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transition: all var(--transition-normal);
    }

    .tooltip-modern:hover::after {
        opacity: 1;
        visibility: visible;
        transform: translateX(-50%) translateY(-5px);
    }

    /* Modern Animasyonlar */
    @keyframes pulse {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.5); opacity: 0; }
        100% { transform: scale(1); opacity: 0; }
    }

    @keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
    }

    .float {
        animation: float 3s ease-in-out infinite;
    }
`;

module.exports = modernComponents; 