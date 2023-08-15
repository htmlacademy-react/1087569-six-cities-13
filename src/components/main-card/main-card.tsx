import {Offer} from '../../types/offer';
import {Link, generatePath} from 'react-router-dom';
import {AppRoute} from '../../const';
import {MouseEvent} from 'react';
import cn from 'classnames';

type MainCardProps = {
  offer: Offer;
  isNear?: boolean;
  onMouseEnterHandler: (event: MouseEvent<HTMLLIElement>) => void;
}

function MainCard(props: MainCardProps): JSX.Element {
  const {offer, isNear, onMouseEnterHandler} = props;
  return (
    <article
      className={cn(
        {'near-places__card': isNear},
        {'cities__card': !isNear},
        'place-card'
      )}
      onMouseEnter={onMouseEnterHandler}
      data-id={offer.id}
    >
      <div
        className={cn(
          {'near-places__image-wrapper': isNear},
          {'cities__image-wrapper': !isNear},
          'place-card__image-wrapper'
        )}
      >
        <Link to={generatePath(AppRoute.Offer, {id: offer.id})}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.rating * 20}%` }}></span>
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

export default MainCard;
