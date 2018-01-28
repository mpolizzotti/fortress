import $ from 'jquery';
import { Stopwatch } from './components/stopwatch/Stopwatch';
require('../style/app.scss');

// Bootstrap.
$(() => {
    'use strict';
    let stopwatch = new Stopwatch();

    const footer = document.querySelector('#footer');
    footer.innerHTML = `<p>Compiled with Webpack</p>`;
});

