import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute} from '../const';
import {Offer} from '../types/offer';
import {AxiosInstance} from 'axios';
import {AppDispatch} from '../types/state';
import {State} from '../types/state';
import {fetchOffers, setOffersDataLoadingStatus} from './actions';

const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(fetchOffers(data));
    dispatch(setOffersDataLoadingStatus(false));
  }
);

export {fetchOffersAction};
