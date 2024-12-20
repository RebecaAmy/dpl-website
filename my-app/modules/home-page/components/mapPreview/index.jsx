import { Grid, Paper } from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

if (typeof window !== "undefined") {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  });
}

export default function MapPreview() {
  const position = [41.416067, 1.931480];
  // 41°24'57.8"N 1°55'53.4"E

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        borderRadius={5}
       
        sx={{
          overflow: "hidden",
          height: { xs: "300px", sm: "400px" }, 
          width: "90%", 
          ml: { xs: 2, sm: 4 }, 
          mr: { xs: 2, sm: 0 }, 
        }}
      >
        <Paper
          elevation={3}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        >
          <MapContainer
            center={position}
            zoom={16}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                C. de la Pau, 46, 08757 Corbera de Llobregat, <br /> Barcelona,
                Spain
              </Popup>
            </Marker>
          </MapContainer>
        </Paper>
      </Grid>
    </>
  );
}
