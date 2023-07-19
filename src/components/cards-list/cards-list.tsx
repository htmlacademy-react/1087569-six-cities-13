import {Offer} from '../../types/offer';
import MainCard from '../main-card/main-card';

type CardsListProps = {
  offers: Offer[];
}

function CardsList({offers}: CardsListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <MainCard key={offer.id} offer={offer} />)}
    </div>
  );
}

export {CardsList};
