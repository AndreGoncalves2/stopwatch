import { Display } from "./elements.js";
import { Controls } from "./controls.js";
import { Sonds } from "./sonds.js";

export { Timer };

const sonds = Sonds();
const controls = Controls ();

function Timer() {

    function cont() {

        Display.timeTimeOut = setTimeout(displayUpdate, 1000);
    };

    function displayUpdate() {

        if(Display.minutes.textContent == 0 && Display.seconds.textContent == 0) {

            resetValues();
            controls.stop();
            sonds.timerEnd();
            
            return;
        };

        if(Display.seconds.textContent <= 0) {

            Display.minutes.textContent = String(--Display.minutes.textContent).padStart(2, '0');
            Display.seconds.textContent = 60;
        };

        
        Display.seconds.textContent = String(--Display.seconds.textContent).padStart(2, '0');
        
        cont();
    };

    function pause() {
        clearTimeout(Display.timeTimeOut);
    };

    function inputValues() {

        let input =  String( ( Number( prompt() ) || Display.inputDisplayMinutes ||  Display.minutes.textContent ) );

        Display.minutes.textContent = input.padStart(2, '0');
        Display.inputDisplayMinutes = Display.minutes.textContent;
    };

    function resetDisplay() {

        Display.minutes.textContent = '00';
        Display.seconds.textContent = '00';
    };

    function resetValues() {

        Display.minutes.textContent = (Display.inputDisplayMinutes || '00');
        
        Display.seconds.textContent = '00';
        controls.pause();
    };   

    return {
        cont,
        pause,
        inputValues,
        resetDisplay,
        resetValues
    };
};