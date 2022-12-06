export { Buttons, Display };

let timeTimeOut;
let inputDisplayMinutes;

const Buttons = {

    btnPlay: document.querySelector('.play'),
    btnPause: document.querySelector('.pause'),

    btnStop: document.querySelector('.stop'),
    btnSet: document.querySelector('.set'),

    btnSondOn: document.querySelector('.sond-on'),
    btnSondOff: document.querySelector('.sond-off')
};

const Display = {

    minutes: document.querySelector('.minutes'),
    seconds: document.querySelector('.seconds'),

    timeTimeOut,
    inputDisplayMinutes
};