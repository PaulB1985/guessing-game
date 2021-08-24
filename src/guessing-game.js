class GuessingGame {
    constructor() {
        let min = 0;
        let max = 0;
        let maybe = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.maybe = Math.ceil( (this.max - this.min) / 2 ) + this.min;
        // console.log( this.min + ' ' + this.maybe + ' ' + this.max );
        return this.maybe;
    }

    lower() {
        this.max = this.maybe;
    }

    greater() {
        this.min = this.maybe;
    }
}

module.exports = GuessingGame;
