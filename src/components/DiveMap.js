import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Custom icon for dive locations
const diveIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41">
      <path d="M12.5 0C5.6 0 0 5.6 0 12.5c0 6.9 12.5 28.5 12.5 28.5s12.5-21.6 12.5-28.5C25 5.6 19.4 0 12.5 0z" fill="#0077be"/>
      <circle cx="12.5" cy="12.5" r="7" fill="white"/>
      <circle cx="12.5" cy="12.5" r="4" fill="#0077be"/>
    </svg>
  `),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const DiveMap = () => {
  const diveLocations = [
    {
      name: "Sri Lanka",
      position: [7.8731, 80.7718],
      highlights: "Blue whales, sperm whales, coral reefs",
      description: "Whale watching and pristine coral reefs in the Indian Ocean"
    },
    {
      name: "Indonesia",
      position: [-6.2088, 106.8456],
      highlights: "Manta cleaning stations, biodiversity hotspot, drift diving",
      description: "From Komodo's manta rays to Raja Ampat's incredible biodiversity"
    },
    {
      name: "Maldives",
      position: [3.2028, 73.2207],
      highlights: "Manta rays, reef sharks, crystal clear waters",
      description: "Tropical paradise with incredible marine life and pristine reefs"
    },
    {
      name: "Mauritius",
      position: [-20.3484, 57.5522],
      highlights: "Coral walls, shipwrecks, tropical fish diversity",
      description: "Crystal clear waters with vibrant coral reefs and historic wrecks"
    },
    {
      name: "Italy",
      position: [41.9028, 12.4964],
      highlights: "Mediterranean wrecks, underwater caves, historic sites",
      description: "Rich maritime history with ancient wrecks and clear waters"
    },
    {
      name: "Hawaii",
      position: [21.3099, -157.8581],
      highlights: "Green sea turtles, volcanic formations, clear waters",
      description: "Tropical paradise with unique underwater volcanic landscapes"
    },
    {
      name: "Mexico",
      position: [20.6843, -105.0515],
      highlights: "Cenotes, whale sharks, vibrant reefs",
      description: "From Caribbean reefs to Pacific giants and freshwater cenotes"
    },
    {
      name: "Australia",
      position: [-16.2893, 145.7781],
      highlights: "Great Barrier Reef, potato cod, pristine ecosystems",
      description: "World's largest coral reef system with incredible marine life"
    },
    {
      name: "Thailand",
      position: [7.9519, 98.3381],
      highlights: "Whale sharks, coral gardens, macro photography",
      description: "From the Andaman Sea to the Gulf of Thailand"
    }
  ];

  return (
    <div style={{ height: '500px', width: '100%', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {diveLocations.map((location, index) => (
          <Marker
            key={index}
            position={location.position}
            icon={diveIcon}
          >
            <Popup>
              <div style={{ minWidth: '200px' }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#0077be', fontSize: '16px' }}>
                  {location.name}
                </h3>
                <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>
                  {location.description}
                </p>
                <p style={{ margin: '0', fontSize: '13px', fontStyle: 'italic', color: '#0077be' }}>
                  {location.highlights}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default DiveMap; 