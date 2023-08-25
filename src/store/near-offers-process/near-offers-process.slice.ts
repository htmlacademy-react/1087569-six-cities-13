import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {NearOffersProcess} from '../../types/state';
import {fetchNearOffersAction} from '../api-actions';

const initialState: NearOffersProcess = {
  nearOffers: []
};

export const nearOffersProcess = createSlice({
  name: NameSpace.NearOffers,
  initialState,
  reducers: {
    clearNearOffers: (state) => {
      state.nearOffers = [];
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      });
  }
});

export const {clearNearOffers} = nearOffersProcess.actions;
