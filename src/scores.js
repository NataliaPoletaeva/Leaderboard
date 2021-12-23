import { baseURL } from "./game";

const postScores = async (user, score) => {
    const userInfo = await fetch(`${baseURL}/games/Zl5oXyH76a9K5tvkN67K/scores`, {
        method: 'POST',
        body: JSON.stringify({
            user,
            score,
        }),
        headers: {
            'Content-type': 'application/json',
        },
    });
    const jsonInfo = await userInfo.json();
    return jsonInfo;
}

const getScores = async () => {
    const userInfo = await fetch(`${baseURL}/games/Zl5oXyH76a9K5tvkN67K/scores`);
    const jsonInfo = await userInfo.json();
    return jsonInfo;
}

export { postScores, getScores }