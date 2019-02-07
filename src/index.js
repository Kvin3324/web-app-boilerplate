/**
 * Import
 */
import "./assets/scss/main.scss";
import { elements, displayData, userAnswer } from './view/base';
import { addLevel } from "./view/levelView";
// import Word from './model/Word';
import { timer } from "./timer";

// STARTED GAME

elements.startGame.addEventListener('click', () => {
    // STARTED TIMER
    timer();

    // display level
    // addLevel();

    // DISPLAY DATA = RANDOM WORD
    displayData();
    // NEXT LEVEL WITH USER's ANSWER
    userAnswer();

    // const state = new Word("word");
    // state.nextLevel();
});

elements.answerUser.addEventListener('click', () => {
    displayData();
    userAnswer();
})

document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        displayData();
        userAnswer();
    }    
});

