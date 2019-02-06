export const elements = {
    startGame: document.querySelector('.start--btn'),
    wordSection: document.querySelector('.word'),
    answerUser: document.querySelector('.answer--user')
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
       let randomWord = dataArray[Math.floor(Math.random() * dataArray.length)];
       // Display word
       elements.wordSection.insertAdjacentHTML('afterend', '- ' + randomWord.word);
       
        // Pick user's answer
    // const answers = [];
        const answerUser = document.getElementsByClassName('input--answer');
            
            for (let i = 0; i < answerUser.length; i++) {
                // answers.push(answerUser);
                console.log(answerUser[i].value);
                }

        // const answers = [];
        // answers.forEach(e => {
        // answers.push(answerUser);
        //     console.log(answerUser.value);
        // })

       // Compare user's answer with randow word display
            
         
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
    
    
    
    // Next level
    
