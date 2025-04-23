export class Timer {
    constructor() {
        this.timer = document.querySelector('.timer');

        this.hoursLeft = this.timer.querySelector('.hours');
        this.minutesLeft = this.timer.querySelector('.minutes');
        this.secondsLeft = this.timer.querySelector('.seconds');

        this.init();
    }

    init() {
        this.updateCountdown();
        setInterval(this.updateCountdown.bind(this), 1000);
    }

    getNextIntervalTime() {
        const now = new Date();
        const minutes = now.getMinutes();
        const nextHalfHour = minutes < 30 ? 30 : 60;
        const end = new Date(now);
        end.setMinutes(nextHalfHour, 0, 0);
        return end;
    }

    updateCountdown() {
        const now = new Date().getTime();
        const end = this.getNextIntervalTime().getTime();
        const timeLeft = end - now;

        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);

        this.hoursLeft.textContent = String(hours).padStart(2, '0');
        this.minutesLeft.textContent = String(minutes).padStart(2, '0');
        this.secondsLeft.textContent = String(seconds).padStart(2, '0');
    }
}
