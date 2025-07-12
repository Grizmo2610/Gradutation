document.addEventListener('DOMContentLoaded', function () {
    const celebrateBtn = document.getElementById('celebrate-btn');
    const confettiContainer = document.getElementById('confetti-container');

    celebrateBtn.addEventListener('click', function () {
        createConfetti();

        // Play celebration sound
        const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3');
        audio.play();

        // Show message
        setTimeout(() => {
            alert('🎉 Chúc mừng bạn đã tốt nghiệp!  🎓 Năm sau đi dự lễ Tốt nghiệp của tôi bạn nhá!');
        }, 1000);
    });

    function createConfetti() {
        // Fireworks effect
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']
        });

        // Additional bursts
        setTimeout(() => {
            confetti({
                particleCount: 100,
                angle: 60,
                spread: 55,
                origin: { x: 0 }
            });

            confetti({
                particleCount: 100,
                angle: 120,
                spread: 55,
                origin: { x: 1 }
            });
        }, 250);

        // Final big burst
        setTimeout(() => {
            confetti({
                particleCount: 300,
                spread: 100,
                startVelocity: 45,
                scalar: 1.2
            });
        }, 500);
    }

    // Initial small confetti
    createConfetti();
});