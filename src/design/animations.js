// Temel animasyonlar
const baseAnimations = `
    @keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
    }

    @keyframes pulse {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.5); opacity: 0; }
        100% { transform: scale(1); opacity: 0; }
    }

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }

    @keyframes slideIn {
        from { transform: translateX(-20px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-30px); }
        60% { transform: translateY(-15px); }
    }

    @keyframes glow {
        0% { box-shadow: 0 0 5px var(--primary-color); }
        50% { box-shadow: 0 0 20px var(--primary-color); }
        100% { box-shadow: 0 0 5px var(--primary-color); }
    }
`;

// Animasyon sınıfları
const animationClasses = `
    .float { animation: float 3s ease-in-out infinite; }
    .pulse { animation: pulse 2s ease-in-out infinite; }
    .shake { animation: shake 0.5s ease-in-out; }
    .slide-in { animation: slideIn 0.3s ease-out; }
    .fade-in { animation: fadeIn 0.3s ease-out; }
    .rotate { animation: rotate 2s linear infinite; }
    .bounce { animation: bounce 2s ease infinite; }
    .glow { animation: glow 2s ease-in-out infinite; }

    /* Hover animasyonları */
    .hover-float:hover { animation: float 3s ease-in-out infinite; }
    .hover-shake:hover { animation: shake 0.5s ease-in-out; }
    .hover-pulse:hover { animation: pulse 2s ease-in-out infinite; }
    .hover-glow:hover { animation: glow 2s ease-in-out infinite; }
`;

// Tüm animasyonları birleştir
const animations = `
    ${baseAnimations}
    ${animationClasses}
`;

module.exports = animations; 