import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCharacter, getCharacterFilms } from '../../services/characters.service';

export const characterInfoSlice = createSlice({
    name: 'characterInfo',
    initialState: {
        data: {
            characterInfo: {},
            characterFilms: []
        }
    },
    reducers: {},

    extraReducers: builder => {
        builder.addCase(fetchCharacterInfo.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
})

export const fetchCharacterInfo = createAsyncThunk('characterInfo/fetchCharacterInfo', async (id) => {
    const characterInfo = await getCharacter(id);
    const characterFilms = await getCharacterFilms(characterInfo.films);
    characterInfo.newFilms = characterFilms;
    return { characterInfo, characterFilms };
})

export const { } = characterInfoSlice.actions

export default characterInfoSlice.reducer