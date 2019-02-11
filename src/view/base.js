import {stateWord}  from "../model/Word";
import renderWord from "./wordView";
import renderLevel from "./levelView";
// import { addLevel } from "./levelView";
// import addLevel from "./levelView" ;
// const stateWord = new Word("test");

export const elements = {
    startGame: document.querySelector('.start--btn'),
    wordSection: document.querySelector('.word'),
    answerUser: document.querySelector('.answer--user'),
    answerSection: document.querySelector('.answer'),
    inputUser: document.querySelector('.input--answer')
}


 // API CALL  

export const getData = async bdd => { // TODO: Get data from BDD
    try {
        let data = await fetch(bdd);
        let res = await data.json();
        // console.log(res);
        return res;
    } catch (error) {
        throw error;
    }

}

export const displayData = async () => {
    const dataArray = await getData('https://api.datamuse.com/words?ml=ringing+in+the+ears');
    dataArray.forEach(element => stateWord.setDataTab(element.word));
    randomWords();
}
       
// DISPLAY RANDOM WORDS 

function randomWords() {
    // Take random word
    stateWord.setRandom(); // TODO: Create random word
    console.log(stateWord);
    
    // Display word
    renderLevel(1); // TODO: Display level
    renderWord(stateWord.dataTab[stateWord.randWord]); // TODO: render view's word

}

// NEXT LEVEL WITH USER'S ANSWER

export function userAnswer(pickWord) {
    const answerUser = document.querySelector('.input--answer');
    
    if (answerUser.value === pickWord) { // TODO: Compare user's answer with randow word display
            clearArray(); 
        while (elements.wordSection.firstChild) { // TODO: Remove last word
            elements.wordSection.removeChild(elements.wordSection.firstChild);
        }
        elements.inputUser.value = ''; // TODO: Clear user's input answer and focus him
            // console.log(pickWord);
        } else {
            alert('Wrong word asshole!');
        }
    }

    // TODO: Clear array
    function clearArray() {
        for (let i = stateWord.dataTab.length; i >0; i--) {
            stateWord.dataTab.pop();
        }
    }


// Others things to do:
// - Incremente level is answer is ok (add 5 more words to lvl 2 and 2 words by lvl)
// - Restart game if answer is not ok
// - Incremente timer according to the answers
// - Make the best score

