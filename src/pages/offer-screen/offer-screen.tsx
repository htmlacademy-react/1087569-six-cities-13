import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';
import OfferCard from '../../components/offer-card/offer-card';
import {Offer} from '../../types/offer';
import {useParams} from 'react-router-dom';
import {CardsList} from '../../components/cards-list/cards-list';
import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {dropOffer} from '../../store/actions';
import {fetchOfferAction, fetchNearOffersAction} from '../../store/api-actions';

function OfferScreen(): JSX.Element {
  const {id = ''} = useParams();
  const dispatch = useAppDispatch();
  const offer = useAppSelector((state) => state.offer);
  const [activeCard, setActiveCard] = useState<Offer | undefined>(undefined);
  const nearOffers = useAppSelector((state) => state.nearOffers);
  const handleMouseEnterItem = (nearId: string | undefined) => {
    const currentCard = nearOffers.find((nearOffer) => nearOffer.id === nearId);

    setActiveCard(currentCard);
  };

  useEffect(() => {
    if(id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchNearOffersAction(id));
    }

    return () => {
      dispatch(dropOffer());
    };
  }, [id, dispatch]);

  return(
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
            <CardsList offers={nearOffers} isNear onCardMouseEnter={handleMouseEnterItem}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
