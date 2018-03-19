import _ from 'lodash';
import {Timer} from './Timer';

const MODULE_NAME = 'app.components.stopwatch';

export class Stopwatch {

    constructor() {
        this.hasStarted = false;
        this.cacheNodes();
        this.isCached = this.checkNodes();
        if (this.isCached) {
            this.initializeTimer();
            this.bindEventListeners();
        }
    }

    checkNodes() {
        let nodes = true;

        if (!this.stopwatch || !this.stopwatchTime || !this.stopwatchControls || !this.startButtonNode || !this.stopButtonNode || !this.resetButtonNode) {
            nodes = false;
            console.warn('Stopwatch. Missing DOM node dependencies.');
        }

        return nodes;
    }

    cacheNodes() {
        this.stopwatch = document.querySelector('#stopwatch');
        this.stopwatchTime = document.querySelector('#stopwatchTime');
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
        if (!this.isCached) {
            return;
        }

        this.hasStarted = !this.hasStarted;
        if (!this.hasStarted) {
            this.stopwatchControls.classList.remove('stopwatch-started');
            this.resetButtonNode.classList.remove('disabled');
            this.resetButtonNode.setAttribute('tabindex', 0);
            this.startButtonNode.focus();
            this.timer.stop();
        } else {
            this.stopwatchControls.classList.add('stopwatch-started');
            this.resetButtonNode.classList.add('disabled');
            this.resetButtonNode.setAttribute('tabindex', -1);
            this.stopButtonNode.focus();
            this.timer.start();
        }
    }

    toggleReset(e) {
        if (!this.isCached) {
            return;
        }

        if (this.resetButtonNode.classList.contains('disabled')) {
            return;
        }

        this.timer.reset();
        this.resetButtonNode.classList.add('disabled');
        this.resetButtonNode.setAttribute('tabindex', -1);
    }

    initializeTimer() {
        if (!this.isCached) {
            return;
        }

        this.timer = new Timer(this.stopwatchTime);
    }

    bindEventListeners() {
        if (!this.isCached) {
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
