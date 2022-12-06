import { Buttons } from "./elements.js";

export { Controls };

function Controls() {

    function pause() {

        Buttons.btnPlay.classList.remove('hide');
        Buttons.btnPause.classList.add('hide');
    };

    function play() {

        Buttons.btnPlay.classList.add('hide');
        Buttons.btnPause.classList.remove('hide');
        set();
    };

    function set() {

        Buttons.btnSet.classList.add('hide');
        Buttons.btnStop.classList.remove('hide');
    };

    function stop() {

        Buttons.btnSet.classList.remove('hide');
        Buttons.btnStop.classList.add('hide');
        pause();

    };

    function sondOn() {

        Buttons.btnSondOn.classList.remove('hide');
        Buttons.btnSondOff.classList.add('hide');
    };

    function sondOff() {

        Buttons.btnSondOn.classList.add('hide');
        Buttons.btnSondOff.classList.remove('hide');
    };
    
    return {
        pause,
        play,
        stop,
        sondOn,
        sondOff
    };
};