import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, DEFAULT_CITY, CITIES} from '../../const';
import {fetchOffersAction} from '../api-actions';
import {OffersProcess} from '../../types/state';
import {City} from '../../types/offer';

const initialState: OffersProcess = {
  offers: [],
  activeCity: DEFAULT_CITY,
  isOffersDataLoading: true
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setActiveCity: (state, action) => {
      state.activeCity = CITIES.find((city) => city.name === action.payload) as City;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      });
  }
});

export const {setActiveCity} = offersProcess.actions;
