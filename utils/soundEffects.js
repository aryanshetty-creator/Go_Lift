// Sound effects utilities

export const soundEffects = {
    context: null,

    init() {
        if (!this.context && typeof AudioContext !== 'undefined') {
            this.context = new AudioContext();
        }
    },

    playBeep(frequency = 440, duration = 200) {
        if (!this.context) this.init();
        if (!this.context) return;

        const oscillator = this.context.createOscillator();
        const gainNode = this.context.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.context.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.3, this.context.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + duration / 1000);

        oscillator.start(this.context.currentTime);
        oscillator.stop(this.context.currentTime + duration / 1000);
    },

    playSuccess() {
        this.playBeep(523, 100);
        setTimeout(() => this.playBeep(659, 100), 100);
        setTimeout(() => this.playBeep(784, 200), 200);
    },

    playWarning() {
        this.playBeep(300, 200);
    },

    playTimerEnd() {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => this.playBeep(880, 150), i * 200);
        }
    }
};
