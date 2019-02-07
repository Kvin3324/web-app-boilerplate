// import axios from 'axios';
// import { addLevel } from "./view/levelView";
// import { displayData } from './view/base';

export default class Word {
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
    // nextLevel() {

    // }
}