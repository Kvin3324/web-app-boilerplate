/**
 * Import
 */
import "./assets/scss/main.scss";
import { elements, displayData } from './view/base';
import { addLevel } from "./view/levelView";
// import Word from './model/Word';
// import { pickWord } from "./view/wordView";


// Started timer

elements.startGame.addEventListener('click', () => {
    // Begin timer
    const begin = setInterval(function () { myTimer() }, 1000);
    let secondlimit = 5;
    function myTimer() {
        if (secondlimit == 0) {
            myStopFunction();
        }

        // Display timer
        document.getElementById("timer").innerHTML = '00:' + zeroPad(secondlimit, 2);
        secondlimit = secondlimit - 1;

    }
    // Stop timer
    function myStopFunction() {
        clearInterval(begin);
        // alert('You are to slow... Try again !')
    }

    function zeroPad(num, places) {
        const zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join("0") + num;
    }
    
    
    // display level

    addLevel();

    // Display word
    displayData();


    // Add new words + level

    


});

elements.answerUser.addEventListener('click', () => {
    displayData();
})

document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        displayData();
    }    
});
