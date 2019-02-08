// import axios from 'axios';
// import { addLevel } from "./view/levelView";
// import { displayData } from './view/base';

  class Word {
    constructor(word) {
        this.word = word;
        this.dataTab = [];
    }
    getWord() {
        return this.word;
    }
    getDataTab() {
        return this.dataTab;
    }
    setDataTab(data) {
        this.dataTab.push(data);
    }
    
    setRandom() {
        this.randWord = Math.round(Math.random() * this.dataTab.length);
    }
    
    
}

export const stateWord = new Word("test");