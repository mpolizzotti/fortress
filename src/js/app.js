import $ from 'jquery';
import { Stopwatch } from './components/stopwatch/Stopwatch';
require('../style/app.scss');

// Bootstrap.
$(() => {
    'use strict';
    const footer = document.querySelector('#footer');

    let stopwatch = new Stopwatch();
    footer.innerHTML = `<p>Compiled with Webpack</p>`;
});

