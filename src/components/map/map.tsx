import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import {Offer, City} from '../../types/offer';
import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import cn from 'classnames';

type MapProps = {
  offers: Offer[];
  activeCard: Offer | undefined;
  city: City;
  isMainPage: boolean;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({offers, activeCard, city, isMainPage}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            activeCard !== undefined && offer.id === activeCard.id
              ? currentCustomIcon
              : defaultCustomIcon
          ).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeCard]);

  return(
    <section
      className={cn(
        {'cities__map': isMainPage},
        {'offer__map': !isMainPage},
        'map'
      )}
      style={{
        height: '100%',
        minHeight: '500px',
        width: '100%',
        maxWidth: '1144px',
        margin: '0 auto'
      }}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
