import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCharacters } from '../../services/characters.service';
import { getFilmDetailsFromServer } from '../../services/filmDetails.service';

export const filmDetailsSlice = createSlice({
    name: 'details',
    initialState: {
        data: {
            details: {},
            characters: []
        }
    },
    reducers: {},

    extraReducers: builder => {
        builder.addCase(fetchDetails.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
})

export const fetchDetails = createAsyncThunk('details/fetchDetails', async (id) => {
    const details = await getFilmDetailsFromServer(id);
    const characters = await getCharacters(details.characters)
    details.newCharacters = characters;
    return { details, characters };
})

export const { } = filmDetailsSlice.actions

export default filmDetailsSlice.reducer