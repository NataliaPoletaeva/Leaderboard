import { postScores, getScores } from './scores.js'

const postFormAction = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = document.querySelector('#name').value;
        const score = document.querySelector('#score').value;
        postScores(user, score);
        form.reset();
    })
}

const getFormAction = () => {
    const userList = document.querySelector('ul');
    getScores().then((jsonInfo) => {
        const infoArray = jsonInfo.result;
        for (let i = 0; i < infoArray.length; i += 1)
            userList.innerHTML += `<li>${infoArray[i].user}: ${infoArray[i].score}</li>`;
    })
};

export { postFormAction, getFormAction }