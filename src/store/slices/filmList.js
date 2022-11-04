import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getFilmListFromServer } from '../../services/filmList.service';

export const filmListSlice = createSlice({
    name: 'films',
    initialState: {
        list: [],
    },
    reducers: {},

    extraReducers: builder => {
        builder.addCase(fetchFilms.fulfilled, (state, action) => {
            state.list = action.payload;
        })
    }
})

export const fetchFilms = createAsyncThunk('films/fetchFilms', async () => {
    const films = await getFilmListFromServer();
    return films;
})

export const { } = filmListSlice.actions

export default filmListSlice.reducer