import {ChangeEvent, useState, Fragment, FormEvent, useEffect} from 'react';
import {postCommentAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {OfferDetail} from '../../types/offer';
import {MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH, RequestStatus} from '../../const';
import {dropSendingStatus} from '../../store/actions';

const ratingMap = {
  '5': 'perfect',
  '4': 'good',
  '3': 'not bad',
  '2': 'badly',
  '1': 'terribly',
} as const;

type CommentFormProps = {
  offerId: OfferDetail['id'];
}

function CommentForm({ offerId }: CommentFormProps): JSX.Element {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useAppDispatch();
  const sendingStatus = useAppSelector((state) => state.sendingCommentStatus);

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postCommentAction({ commentData: { comment, rating: +rating }, offerId }));
  };

  const isValid =
    comment.length >= MIN_COMMENT_LENGTH &&
    comment.length <= MAX_COMMENT_LENGTH &&
    rating !== '';

  useEffect(() => {
    switch (sendingStatus) {
      case RequestStatus.Success:
        setComment('');
        setRating('');
        dispatch(dropSendingStatus());
        break;
      case RequestStatus.Pending:
        setIsSubmit(true);
        break;
      default:
        setIsSubmit(false);
    }
  }, [sendingStatus, dispatch]);

  return (
    <form
      onSubmit={handleFormSubmit}
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(ratingMap)
          .reverse()
          .map(([score, title]) => (
            <Fragment key={score}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={score}
                id={`${score}-stars`}
                type="radio"
                checked={rating === score}
                onChange={handleRatingChange}
              />
              <label
                htmlFor={`${score}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </Fragment>
          ))}
      </div>
      <textarea onChange={handleCommentChange} value={comment} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid || isSubmit}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
