import _ from 'lodash';

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

        if (!this.stopwatch || !this.stopwatchControls || !this.startButtonNode || !this.stopButtonNode || !this.resetButtonNode) {
            nodes = false;
            console.warn('Stopwatch. Missing DOM node dependencies.');
        }

        return nodes;
    }

    cacheNodes() {
        this.stopwatch = document.querySelector('#stopwatch');
        this.stopwatchControls = document.querySelector('#stopwatchControls');
        this.startButtonNode = this.stopwatch.querySelector('#startButton');
        this.stopButtonNode = this.stopwatch.querySelector('#stopButton');
        this.resetButtonNode = this.stopwatch.querySelector('#resetButton');
    }

    bindStopwatchButton(node, type, fnName) {
        if (node && node.hasOwnProperty('removeEventListener')) {
            node.removeEventListener(type, this[fnName]);
        }
        node.addEventListener(type, (e) => this[fnName](e));
    }

    toggleStopwatch(e) {
        if (!this.checkNodes()) {
            return;
        }

        this.hasStarted = !this.hasStarted;
        if (!this.hasStarted) {
            this.stopwatchControls.classList.remove('stopwatch-started');
            this.resetButtonNode.classList.add('disabled');
            this.resetButtonNode.setAttribute('tabindex', -1);
            this.startButtonNode.focus();
        } else {
            this.stopwatchControls.classList.add('stopwatch-started');
            this.resetButtonNode.classList.remove('disabled');
            this.resetButtonNode.setAttribute('tabindex', 0);
            this.stopButtonNode.focus();
        }
    }

    toggleReset(e) {
        if (!this.checkNodes()) {
            return;
        }

        if (this.resetButtonNode.classList.contains('disabled')) {
            return;
        }

        console.log('Reset Clicked.');
    }

    bindEventListeners() {
        if (!this.checkNodes()) {
            return;
        }

        // Start button.
        this.bindStopwatchButton(this.startButtonNode, 'click', 'toggleStopwatch');

        // Stop button.
        this.bindStopwatchButton(this.stopButtonNode, 'click', 'toggleStopwatch');

        // Reset button.
        this.bindStopwatchButton(this.resetButtonNode, 'click', 'toggleReset');
    }
}
