import { createSlice } from '@reduxjs/toolkit';
import { OfferProcess } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchOfferAction } from '../api-actions';

const initialState: OfferProcess = {
  offer: null,
  isOfferDataLoading: true
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    dropOffer: (state) => {
      state.offer = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOfferDataLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOfferDataLoading = false;
      });
  }
});

export const {dropOffer} = offerProcess.actions;
