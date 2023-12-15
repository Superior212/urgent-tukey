// eslint-disable-next-line no-unused-vars
import React from "react";
import TukayBtn from "../Buttons/TukayBtn";
import sapa from "../../assets/sapa.png";

const Sapa = () => {
  const customStyles = {
    backgroundColor: "#215056",
    marginLeft: "rem",
    marginRight: 10,
    display: { xs: "none", md: "flex" },
  };
  return (
    <div className="md:bg-white md:text-black md:flex items-center ">
      <div className="px-[4rem] mt-[4rem] md:mt-40">
        <h1 className="font-bold text-[20px] md:text-[25px] md:mb-6">
          Sapa² nice one nice one
        </h1>

        <p className="mt-4 ">
          Sapa is a state of Ahh God abeg, who we offend, nothing is too small
          to save a life.
        </p>

        <div className="flex items-center mt-4 md:mt-4">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none">
              <path
                d="M15 5.25L7.28033 12.9697C6.98744 13.2626 6.51256 13.2626 6.21967 12.9697L3 9.75"
                stroke="#215056"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="mx-4">Urgent tukay</span>
        </div>
        <div className="flex items-center mt-4 md:mt-4">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none">
              <path
                d="M15 5.25L7.28033 12.9697C6.98744 13.2626 6.51256 13.2626 6.21967 12.9697L3 9.75"
                stroke="#215056"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="mx-4">Garri</span>
        </div>
        <div className="flex items-center mt-4 md:mt-4 mb-8">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none">
              <path
                d="M15 5.25L7.28033 12.9697C6.98744 13.2626 6.51256 13.2626 6.21967 12.9697L3 9.75"
                stroke="#215056"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="mx-4 ">Drop location</span>
        </div>
        <TukayBtn {...customStyles}>Donate Now</TukayBtn>
      </div>
      <div className="relative bottom-28 md:static">
        <img src={sapa} className="w-full md:w-[72%] mx-auto md:mx-0" alt="" />
      </div>
    </div>
  );
};

export default Sapa;
