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
    timerSection: document.querySelector('.display--timer'),
    myTimer: document.getElementById('timer'),
    inputAnswerUser: document.querySelector('.input--answer')
}

let arrayRandoms = stateWord.dataTab;


 // API CALL  

export const getData = async bdd => { // TODO: Get data from BDD
    try {
        let data = await fetch(bdd);
        let res = await data.json();
        return res;
    } catch (error) {
        throw error;
    }
}

export const displayData = async () => {
    const dataArray = await getData('https://api.datamuse.com/words?ml=ringing+in+the+ears');
    dataArray.forEach(element => stateWord.setDataTab(element.word));
    console.log(dataArray[0].word);
    
    nextLevelWord(dataArray);

    randomWords();
    // nextWord();
    // renderWord(arrayRandoms[0]);
}
       
function nextLevelWord(dataArray) {
    //console.log(dataArray[1]);
    // let newArray = [];
    // console.log(newArray);
    
}

// DISPLAY RANDOM WORDS 

function randomWords() {    
    stateWord.setRandom(); // TODO: Create random word
    renderWord(stateWord.dataTab[stateWord.randWord]); // TODO: render view's word
    //nextWord(); // TODO: Display next word(s)
}

function nextWord() {
    shuffle(stateWord.dataTab); // array is cloned so it won't be destroyed
    arrayRandoms.length = 3; // get 3 random elements
    console.log(arrayRandoms);

    //for (const word of arrayRandoms) {
      //      renderWord(word)
            //console.log(arrayRandoms[1]);
    //}
    
    for (let i = 0; i < arrayRandoms.length; i++) {
        renderWord(arrayRandoms[i]);
    }

}

// NEXT LEVEL WITH USER'S ANSWER


export function userAnswer(pickWord) {
    // const answerUser = document.querySelector('.input--answer');
    if (elements.inputAnswerUser.value === pickWord) { // TODO: Compare user's answer with randow word display
    //clearArray(); 
        while (elements.wordSection.firstChild) { // TODO: Remove last word
            elements.wordSection.removeChild(elements.wordSection.firstChild);
        }
        const { trueLevels, theLevel } = newLevel(); // TODO: Display next level
        renderLevel(trueLevels[theLevel - 1]);
        
        // if (elements.inputAnswerUser.value === stateWord.dataTab[stateWord.randWord]) {
        //     arrayRandoms.forEach(element => {
        //         if (element === elements.inputAnswerUser.value) {  
        //             nextWord();    
        //           // console.log(arrayRandoms[0], arrayRandoms[1], arrayRandoms[2]);
        //         }
        //     });
        //} 

       // nextWord();
       // console.log(elements.inputAnswerUser.value);
        //console.log(stateWord.dataTab[stateWord.randWord]);

            
        elements.inputUser.value = ''; // TODO: Clear user's input answer and focus him
            // renderWord(item);      
    } else {
        alert('You have lost and restart from level 1 !');
        elements.timerSection.remove(); // TODO: Remove timer
        elements.wordSection.remove(); // TODO: Remove random words
        elements.inputUser.value = ''; // TODO: cleaning input user's answer
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
    
    
    function shuffle(array) {
        let counter = array.length, temp, index;
        
        // While there are elements in the array
        while (counter--) {
            // Pick a random index
          index = (Math.random() * counter) | 0;
          
          // And swap the last element with it
          temp = array[counter];
         array[counter] = array[index];
         array[index] = temp;
         
        }
        return array;
    }

    



// Others things to do:
// - Incremente level is answer is ok (add 5 more words to lvl 2 and 2 words by lvl)
// - Restart game if answer is not ok
// - Incremente timer according to the answers
// - Make the best score

