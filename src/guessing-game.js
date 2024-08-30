class GuessingGame {
    constructor() {
        this.minRange = 0;
        this.maxRange = 0;
        this.currentGuess = 0;
    }

    setRange(min, max) {
        this.minRange = min;
        this.maxRange = max;
    }
    // Вернули текущее предположение
    guess() {
        this.currentGuess = Math.round((this.minRange + this.maxRange)/2);
        return this.currentGuess;
    }
    // Обновили границы диапазона
    lower() {
        this.maxRange = this.currentGuess;
    }

    greater() {
        this.minRange = this.currentGuess;
    }
}

module.exports = GuessingGame;
