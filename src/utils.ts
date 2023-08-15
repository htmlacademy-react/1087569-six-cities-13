import {offers} from './mocks/offers';

const findOffersByCity = (cityName: string) => offers.filter((offer) => offer.city.name === cityName);

export {findOffersByCity};
