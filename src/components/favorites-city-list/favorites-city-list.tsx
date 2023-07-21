import { Offer } from '../../types/offer';
import FavoriteCard from '../favorite-card/favorite-card';

type FavoritesListProps = {
  city: string;
  favoritesOffers: Offer[];
}

function FavoritesCityList({city, favoritesOffers}: FavoritesListProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favoritesOffers.map((offer) => <FavoriteCard key={offer.id} offer={offer} />)}
      </div>
    </li>
  );
}

export default FavoritesCityList;
