import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Offer} from '../../types/offer';

type AppScreenProps = {
  offers: Offer[];
  favoritesOffers: Offer[];
}

function App({offers, favoritesOffers}: AppScreenProps): JSX.Element {
  return(
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <MainScreen
                offers={offers}
              />
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <FavoritesScreen favoritesOffers={favoritesOffers} />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<OfferScreen />}>
            <Route path=':id' element={<OfferScreen />}/>
          </Route>
          <Route
            path='*'
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
