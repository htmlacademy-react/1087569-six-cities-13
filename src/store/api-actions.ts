import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute, NameSpace, AppRoute, FavoriteStatus} from '../const';
import {Offer, OfferDetail} from '../types/offer';
import {Comment, CommentData} from '../types/comment';
import {AxiosInstance} from 'axios';
import {AppDispatch} from '../types/state';
import {State} from '../types/state';
import {redirectToRoute} from './actions';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {saveToken, dropToken} from '../services/token';

const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Offers}/fetch`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);

    return data;
  }
);

const fetchOfferAction = createAsyncThunk<OfferDetail, OfferDetail['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Offer}/fetch`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferDetail>(`${APIRoute.Offers}/${offerId}`);

    return data;
  }
);

const fetchNearOffersAction = createAsyncThunk<Offer[], OfferDetail['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.NearOffers}/fetch`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${offerId}${APIRoute.NearOffers}`);

    return data;
  }
);

const fetchCommentsAction = createAsyncThunk<Comment[], OfferDetail['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Comments}/fetch`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Comment[]>(`${APIRoute.Comments}/${offerId}`);

    return data;
  }
);

const postCommentAction = createAsyncThunk<Comment, {commentData: CommentData; offerId: OfferDetail['id']}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Comments}/add`,
  async ({commentData, offerId}, {extra: api}) => {
    const {data} = await api.post<Comment>(`${APIRoute.Comments}/${offerId}`, commentData);

    return data;
  }
);

const fetchFavoritesAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Favorites}/fetch`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Favorites);

    return data;
  }
);

const addFavoriteAction = createAsyncThunk<OfferDetail, OfferDetail['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Favorites}/add`,
  async (id, {extra: api}) => {
    const {data} = await api.post<OfferDetail>(`${APIRoute.Favorites}/${id}/${FavoriteStatus.Add}`);

    return data;
  }
);

const deleteFavoriteAction = createAsyncThunk<OfferDetail, OfferDetail['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Favorites}/delete`,
  async (id, {extra: api}) => {
    const {data} = await api.post<OfferDetail>(`${APIRoute.Favorites}/${id}/${FavoriteStatus.Delete}`);

    return data;
  }
);

const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/checkAuth`,
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
  }
);

const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/login`,
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/logout`,
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export {fetchOffersAction, fetchOfferAction, fetchNearOffersAction, fetchCommentsAction, fetchFavoritesAction, addFavoriteAction, deleteFavoriteAction, postCommentAction, checkAuthAction, loginAction, logoutAction};
