import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.scss';

const Map = () => {
  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_PUBLIC_TOKEN!;
    const map = new mapboxgl.Map({
      container: 'map',
      center: [-74.5, 40],
      zoom: 9,
      style: 'mapbox://styles/mapbox/streets-v11',
      hash: true,
    });
    map.addControl(new mapboxgl.NavigationControl(), 'top-left');
  }, []);

  return (
    <div id='map' />
  );
};

export default Map;
