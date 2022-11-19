import React from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  Rating,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import "./styles.scss";
import StarIcon from "@mui/icons-material/Star";

function PlaceDetails({ place, selected, refProp }) {
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <Card
      sx={{
        borderRadius: "1rem",
        boxShadow: 0,
      }}
      className="card"
    >
      <CardMedia
        className="card-media"
        style={{ height: 250 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://images.unsplash.com/photo-1620296595801-3cd364a12807?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1223&q=80"
        }
        title={place.name}
      />
      <CardContent
        className="card-content"
        sx={{
          backgroundImage: `url(${place?.photo?.images.large.url})`,
        }}
      >
        <div className="card-subcontent">
          <div className="card-header">
            <h3>{place.name}</h3>
            <CardActions>
              <Button
                variant="contained"
                size="small"
                onClick={() => window.open(place.web_url, "_blank")}
                sx={{
                  backgroundColor: "#000",
                  borderRadius: "1rem",
                  boxShadow: 0,
                  fontSize: "0.6rem",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#fff",
                    boxShadow: 0,
                    color: "#000",
                  },
                }}
              >
                Trip Advisor
              </Button>
              {place.website && (
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => window.open(place.website, "_blank")}
                  sx={{
                    backgroundColor: "#000",
                    borderRadius: "1rem",
                    boxShadow: 0,
                    fontSize: "0.6rem",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#fff",
                      boxShadow: 0,
                      color: "#000",
                    },
                  }}
                >
                  Website
                </Button>
              )}
            </CardActions>
          </div>
          <Rating
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
          <Box display="flex" justifyContent="space-between">
            <p>Price</p>
            <p>{place.price_level}</p>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <p variant="subtitle1">Ranking</p>
            <p>{place.ranking}</p>
          </Box>
          {place?.awards?.map((award) => (
            <Box
              my={1}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <EmojiEventsOutlinedIcon />
              <p>{award.display_name}</p>
            </Box>
          ))}
          {place?.cuisine?.map(({ name }) => (
            <Chip
              key={name}
              size="small"
              label={name}
              sx={{
                backgroundColor: "rgb(255, 255, 255) ",
                backdropFilter: "blur(10px)",
                marginTop: "0.5rem",
                marginRight: "0.5rem",
                color: "#000",
                fontSize: ".6rem",
              }}
            />
          ))}
          {place?.address && (
            <p className="phone-address">
              {place.address} <LocationOnIcon />
            </p>
          )}
          {place?.phone && (
            <p className="phone-address">
              {place.phone} <PhoneIcon />
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default PlaceDetails;
