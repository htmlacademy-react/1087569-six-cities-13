import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';
import OfferCard from '../../components/offer-card/offer-card';
import {Offer} from '../../types/offer';
import {useParams} from 'react-router-dom';
import {CardsList} from '../../components/cards-list/cards-list';
import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {dropOffer} from '../../store/offer-process/offer-process.slice';
import {fetchOfferAction, fetchNearOffersAction} from '../../store/api-actions';
import {Loader} from '../../components/loader/loader';
import {getOffer, getOfferLoadingStatus} from '../../store/offer-process/offer-process.selectors';
import {getNearOffers} from '../../store/near-offers-process/near-offers-process.selectors';
import {clearNearOffers} from '../../store/near-offers-process/near-offers-process.slice';

function OfferScreen(): JSX.Element {
  const {id = ''} = useParams();
  const dispatch = useAppDispatch();
  const offer = useAppSelector(getOffer);
  const isOfferDataLoading = useAppSelector(getOfferLoadingStatus);
  const [activeCard, setActiveCard] = useState<Offer | undefined>(undefined);
  const nearOffers = useAppSelector(getNearOffers);
  const handleMouseEnterItem = (nearId: string | undefined) => {
    const currentCard = nearOffers.find((nearOffer) => nearOffer.id === nearId);

    setActiveCard(currentCard);
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchNearOffersAction(id));
    }

    return () => {
      dispatch(dropOffer());
      dispatch(clearNearOffers());
    };
  }, [id, dispatch]);

  return isOfferDataLoading ? <Loader /> :
    (
      <div className="page">
        <Header />

        <main className="page__main page__main--offer">
          <Helmet>
            <title>Страница товара</title>
          </Helmet>
          {offer ? <OfferCard offer={offer} nearOffers={nearOffers} activeCard={activeCard} /> : ''}
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <CardsList offers={nearOffers} isNear onCardMouseEnter={handleMouseEnterItem} />
            </section>
          </div>
        </main>
      </div>
    );
}

export default OfferScreen;
