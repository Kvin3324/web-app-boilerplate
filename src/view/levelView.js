import { elements } from './base';

export const addLevel = (level) => `
    <div class="word--level">Level n° ${level}</div>
`;
elements.wordSection.insertAdjacentHTML('beforeend', addLevel(1));

    // const levels = [];
    // if (elements.level > 0) {
        // for(let level = 0; level < levels.length; level++) {
        //     const element = levels[level];
        //     console.log(element);
        // }
        // const renderLevel = level => {
        //     const levelHtml = `<div class="word--level">Level ${addLevel(level.levels)} </div>`
        //     elements.level.insertAdjacentHTML('beforeend', levelHtml);
            
        // }
        // renderLevel();
        
    // } else {
    //     elements.level.innerHTML = 'Level n°0';
    // }




    
// export const initLevel = () => {
//     elements.level.innerHTML = 'Level n°0';
    
//     }