import {CITIES, AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {MouseEvent} from 'react';
import {setActiveCity} from '../../store/offers-process/offers-process.slice';
import cn from 'classnames';
import {City} from '../../types/offer';

type CitiesListProps = {
  currentCity: City;
}

function CitiesList({currentCity}: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    const cityName = evt.currentTarget.innerText;
    if(currentCity.name === cityName) {
      return;
    }

    dispatch(setActiveCity(cityName));
  };

  return(
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li
              className="locations__item"
              key={city.name}
              onClick={handleClick}
            >
              <Link
                className={
                  cn(
                    'locations__item-link tabs__item',
                    {'tabs__item--active': currentCity.name === city.name}
                  )
                }
                to={AppRoute.Root}
              >
                <span>{city.name}</span>
              </Link>
            </li>)
          )}
        </ul>
      </section>
    </div>
  );
}

export {CitiesList};
