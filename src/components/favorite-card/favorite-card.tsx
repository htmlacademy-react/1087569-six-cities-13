import {Link, generatePath} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {AppRoute} from '../../const';
import {BookmarkButton} from '../bookmark-button/bookmark-button';
import {useState} from 'react';

type FavoriteCardProps = {
  offer: Offer;
}

function FavoriteCard({offer}: FavoriteCardProps): JSX.Element {
  const [activeFavorite, setActiveFavorite] = useState(offer.isFavorite);
  const handleBookmarkButtonClick = () => setActiveFavorite((prev) => !prev);

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(AppRoute.Offer, {id: offer.id})}>
          <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton id={offer.id} isFavorite={activeFavorite} block='place-card' onClick={handleBookmarkButtonClick}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '100%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, {id: offer.id})}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default FavoriteCard;
