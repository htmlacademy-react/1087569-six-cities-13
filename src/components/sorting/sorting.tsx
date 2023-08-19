import {useState, KeyboardEvent} from 'react';
import cn from 'classnames';
import {TSorting} from '../../types/sorting';
import {SortingMap} from '../../const';

type SortingProps = {
  currentSorting: TSorting;
  onChange: (newSorting: TSorting) => void;
};

function Sorting({currentSorting, onChange}: SortingProps) {
  const [isOpened, setIsOpened] = useState(false);

  const handleTypeClick = () => setIsOpened((prevValue) => !prevValue);

  const handleKeyDown = (evt: KeyboardEvent) => {
    if(evt.key === 'Escape' && isOpened) {
      evt.preventDefault();
      setIsOpened(false);
    }
  };

  const handleSortItemClick = (type: TSorting) => {
    onChange(type);
    setIsOpened(false);
  };

  const iconStyle = {
    transform: `translateY(-50%) ${isOpened ? 'rotate(180deg)' : ''}`
  };

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onKeyDown={handleKeyDown}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleTypeClick}
      >
        {SortingMap[currentSorting]}
        <svg
          className="places__sorting-arrow"
          width="7"
          height="4"
          style={iconStyle}
        >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn(
        'places__options',
        'places__options--custom',
        {'places__options--opened': isOpened}
      )}
      >
        {(
          Object.entries(SortingMap) as [
            TSorting,
            (typeof SortingMap)[TSorting]
          ][]
        ).map(([type, label]) => (
          <li
            key={type}
            className={cn(
              'places__option',
              {'places__option--active': currentSorting === type}
            )}
            tabIndex={0}
            onClick={() => handleSortItemClick(type)}
          >
            {label}
          </li>
        ))}
      </ul>
    </form>
  );
}

export { Sorting };
