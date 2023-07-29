import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';
import OfferCard from '../../components/offer-card/offer-card';
import {OfferDetail, Offer} from '../../types/offer';
import {useParams} from 'react-router-dom';
import {Comment} from '../../types/comment';
import {CardsList} from '../../components/cards-list/cards-list';
import {useState} from 'react';

type OfferScreenProps = {
  detailsOffers: OfferDetail[];
  nearOffers: Offer[];
  comments: Comment[];
}

function OfferScreen({detailsOffers, nearOffers, comments}: OfferScreenProps): JSX.Element {
  const{id} = useParams();
  const commentsForOffer = comments.filter((comment) => comment.id === id);
  const offer = detailsOffers.find((detailOffer) => detailOffer.id === id) as OfferDetail;
  const [activeCard, setActiveCard] = useState<Offer | undefined>(undefined);
  const handleMouseEnterItem = (nearId: string | undefined) => {
    const currentCard = nearOffers.find((nearOffer) => nearOffer.id === nearId);

    setActiveCard(currentCard);
  };

  return(
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <Helmet>
          <title>Страница товара</title>
        </Helmet>
        <OfferCard offer={offer} nearOffers={nearOffers} activeCard={activeCard} comments={commentsForOffer} />
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardsList offers={nearOffers} isNear onCardMouseEnter={handleMouseEnterItem}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
