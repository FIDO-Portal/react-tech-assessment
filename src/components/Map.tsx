import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Dummy access token used for this tech test only
mapboxgl.accessToken =
  "pk.eyJ1IjoiZXdvbmctZmlkbyIsImEiOiJjbTJkMmkyc2sxMzUwMmpxeGI2dDdndHN6In0.O2rAz61j2wq0fYrWU-2ULA";

function Map({ data }: { data: any[] }) {
  return <div className="map" />;
}

export default Map;
