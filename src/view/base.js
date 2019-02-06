export const elements = {
    startGame: document.querySelector('.start--btn'),
    wordSection: document.querySelector('.word')
    // displayWord: document.querySelector('.word--display')
}

 // API CALL  

const arrayWords = [];

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

    dataArray.forEach(element => arrayWords.push(element.word));
    
       // Take random word
       const randomWord = dataArray[Math.floor(Math.random() * dataArray.length)];
       // Display word
       elements.wordSection.insertAdjacentHTML('afterend', '- ' + randomWord.word);
}

