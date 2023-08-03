import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers, favoritesOffers, detailsOffers, nearOffers} from './mocks/offers';
import {comments} from './mocks/comments';
import {Provider} from 'react-redux';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        favoritesOffers={favoritesOffers}
        detailsOffers={detailsOffers}
        nearOffers={nearOffers}
        comments={comments}
      />
    </Provider>
  </React.StrictMode>
);
