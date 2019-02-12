import {stateWord}  from "../model/Word";
import {nextLevel}  from "../model/Level";
import renderWord from "./wordView";
import renderLevel from "./levelView";
// const stateWord = new Word("test");

export const elements = {
    startGame: document.querySelector('.start--btn'),
    wordSection: document.querySelector('.word'),
    answerUser: document.querySelector('.answer--user'),
    answerSection: document.querySelector('.answer'),
    inputUser: document.querySelector('.input--answer'),
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
    renderWord(stateWord.dataTab[stateWord.randWord]); // TODO: render view's word
    // Display word
    //   renderLevel(1); // TODO: Display level
}

// NEXT LEVEL WITH USER'S ANSWER

export function userAnswer(pickWord) {
    const answerUser = document.querySelector('.input--answer');
    
    if (answerUser.value === pickWord) { // TODO: Compare user's answer with randow word display
            clearArray(); 
        while (elements.wordSection.firstChild) { // TODO: Remove last word
            elements.wordSection.removeChild(elements.wordSection.firstChild);
        }
        const { trueLevels, theLevel } = newLevel(); // TODO: Display next level
        renderLevel(trueLevels[theLevel - 1]);
        elements.inputUser.value = ''; // TODO: Clear user's input answer and focus him
            // console.log(pickWord);
        } else {
            alert('You have lost and restart from level 1 !');
        }
    }

export function newLevel() {
    const trueLevels = nextLevel.levelTab;
    const theLevel = nextLevel.getLevel();
    trueLevels.push(theLevel);
    for (let i = 0; i < trueLevels.length; i++) {
        trueLevels[i] = trueLevels[i] + 1;
    }
    return { trueLevels, theLevel };
}

    // TODO: Clear array
    function clearArray() {
        for (let i = stateWord.dataTab.length; i > 0; i--) {
            stateWord.dataTab.pop();
        }
    }

    // function clearLevel() {
    //     for (let i =  nextLevel.levelTab.length; i > 0; i--) {
    //         nextLevel.levelTab.pop();            
    //     }
    // }


// Others things to do:
// - Incremente level is answer is ok (add 5 more words to lvl 2 and 2 words by lvl)
// - Restart game if answer is not ok
// - Incremente timer according to the answers
// - Make the best score

