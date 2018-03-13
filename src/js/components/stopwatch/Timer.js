import _ from 'lodash';

const MODULE_NAME = 'app.components.timer';

export class Timer {

    constructor(timeNode) {
        this.timeNode = timeNode;
        this.time = null;
        this.times = [ 0, 0, 0 ];
        this.started = false;
        this.render();
    }

    start() {
        // Prevent execution when started.
        if (this.started) {
            return;
        }

        // Generate a DOMHighResTimeStamp which is measured
        // in milliseconds, accurate to five thousandths of
        // a millisecond (5 microseconds).
        if (!this.time) {
            this.time = performance.now();
        }

        if (!this.started) {
            this.started = true;
            requestAnimationFrame(this.step.bind(this));
        }
    }

    stop() {
        this.started = false;
        this.time = null;
    }

    reset() {
        this.stop();
        this.times = [ 0, 0, 0 ];
        this.render();
    }

    step(timestamp) {
        if (!this.started) {
            return;
        }

        this.calculate(timestamp);
        this.time = timestamp;
        this.render();
        requestAnimationFrame(this.step.bind(this));
    }

    calculate(timestamp) {
        let timeDifference = (timestamp - this.time);

        // Calculate hundredths of a second.
        this.times[2] += (timeDifference / 10);

        // Calculate seconds.
        if (this.times[2] >= 100) {
            // Increment seconds by one.
            this.times[1] = (this.times[1] + 1);
            // Set milliseconds back to 0.
            this.times[2] = (this.times[2] - 100);
        }

        // Calculate minutes.
        if (this.times[1] >= 60) {
            // Increment minute by one.
            this.times[0] = (this.times[0] + 1);
            // Set seconds back to 0.
            this.times[1] = (this.times[1] - 60);
        }

        console.log('Time: ', this.times[0], ':', this.times[1], ':', this.times[2]);
    }

    render() {
        this.timeNode.innerText = this.format(this.times);
    }

    format(times) {
        let template = `${this.addLeadingZero(times[0])}:${this.addLeadingZero(times[1])}:${this.addLeadingZero(Math.floor(times[2]))}`;
        return template;
    }

    addLeadingZero(value) {
        let result = value;

        if (result <= 9) {
            result = `0${result}`;
        }

        return result;
    }
}