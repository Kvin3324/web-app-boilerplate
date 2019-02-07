import { elements } from "./base";

const renderWord = word => {
    const div = document.createElement("div");
    div.setAttribute("class", "word--display");
    div.innerHTML = `<p>${word}</p>`;
    elements.wordSection.appendChild(div);
}
export default renderWord;