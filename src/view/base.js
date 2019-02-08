import {stateWord}  from "../model/Word";
import renderWord from "./wordView";
// const stateWord = new Word("test");

export const elements = {
    startGame: document.querySelector('.start--btn'),
    wordSection: document.querySelector('.word'),
    answerUser: document.querySelector('.answer--user'),
    answerSection: document.querySelector('.answer')
    // displayWord: document.querySelector('.word--display')
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

    // PCIK USER's ANSWER

    // Compare user's answer with randow word display
    // userAnswer();

       // If ok: level + 1 and add 5 words

       // If not ok: alert 'you are a looser' and  go back to level 1 

       // Display level + news words

}
    
    
// DISPLAY RANDOM WORDS 

function randomWords() {
    // Take random word
    // let randWord = Math.round(Math.random() * stateWord.dataTab.length);
    stateWord.setRandom();
    console.log(stateWord);
    
    // Display word
    renderWord(stateWord.dataTab[stateWord.randWord]); // TODO: render view's word
    // userAnswer(stateWord.dataTab[stateWord.randWord]);
}

// NEXT LEVEL WITH USER'S ANSWER

export function userAnswer(pickWord) {
    const answerUser = document.querySelector('.input--answer');
    // let randWord = Math.round(Math.random() * stateWord.dataTab.length);

    console.log(answerUser.value);

        if (answerUser.value === pickWord) {
            console.log(pickWord);
        } else {
            alert('Wrong word asshole!');
        }


    }



    
