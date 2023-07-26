type GoodItemProps = {
  good: string;
}

function GoodItem({good}: GoodItemProps): JSX.Element {
  return(
    <li className="offer__inside-item">
      {good}
    </li>
  );
}

export default GoodItem;
