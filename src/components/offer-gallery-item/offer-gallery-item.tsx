type OfferGalleryItemProps = {
  source: string;
}

function OfferGalleryItem({source}: OfferGalleryItemProps): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={source} alt="Photo studio" />
    </div>
  );
}

export default OfferGalleryItem;
