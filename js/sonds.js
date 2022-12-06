const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

bgAudio.loop = true ;


export function Sonds() {
    
    function buttonPress() {
        buttonPressAudio.play();
    };
    
    function timerEnd() {
        kitchenTimer.play();
    };
    
    function sondOn() {
        bgAudio.play();
    };

    function sondOff() {
        bgAudio.pause();
    };

    return {
        sondOn,
        buttonPress,
        timerEnd,
        sondOff
    };
};
