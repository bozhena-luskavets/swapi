import { API_URL } from "./api";

export const getFilmDetailsFromServer = async (id) => {
    const response = await fetch(`${API_URL}/films/${+ id}`,
        { method: 'GET' }
    );

    const body = await response.json();
    return body;
}