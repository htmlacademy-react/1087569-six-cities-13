import {OfferDetail, Offer} from '../../types/offer';
import OfferGalleryList from '../offer-gallery-list/offer-gallery-list';
import GoodsList from '../goods-list/goods-list';
import CommentForm from '../comment-form/comment-form';
import CommentsList from '../comments-list/comments-list';
import Map from '../map/map';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {fetchCommentsAction} from '../../store/api-actions';
import {AuthorizationStatus} from '../../const';
import {getActiveCity} from '../../store/offers-process/offers-process.selectors';
import {getComments} from '../../store/comments-process/comments-process.selectors';
import {getAuthorizationStatus} from '../../store/user-process/user-process.selectors';

type OfferCardProps = {
  offer: OfferDetail;
  nearOffers: Offer[];
  activeCard: Offer | undefined;
}

function OfferCard({offer, nearOffers, activeCard}: OfferCardProps): JSX.Element {
  const {images, isPremium, title, rating, type, bedrooms, maxAdults, price, goods, host, description, id} = offer;
  const {name, avatarUrl, isPro} = host;
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getActiveCity);
  const comments = useAppSelector(getComments);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    dispatch(fetchCommentsAction(id));
  }, [id, dispatch]);

  return (
    <section className="offer">
      <OfferGalleryList images={images} />
      <div className="offer__container container">
        <div className="offer__wrapper">
          {isPremium ?
            <div className="offer__mark">
              <span>Premium</span>
            </div> : null}
          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {title}
            </h1>
            <button className="offer__bookmark-button button" type="button">
              <svg className="offer__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{ width: `${rating * 20}%` }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {type}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {bedrooms} Bedrooms
            </li>
            <li className="offer__feature offer__feature--adults">
              Max {maxAdults} adults
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <GoodsList goods={goods} />
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                <img className="offer__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
              </div>
              <span className="offer__user-name">
                {name}
              </span>
              {isPro ?
                <span className="offer__user-status">
                  Pro
                </span> : null}
            </div>
            <div className="offer__description">
              <p className="offer__text">
                {description}
              </p>
            </div>
          </div>
          <section className="offer__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
            <CommentsList comments={comments} />
            {authorizationStatus === AuthorizationStatus.Auth && <CommentForm offerId = {id}/>}
          </section>
        </div>
      </div>
      <Map offers={nearOffers} activeCard={activeCard} city={currentCity} isMainPage={false} />
    </section>
  );
}

export default OfferCard;
