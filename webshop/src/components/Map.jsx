import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import icon from 'leaflet/dist/images/marker-icon.png';
import icon from './maps-and-flags.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ChangeView from './ChangeView';
let DefaultIcon = L.icon({
  iconUrl: icon,
  // shadowUrl: iconShadow,
  iconSize: [35,35], 
  iconAnchor: [12,41],
  popupAnchor: [2, -45],
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map(props) { 

  return (
  <div>

    <MapContainer className='map' center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} scrollWheelZoom={false}>
      <ChangeView center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[59.4231, 24.7991]}>
        <Popup>
          Ülemiste keskus. <br /> Avatud 9-20
        </Popup>
      </Marker>
      <Marker position={[59.4277, 24.7193]}>
        <Popup>
          Kristiine keskus. <br /> Avatud 10-21
        </Popup>
      </Marker>
      <Marker position={[59.4257, 24.6193]}>
        <Popup>
          See <br /> Avatud kui koht on lahti
          <a 
          target="_blank"
          rel="noreferrer"
          href='https://www.google.ee/maps/place/Tasku/@58.3778901,26.6958336,13z/data=!4m10!1m2!2m1!1startu+keskus!3m6!1s0x46eb36de8f30aa61:0xac1894becb0a4ccc!8m2!3d58.3778901!4d26.7308525!15sCgx0YXJ0dSBrZXNrdXNaDiIMdGFydHUga2Vza3VzkgEPc2hvcHBpbmdfY2VudGVy4AEA!16s%2Fg%2F125_j5pv_?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D'> Turu 2</a>
        </Popup>
      </Marker>

      <Marker position={[58.38032013926771, 26.7305091749901963]}>
        <Popup>
          Tartu <br /> Avatud kui koht on lahti
        </Popup>
      </Marker>
    </MapContainer>
  </div>)
}

export default Map; 