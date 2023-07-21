import GoodItem from '../good-item/good-item';

type GoodsListProps = {
  goods: string[];
}

function GoodsList({goods}: GoodsListProps): JSX.Element {
  return (
    <ul className="offer__inside-list">
      {goods.map((good) => <GoodItem key={good} good={good}/>)}
    </ul>
  );
}

export default GoodsList;
