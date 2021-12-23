const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

const newGame = async () => {
    const result = await fetch(`${baseURL}/games/`, {
        method: 'POST',
        body: JSON.stringify({
            name: 'Guess anime OST',
        }),
        headers: {
            'Content-type': 'application/json',
        },
    });
    const data = await result.json();
    localStorage.setItem('game.id', data.result.split(' ')[3]);
}

const gameID = localStorage.getItem('game.id');

export { baseURL, newGame, gameID };