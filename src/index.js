/**
 * Import
 */
import "./assets/scss/main.scss";
import { elements, displayData, userAnswer } from './view/base';
// import Word from './model/Word';
// import { timer } from "./timer";
import { myTime } from "./model/Timer";
import { stateWord } from "./model/Word";
import { displayRules } from "./rules";
import renderLevel from "./view/levelView";

// BUTTON WITH RULES
displayRules();

// STARTED GAME

elements.startGame.addEventListener('click', () => {
    myTime.startTimer(5, elements.myTimer); // TODO: Timer started
    renderLevel(1); // TODO: Display level 1
    displayData(); // TODO: Fetch random word and Display
});

elements.answerUser.addEventListener('click', () => {
    displayData();
    userAnswer(stateWord.dataTab[stateWord.randWord]); // TODO: Compare user's answer with random word
})

document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        displayData();
        userAnswer(stateWord.dataTab[stateWord.randWord]);
    }    
});

