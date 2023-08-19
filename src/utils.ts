import {Offer} from './types/offer';
import {TSorting} from './types/sorting';

const findOffersByCity = (offers: Offer[], cityName: string) => offers.filter((offer) => offer.city.name === cityName);

const sortByRating = (offerA: Offer, offerB: Offer) => offerB.rating - offerA.rating;

const sortLowToHigh = (offerA: Offer, offerB: Offer) => offerA.price - offerB.price;

const sortHighToLow = (offerA: Offer, offerB: Offer) => offerB.price - offerA.price;

const sorting: Record<TSorting, (offers: Offer[]) => Offer[]> =
{
  Popular: (offersForSort: Offer[]) => offersForSort,
  LowToHigh: (offersForSort: Offer[]) => offersForSort.slice().sort(sortLowToHigh),
  HighToLow: (offersForSort: Offer[]) => offersForSort.slice().sort(sortHighToLow),
  TopRated: (offersForSort: Offer[]) => offersForSort.slice().sort(sortByRating)
};

export {findOffersByCity, sorting};
