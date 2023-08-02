import {Offer} from '../../types/offer';
import MainCard from '../main-card/main-card';
import {MouseEvent} from 'react';
import cn from 'classnames';

type CardsListProps = {
  offers: Offer[];
  isNear?: boolean;
  onCardMouseEnter: (id: string | undefined) => void;
}

function CardsList({offers, isNear, onCardMouseEnter}: CardsListProps): JSX.Element {
  const handleMouseEnterItem = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onCardMouseEnter(event.currentTarget.dataset.id);
  };

  return (
    <div
      className={cn(
        {'near-places__list': isNear},
        {'cities__places-list': !isNear},
        'places__list',
        {'tabs__content': !isNear}
      )}
    >
      {offers.map((offer) =>
        <MainCard key={offer.id} offer={offer} onMouseEnterHandler={handleMouseEnterItem} isNear={isNear} />)}
    </div>
  );
}

export {CardsList};
