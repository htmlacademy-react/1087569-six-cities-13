type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type City = {
  name: string;
  location: Location;
}

type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type {Offer};

