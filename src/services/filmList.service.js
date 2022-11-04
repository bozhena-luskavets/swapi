import { API_URL } from "./api";

export const getFilmListFromServer = async () => {
    const response = await fetch(`${API_URL}/films`,
        { method: 'GET' }
    );

    const body = await response.json();
    return body.results;
}