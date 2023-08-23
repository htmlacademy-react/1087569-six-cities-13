import Logo from '../logo/logo';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {Link} from 'react-router-dom';
import {logoutAction} from '../../store/api-actions';
import {AuthorizationStatus, AppRoute} from '../../const';
import {MouseEvent} from 'react';
import {getAuthorizationStatus} from '../../store/user-process/user-process.selectors';
import {getFavorites} from '../../store/favorites-process/favorites-process.selectors';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favorites = useAppSelector(getFavorites);
  const dispatch = useAppDispatch();
  const handleLogoutClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.Auth ?
                <>
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Dima6233@yandex.ru</span>
                      <span className="header__favorite-count">{favorites.length}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link
                      onClick={handleLogoutClick}
                      className="header__nav-link"
                      to={AppRoute.Root}
                    >
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </>
                :
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.Login}>
                    <span className="header__signout">Sign in</span>
                  </Link>
                </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
