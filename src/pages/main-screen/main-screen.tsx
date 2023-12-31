import Header from '../../components/header/header';
import {CardsList} from '../../components/cards-list/cards-list';
import {Sorting} from '../../components/sorting/sorting';
import {TSorting} from '../../types/sorting';
import {Offer} from '../../types/offer';
import {Helmet} from 'react-helmet-async';
import Map from '../../components/map/map';
import {useState} from 'react';
import {useAppSelector} from '../../hooks';
import {CitiesList} from '../../components/cities-list/cities-list';
import {Loader} from '../../components/loader/loader';
import {getOffers, getOffersLoadingStatus} from '../../store/offers-process/offers-process.selectors';
import {getActiveCity} from '../../store/offers-process/offers-process.selectors';
import {getOffersByCity} from '../../utils';
import {getAuthorizationStatus} from '../../store/user-process/user-process.selectors';
import {AuthorizationStatus} from '../../const';
import {MainPageEmpty} from '../../components/main-page-empty/main-page-empty';
import cn from 'classnames';

function MainScreen(): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | undefined>(undefined);
  const [currentSorting, setCurrentSorting] = useState<TSorting>('Popular');
  const isOffersDataLoading = useAppSelector(getOffersLoadingStatus);

  const currentCity = useAppSelector(getActiveCity);
  const offers = useAppSelector(getOffers);
  const offersByCity = getOffersByCity(currentSorting, offers, currentCity.name);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isEmpty = offersByCity.length === 0;

  const handleMouseEnterItem = (id: string | undefined) => {
    const currentCard = offers.find((offer) => offer.id === id);
    setActiveCard(currentCard);
  };

  const handleSortChange = (newSorting: TSorting) => {
    setCurrentSorting(newSorting);
  };

  if (isOffersDataLoading || authorizationStatus === AuthorizationStatus.Unknown) {
    return <Loader />;
  }

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={cn(
        'page__main',
        'page__main--index',
        {'page__main--index-empty': isEmpty}
      )}
      >
        <Helmet>
          <title>6 городов</title>
        </Helmet>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList currentCity={currentCity} />
        {!isEmpty ?
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersByCity.length} places to stay in {currentCity.name}</b>
                <Sorting
                  currentSorting={currentSorting}
                  onChange={handleSortChange}
                />
                <CardsList
                  offers={offersByCity}
                  onCardMouseEnter={handleMouseEnterItem}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  offers={offersByCity}
                  activeCard={activeCard}
                  city={currentCity}
                  isMainPage
                />
              </div>
            </div>
          </div>
          :
          <MainPageEmpty cityName={currentCity.name} />}
      </main>
    </div>
  );
}

export default MainScreen;
