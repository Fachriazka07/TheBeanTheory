'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

// Custom Marker to match brand colors
const customIcon = new L.DivIcon({
  className: 'custom-div-icon',
  html: `
    <div style="
      background-color: #8b6f4e;
      width: 32px;
      height: 32px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #ffffff;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    ">
      <div style="
        width: 8px;
        height: 8px;
        background-color: #ffffff;
        border-radius: 50%;
      "></div>
    </div>
  `,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

interface BranchMapProps {
  locations: any[];
  activeId: string | null;
  onMarkerClick: (id: string) => void;
}

function ChangeView({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 15, { animate: true, duration: 1.5 });
  }, [center, map]);
  return null;
}

export default function BranchMap({
  locations,
  activeId,
  onMarkerClick,
}: BranchMapProps) {
  const activeLocation = locations.find((loc) => loc._id === activeId);
  const defaultCenter: [number, number] = [-6.2088, 106.8456];

  return (
    <div className="w-full h-full relative group">
      <MapContainer
        center={
          activeLocation
            ? [activeLocation.coordinates.lat, activeLocation.coordinates.lng]
            : defaultCenter
        }
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full z-0"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {activeLocation && (
          <ChangeView
            center={[
              activeLocation.coordinates.lat,
              activeLocation.coordinates.lng,
            ]}
          />
        )}

        {locations.map((loc) => (
          <Marker
            key={loc._id}
            position={[loc.coordinates.lat, loc.coordinates.lng]}
            icon={customIcon}
            eventHandlers={{
              click: () => onMarkerClick(loc._id),
            }}
          >
            <Popup className="custom-popup">
              <div className="p-2 min-w-[150px]">
                <h4 className="font-serif font-bold text-lg mb-1 leading-tight text-stone-900">
                  {loc.branchName}
                </h4>
                <p className="text-xs text-stone-500 mb-3 leading-relaxed">
                  {loc.address}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8b6f4e]">
                    Open Now
                  </span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Subtle overlay branding */}
      <div className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-black/5 flex items-center gap-2 pointer-events-none md:flex hidden">
        <div className="w-2 h-2 rounded-full bg-[#8b6f4e]"></div>
        <span className="font-mono text-[9px] uppercase tracking-widest text-stone-600 font-bold">
          The Bean Theory Locations
        </span>
      </div>

      {/* Mobile Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full md:hidden flex items-center gap-2">
        <span className="text-white font-mono text-[10px] uppercase tracking-wider">
          Tap markers to explore
        </span>
      </div>
    </div>
  );
}
