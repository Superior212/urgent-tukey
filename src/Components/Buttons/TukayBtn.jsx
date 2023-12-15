import { Button } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";
import emoji from "../../assets/emoji.png";

// eslint-disable-next-line react/prop-types
const TukayBtn = ({
  backgroundColor,
  marginLeft,
  marginRight,
  display,
  children,
  fontSize
}) => {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor,
          marginLeft,
          marginRight,
          display,
          fontSize,
        }}>
        {children}
        <img src={emoji} alt="" />
      </Button>
    </div>
  );
};

export default TukayBtn;
