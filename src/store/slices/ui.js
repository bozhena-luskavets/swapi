import { createSlice } from '@reduxjs/toolkit'
import { fetchCharacterInfo } from './character';
import { fetchDetails } from './filmDetails';
import { fetchFilms } from './filmList';

const loaderActions = [fetchDetails, fetchFilms, fetchCharacterInfo];


export const uiSlice = createSlice({
  name: 'loader',
  initialState: {
    isLoading: true
  },
  reducers: {
   
  },
  extraReducers: builder => {
    loaderActions.forEach(action => {
      builder.addCase(action.pending, (state) => {
        state.isLoading = true;
      })
      builder.addCase(action.fulfilled, (state) => {
        state.isLoading = false;
      })
    })
  }
})

export const {  } = uiSlice.actions

export default uiSlice.reducer