import $ from 'jquery';
import { Stopwatch } from './components/stopwatch/Stopwatch';
require('../style/app.scss');

// Bootstrap.
$(() => {
    'use strict';
    const body = document.querySelector('body');
    const footer = document.querySelector('#footer');

    let stopwatch = new Stopwatch();
    footer.innerHTML = `<p>Compiled with Webpack</p>`;
    body.removeAttribute('style');
    body.classList.add('ready');
});

