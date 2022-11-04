import { configureStore } from '@reduxjs/toolkit';
import characterInfoSlice from './slices/character';
import filmDetailsSlice from './slices/filmDetails';
import filmListSlice from './slices/filmList';
import ui from './slices/ui';

export default configureStore({
  reducer: {
    films: filmListSlice,
    ui,
    details: filmDetailsSlice,
    characterInfo: characterInfoSlice
  },
})