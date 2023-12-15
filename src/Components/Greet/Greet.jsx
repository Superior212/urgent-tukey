// eslint-disable-next-line no-unused-vars
import React from "react";
import greet from "../../assets/greet.png";
import TukayBtn from "../Buttons/TukayBtn";
import { useSpring, animated } from "react-spring";

const Greet = () => {
  const customStyles = {
    backgroundColor: "#215056",
    marginLeft: "rem",
    marginRight: 10,
    display: { xs: "none", md: "flex" },
  };

  const fadeInAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-70px)" },
    config: { duration: 900, tension: 280, friction: 50 },
  });
  return (
    <animated.div
      className="md:bg-white md:text-black md:flex"
      style={fadeInAnimation}>
      <div className="md:w-1/2">
        <img src={greet} alt="" />
        <h1 className="bg-[#4297AB] w-[20rem] text-[28px] font-bold mx-[2rem] md:mx-[7.2rem] py-3 px-12">
          I Greet you boss
        </h1>
      </div>

      <div className="md:w-1/2 mx-[3rem] md:mx-0">
        <h1 className="mt-8 md:mt-[14rem] mx-12 md:mx-0  text-[24px] md:text-[40px] font-bold">
          Boss I Greet Oh
        </h1>
        <p className="md:mt-10 mt-4 md:pr-60 mb-10 md:mb-0">
          Help me touch that boss way dey with ehn BF, Boss i greet oh... Na my
          guy Pablo with them scorpion and croc na ehn send me come meet you,
          make you give am:
        </p>

        <div className="flex items-center mt-4 md:mt-6">
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
          <span className="mx-4">G² (Garri and groundnut)</span>
        </div>
        <div className="flex items-center mt-4 md:mt-6">
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
          <span className="mx-4">Groccies</span>
        </div>
        <div className="flex items-center mt-4 md:mt-6 mb-8">
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
          <span className="mx-4">Cassava flecks </span>
        </div>
        <TukayBtn {...customStyles}>Donate Now</TukayBtn>
      </div>
    </animated.div>
  );
};

export default Greet;
