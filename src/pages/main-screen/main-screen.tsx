import Header from '../../components/header/header';
import {CardsList} from '../../components/cards-list/cards-list';
import {Offer} from '../../types/offer';
import {Helmet} from 'react-helmet-async';
import Map from '../../components/map/map';
import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {CitiesList} from '../../components/cities-list/cities-list';
import {findOffersByCity} from '../../utils';
import {fetchOffers} from '../../store/actions';

function MainScreen(): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | undefined>(undefined);

  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.activeCity);
  const offers = useAppSelector((state) => state.offers);
  const offersByCity = findOffersByCity(currentCity.name);

  const handleMouseEnterItem = (id: string | undefined) => {
    const currentCard = offers.find((offer) => offer.id === id);

    setActiveCard(currentCard);
  };

  useEffect(() => {
    dispatch(fetchOffers);
  }, [dispatch]);

  return(
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <Helmet>
          <title>6 городов</title>
        </Helmet>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList currentCity={currentCity} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersByCity.length} places to stay in {currentCity.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
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
      </main>
    </div>
  );
}

export default MainScreen;
