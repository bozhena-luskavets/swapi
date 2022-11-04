import { API_URL } from "./api";

export const getCharacters = async (characterLinks) => {
    const newCharacters = [];
    await Promise.all(characterLinks.map(async (link) => {
        const response = await fetch(link,
            { method: 'GET' }
        );
        const body = await response.json();
        newCharacters.push(body);
    }))
    return newCharacters;
}


export const getCharacter = async (id) => {
    const response = await fetch(`${API_URL}/people/${+ id}`,
        { method: 'GET' }
    );
    const body = await response.json();
    return body;
};

export const getCharacterFilms = async (filmLinks) => {
    const characterFilms = [];
    await Promise.all(filmLinks.map(async (link) => {
        const response = await fetch(link,
            { method: 'GET' }
        );
        const body = await response.json();
        characterFilms.push(body);
    }))
    return characterFilms;
}