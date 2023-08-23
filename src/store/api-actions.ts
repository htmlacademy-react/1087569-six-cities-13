import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute, AuthorizationStatus, NameSpace, AppRoute} from '../const';
import {Offer, OfferDetail} from '../types/offer';
import {Comment, CommentData} from '../types/comment';
import {AxiosInstance} from 'axios';
import {AppDispatch} from '../types/state';
import {State} from '../types/state';
import {fetchOffers, fetchOffer, fetchNearOffers, fetchComments, fetchFavorites, postComment, setOffersDataLoadingStatus, setOfferDataLoadingStatus, requireAuthorization, redirectToRoute} from './actions';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {saveToken, dropToken} from '../services/token';

const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Offers}/fetch`,
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(fetchOffers(data));
    dispatch(setOffersDataLoadingStatus(false));
  }
);

const fetchOfferAction = createAsyncThunk<void, OfferDetail['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Offer}/fetch`,
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setOfferDataLoadingStatus(true));
    const {data} = await api.get<OfferDetail>(`${APIRoute.Offers}/${offerId}`);
    dispatch(fetchOffer(data));
    dispatch(setOfferDataLoadingStatus(false));
  }
);

const fetchNearOffersAction = createAsyncThunk<void, OfferDetail['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.NearOffers}/fetch`,
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${offerId}${APIRoute.NearOffers}`);
    dispatch(fetchNearOffers(data));
  }
);

const fetchCommentsAction = createAsyncThunk<void, OfferDetail['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Comments}/fetch`,
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Comment[]>(`${APIRoute.Comments}/${offerId}`);
    dispatch(fetchComments(data));
  }
);

const fetchOFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Favorites}/fetch`,
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Favorites);
    dispatch(fetchFavorites(data));
  }
);

const postCommentAction = createAsyncThunk<void, {commentData: CommentData; offerId: OfferDetail['id']}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Comments}/add`,
  async ({commentData, offerId}, {dispatch, extra: api}) => {
    const {data} = await api.post<Comment>(`${APIRoute.Comments}/${offerId}`, commentData);
    dispatch(postComment(data));
  }
);

const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/checkAuth`,
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
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
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/logout`,
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export {fetchOffersAction, fetchOfferAction, fetchNearOffersAction, fetchCommentsAction, fetchOFavoritesAction, postCommentAction, checkAuthAction, loginAction, logoutAction};
