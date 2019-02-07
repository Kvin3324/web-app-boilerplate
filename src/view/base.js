import Word from "../model/Word";
import renderWord from "./wordView";
const stateWord = new Word("test");
export const elements = {
    startGame: document.querySelector('.start--btn'),
    wordSection: document.querySelector('.word'),
    answerUser: document.querySelector('.answer--user')
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

            
         
        //    if (answerUser.value === randomWord.word) {
        //     randomWord.slice(Math(ramdomWord.length + 5, 1));
        //        elements.wordSection.insertAdjacentHTML('afterend', '- ' + randomWord.word);

            // console.log(randomWord);
                
            // displayData(randomWord.word * 5);
            //    console.log(answerUser.value);

        //    }

       // If ok: level + 1 and add 5 words

       // If not ok: alert 'you are a looser' and  go back to level 1 

       // Display level + news words

}
    
    
// DISPLAY RANDOM WORDS 

function randomWords() {
    // Take random word
    let randWord = Math.round(Math.random() * stateWord.dataTab.length);
    // Display word
    renderWord(stateWord.dataTab[randWord]);
}

// NEXT LEVEL WITH USER'S ANSWER

export function userAnswer() {
    const answerUser = document.getElementsByClassName('input--answer');
    let randWord = Math.round(Math.random() * stateWord.dataTab.length);

    for (let i = 0; i < answerUser.length; i++) {
        // answers.push(answerUser);
        console.log(answerUser[i].value);
    }
    if (answerUser[i].value === stateWord.dataTab[randWord]) {
        console.log(stateWord.dataTab[randWord]);
    } else {
        alert('Wrong word asshole!');
    }
}


    
