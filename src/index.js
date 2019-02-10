/**
 * Import
 */
import "./assets/scss/main.scss";
import { elements, displayData, userAnswer } from './view/base';
import { addLevel } from "./view/levelView";
// import Word from './model/Word';
import { timer } from "./timer";
import { stateWord } from "./model/Word";
import { displayRules } from "./rules";


// BUTTON WITH RULES
displayRules();

// STARTED GAME

elements.startGame.addEventListener('click', () => {
    // STARTED TIMER
    timer();

    // display level
    // addLevel();

    // DISPLAY DATA = RANDOM WORD
    displayData();
    // NEXT LEVEL WITH USER's ANSWER
    // userAnswer();

});

elements.answerUser.addEventListener('click', () => {
    displayData();
    userAnswer(stateWord.dataTab[stateWord.randWord]);

})

document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        displayData();
        userAnswer(stateWord.dataTab[stateWord.randWord]);
    }    
});

