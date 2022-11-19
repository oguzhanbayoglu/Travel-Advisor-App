import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Rating } from "@mui/material";
import "./styles.scss";
import mapStyles from "./mapStyles";
import StarIcon from "@mui/icons-material/Star";

function Map({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
}) {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_MAP_KEY}` }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={18}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          setChildClicked(child);
          console.log("child");
        }}
      >
        {places?.map((place, i) => (
          <div
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            <Paper className="map-card">
              <div className="map-details">
                {place.name && (
                  <>
                    <p>{place.name}</p>
                    {place.rating && (
                      <Rating
                        className="rating"
                        size="small"
                        value={Number(place.rating)}
                        readOnly
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.4, color: "#fff" }}
                            fontSize="inherit"
                          />
                        }
                      />
                    )}
                  </>
                )}
              </div>
              <img
                className="map-card-image"
                src={
                  place.photo
                    ? place.photo.images.large.url
                    : "https://images.unsplash.com/photo-1620296595801-3cd364a12807?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1223&q=80"
                }
                alt={place.name}
              />
            </Paper>
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
