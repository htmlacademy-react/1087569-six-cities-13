import {Offer} from '../../types/offer';
import MainCard from '../main-card/main-card';
import {useState} from 'react';

type CardsListProps = {
  offers: Offer[];
}

function CardsList({offers}: CardsListProps): JSX.Element {
  const [/*activeCard*/, setActiveCard] = useState(offers[0].id);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        <MainCard key={offer.id} offer={offer} onMouseEnterHandler={() => setActiveCard(offer.id)} />)}
    </div>
  );
}

export {CardsList};
