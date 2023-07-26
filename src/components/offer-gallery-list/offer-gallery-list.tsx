import OfferGalleryItem from '../offer-gallery-item/offer-gallery-item';

type OfferGalleryListProps = {
  images: string[];
}

function OfferGalleryList({images}: OfferGalleryListProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((src) => <OfferGalleryItem key={src} source={src}/>)}
      </div>
    </div>
  );
}

export default OfferGalleryList;
