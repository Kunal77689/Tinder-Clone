import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";
import "./SwipeButtons.css";
function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="replay">
        <ReplayIcon fontSize="medium"></ReplayIcon>
      </IconButton>
      <IconButton className="close">
        <CloseIcon fontSize="medium"></CloseIcon>
      </IconButton>
      <IconButton className="star">
        <StarRateIcon fontSize="medium"></StarRateIcon>
      </IconButton>
      <IconButton className="favorite">
        <FavoriteIcon fontSize="medium"></FavoriteIcon>
      </IconButton>
      <IconButton className="flash">
        <FlashOnIcon fontSize="medium"></FlashOnIcon>
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
