import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers, favoritesOffers, detailsOffers} from './mocks/offers';
import {comments} from './mocks/comments';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers={offers}
      favoritesOffers={favoritesOffers}
      detailsOffers={detailsOffers}
      comments={comments}
    />
  </React.StrictMode>
);
