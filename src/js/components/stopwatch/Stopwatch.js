const MODULE_NAME = 'app.components.stopwatch';

/**
* The Stopwatch class...
 */
export class Stopwatch {

    constructor() {
        this.hasStarted = false;
        this.cacheNodes();
        this.bindEventListeners();
    }

    checkNodes() {
        let nodes = true;

        if (!this.stopwatch || !this.stopwatchControls || !this.startButton || !this.stopButton || !this.resetButton) {
            nodes = false;
            console.warn('Stopwatch. Missing DOM node dependencies.');
        }

        return nodes;
    }

    cacheNodes() {
        this.stopwatch = document.querySelector('#stopwatch');
        this.stopwatchControls = document.querySelector('#stopwatchControls');
        this.startButton = this.stopwatch.querySelector('#startButton');
        this.stopButton = this.stopwatch.querySelector('#stopButton');
        this.resetButton = this.stopwatch.querySelector('#resetButton');
    }

    toggleStopwatch(e) {
        if (!this.checkNodes()) {
            return;
        }

        this.hasStarted = !this.hasStarted;
        if (!this.hasStarted) {
            this.stopwatchControls.classList.remove('stopwatch-started');
            this.resetButton.classList.add('disabled');
            this.resetButton.setAttribute('tabindex', -1);
            this.startButton.focus();
        } else {
            this.stopwatchControls.classList.add('stopwatch-started');
            this.resetButton.classList.remove('disabled');
            this.resetButton.setAttribute('tabindex', 0);
            this.stopButton.focus();
        }
    }

    resetStopwatch(e) {
        console.log('Reset: stopwatch.');
    }

    bindEventListeners() {
        if (!this.checkNodes()) {
            return;
        }

        if (this.startButton && this.startButton.hasOwnProperty('removeEventListener')) {
            this.startButton.removeEventListener('click', false);
        }
        this.startButton.addEventListener('click', (e) => this.toggleStopwatch(e), false);

        if (this.stopButton && this.stopButton.hasOwnProperty('removeEventListener')) {
            this.stopButton.removeEventListener('click', false);
        }
        this.stopButton.addEventListener('click', (e) => this.toggleStopwatch(e), false);

        // if (this.resetButton && this.resetButton.hasOwnProperty('removeEventListener')) {
        //     this.resetButton.removeEventListener('click', false);
        // }
        // this.resetButton.addEventListener('click', (e) => this.resetStopwatch(e), false);
    }
}
