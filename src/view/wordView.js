import { elements } from './base';

export const pickWord = word => { 
    const helloWord = `
    <div class="word--display">
        <p>${word}</p>
    </div>
`;

    elements.displayLevel.insertAdjacentHTML('afterbegin', helloWord);
}