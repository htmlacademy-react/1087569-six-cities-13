import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offer} from '../../types/offer';

export const getNearOffers = (state: State): Offer[] => state[NameSpace.NearOffers].nearOffers;
