import { Timer } from "./timer.js";
import { Controls } from "./controls.js";
import { Sonds } from "./sonds.js";
import { Buttons } from "./elements.js";

export { Events };


const timer = Timer();
const controls = Controls();
const sonds = Sonds();

function Events() {

    function set() {
        
        Buttons.btnSet.addEventListener('click', () => {
        
            sonds.buttonPress();
            timer.resetDisplay();
            timer.inputValues();
        });
    };

    function play() {

        Buttons.btnPlay.addEventListener('click', () => {
        
            controls.play();
            timer.cont();
            sonds.buttonPress();
        });
    };
    
    function pause() {

        Buttons.btnPause.addEventListener('click', () => {
        
            controls.pause();
            timer.pause();
            sonds.buttonPress();
        });
    };
    
    function stop() {

        Buttons.btnStop.addEventListener('click', () => {
        
            controls.stop();
            timer.resetValues();
            timer.pause();
            sonds.buttonPress();
        });
    };
    
    function sondOn() {

        Buttons.btnSondOn.addEventListener('click', () => {
        
            controls.sondOff();
            sonds.sondOff();
        });    
    };
    
    function sondOff() {
        
        Buttons.btnSondOff.addEventListener('click', () => {
            
            controls.sondOn();
            sonds.sondOn();
        });
    };

    return {
        play,
        pause,
        set,
        sondOff,
        sondOn,
        stop
    };
};