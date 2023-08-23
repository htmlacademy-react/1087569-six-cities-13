import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {FavoritesProcess} from '../../types/state';
import {fetchFavoritesAction} from '../api-actions';

const initialState: FavoritesProcess = {
  favorites: [],
  isFavoritesDataLoading: true
};

export const favoritesProcess = createSlice({
  name: NameSpace.NearOffers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isFavoritesDataLoading = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoritesDataLoading = false;
      });
  }
});
