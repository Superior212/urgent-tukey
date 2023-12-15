// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../../assets/Logo.png";
import { Button, Typography } from "@mui/material";
import Socialicons from "../../assets/Socialicons.png";

const Footer = () => {
  return (
    <div className="p-5">
      <div className="md:flex items-center justify-around mb-8">
        <div className="mx-6 md:mx-0">
          <img src={logo} alt="" />
        </div>

        <div className="mx-2 my-4   ">
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Contact us</Button>
          <Button color="inherit">Sapa</Button>
          <Button color="inherit">Help</Button>
        </div>

        <div className="mx-20 md:mx-0">
          <img src={Socialicons} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center mt-7">
        <div className="h-[1px] w-[85%] bg-white mt-4"></div>
      </div>

      <div className="md:flex items-center justify-between p-8">
        <div className="md:mx-20 mx-auto">
          <Typography>© 2023 Sapa. All Rights Reserved.</Typography>
        </div>

        <div className="flex items-center  md:gap-6 gap-6 md:mx-20">
          <Typography>Privacy Policy</Typography>
          <Typography>Terms & Conditions</Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
