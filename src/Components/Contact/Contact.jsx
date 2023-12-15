// eslint-disable-next-line no-unused-vars
import { Typography } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";
import TukayBtn from "../Buttons/TukayBtn";
import checkbox from "../../assets/checkbox.png";

const Contact = () => {
  const customStyles = {
    backgroundColor: "#215056",
    fontsize: "13px",
  };
  return (
    <div className="bg-white text-black md:p-20 p-4 pt-10 flex flex-col justify-center items-center ">
      <Typography
        variant="h5"
        className="md:px-40 md:w-[54rem] text-center"
        sx={{
          "@media (max-width: 600px)": {
            variant: "h6",
          },
        }}>
        We are happy to have you here, thanks for being there always.
      </Typography>
      <form className="flex border bottom-1 rounded-md mt-5">
        <input
          type="text"
          className="border-0 outline-none px-5"
          placeholder="Our account number"
        />
        <TukayBtn {...customStyles}>Donate now</TukayBtn>
      </form>

      <div className="flex justify-between items-center md:gap-10 gap-3 mt-12">
        <div className="flex gap-2 ">
          <img src={checkbox} className="md:w-5 md:h-5 w-4 h-4" alt="" />
          <span className="text-[12px]  md:text-[18px] ">Fully Secure</span>
        </div>

        <div className="flex gap-2 ">
          <img src={checkbox} className="md:w-5 md:h-5 w-4 h-4" alt="" />
          <span className="text-[12px]  md:text-[18px] ">Fully Secure</span>
        </div>

        <div className="flex gap-2 ">
          <img src={checkbox} className="md:w-5 md:h-5 w-4 h-4" alt="" />
          <span className="text-[12px] md:text-[18px] ">Fully Secure</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
