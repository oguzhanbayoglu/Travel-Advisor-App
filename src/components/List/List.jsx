import React from "react";
import {
  CircularProgress,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import "./styles.scss";
import { useState, useEffect, createRef } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

function List({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}) {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());

    setElRefs(refs);
  }, [places]);

  return (
    <div className="container">
      <h3>Restaurants, Hotels & Attractions</h3>
      {isLoading ? (
        <div>
          <CircularProgress className="loading" size="2rem" />
        </div>
      ) : (
        <>
          <FormControl className="formControl">
            <InputLabel className="label">Type</InputLabel>
            <Select
              className="select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="formControl">
            <InputLabel className="label">Rating</InputLabel>
            <Select
              className="select"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className="grid">
            {places?.map((place, i) => (
              <Grid item key={i} xs={12} ref={elRefs[i]}>
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
}

export default List;
