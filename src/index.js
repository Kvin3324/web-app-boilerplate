/**
 * Import
 */
import "./assets/scss/main.scss";
import { elements, displayData, userAnswer } from './view/base';
// import Word from './model/Word';
import { timer } from "./timer";
import { stateWord } from "./model/Word";
import { displayRules } from "./rules";

// BUTTON WITH RULES
displayRules();

// STARTED GAME

elements.startGame.addEventListener('click', () => {
    timer(); // TODO: Started timer
    displayData(); // TODO: Fetch random word and Display
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

