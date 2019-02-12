import { elements } from './base';



const renderLevel = (level) => {
    const div = document.createElement("div");
    // const newContent = document.createTextNode(`Level n° ${level}`); 
    div.setAttribute("class", "word--level");
    div.innerHTML = `<p>Level n°${level}</p>`;
    elements.wordSection.appendChild(div);
}

export default renderLevel;

