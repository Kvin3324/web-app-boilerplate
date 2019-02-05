/**
 * Import
 */
import "./assets/scss/main.scss";
import { elements, displayData, getData } from './view/base';
// import Word from './model/Word';
import { addLevel } from "./view/levelView";
// import { pickWord } from "./view/wordView";

/**
 * Word object
 */

// Started timer

elements.startGame.addEventListener('click', () => {
    const begin = setInterval(function () { myTimer() }, 1000);
    let secondlimit = 5;

    function myTimer() {
        if (secondlimit == 0) {
            myStopFunction();
        }

        document.getElementById("timer").innerHTML = '00:' + zeroPad(secondlimit, 2);
        secondlimit = secondlimit - 1;

    }

    function myStopFunction() {
        clearInterval(begin);
        // alert('You are to slow... Try again !')
    }

    function zeroPad(num, places) {
        const zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join("0") + num;
    }
    
    
    // LEVEL VIEW
        addLevel();


    // API CALL  
    // getData();
    displayData();
        
});



