import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./styles.scss";
import { useState } from "react";
import logo from "../img/logo.svg";

function Header({ setCoordinates }) {
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (autoC) => setAutocomplete(autoC);
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

  return (
    <AppBar position="static" className="appbar" sx={{ boxShadow: 0 }}>
      <Toolbar className="toolbar">
        <div className="header">
          <img src={logo} alt="" />
          <h2> Travel Advisor</h2>
        </div>
        <Box display="flex" className="box">
          <h4>Explore New Places</h4>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className="search">
              <div className="search-icon">
                <SearchIcon />
              </div>
              <InputBase placeholder="Search..." />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
