import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const MapComponent: React.FC = () => {
  const api_key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <APIProvider apiKey={api_key}>
      <Map
        style={{ width: '100vw', height: '100vh' }}
        defaultCenter={{ lat: -23.2237, lng: -45.9009 }} // Coordenadas aproximadas de São José dos Campos
        defaultZoom={12}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
        <Marker
          latitude={-23.2237}
          longitude={-45.9009}
          offsetTop={-20}
          offsetLeft={-10}
        >
          <div style={{ color: 'red' }}>Marcador em São José dos Campos</div>
        </Marker>
      </Map>
    </APIProvider>
  );
};

export default MapComponent;
