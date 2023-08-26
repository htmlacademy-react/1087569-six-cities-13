import {useNavigate} from 'react-router-dom';
import {OfferDetail} from '../../types/offer';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {addFavoriteAction, deleteFavoriteAction} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user-process/user-process.selectors';
import {AppRoute, AuthorizationStatus} from '../../const';
import cn from 'classnames';

type BookmarkButtonProps = {
  id: OfferDetail['id'];
  isFavorite: boolean;
  block: string;
  onClick: () => void;
  isDetail?: boolean;
};


function BookmarkButton({
  id,
  isFavorite,
  block,
  onClick,
  isDetail,
}: BookmarkButtonProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const handleButtonClick = () => {
    if(authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }

    if(isFavorite) {
      dispatch(deleteFavoriteAction(id));
    } else {
      dispatch(addFavoriteAction(id));
    }

    onClick();
  };

  return(
    <button
      className={cn(
        `${block}__bookmark-button`,
        'button',
        {[`${block}__bookmark-button--active`]: isFavorite && authorizationStatus === AuthorizationStatus.Auth}
      )}
      type="button"
      onClick={handleButtonClick}
    >
      <svg className={`${block}__bookmark-icon`} width={isDetail ? '31' : '18'} height={isDetail ? '33' : '19'}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isFavorite && authorizationStatus === AuthorizationStatus.Auth ? 'In' : 'To'} bookmarks
      </span>
    </button>
  );

}

export {BookmarkButton};
