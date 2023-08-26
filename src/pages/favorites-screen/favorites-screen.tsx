import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';
import FavoritesCityList from '../../components/favorites-city-list/favorites-city-list';
import {useAppSelector} from '../../hooks';
import {getFavorites, getFavoritesLoadingStatus} from '../../store/favorites-process/favorites-process.selectors';
import {Loader} from '../../components/loader/loader';
import {getOffersByCity} from '../../utils';
import {SortingMap} from '../../const';
import {Footer} from '../../components/footer/footer';

function FavoritesScreen(): JSX.Element {
  const favoritesOffers = useAppSelector(getFavorites);
  const isFavoritesLoading = useAppSelector(getFavoritesLoadingStatus);
  const cities = Array.from(new Set(favoritesOffers.map((offer) => offer.city.name)));


  if(isFavoritesLoading) {
    return <Loader/>;
  }

  return(
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <Helmet>
          <title>Избранное</title>
        </Helmet>
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city) => (
                <FavoritesCityList
                  key={city}
                  city={city}
                  favoritesOffers={getOffersByCity(SortingMap.Popular, favoritesOffers, city)}
                />))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
