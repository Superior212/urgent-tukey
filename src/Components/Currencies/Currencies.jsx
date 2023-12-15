// eslint-disable-next-line no-unused-vars
import React from "react";
import cashred from "../../assets/cashred.png";
import cashblue from "../../assets/cashblue.png";

const Currencies = () => {
  return (
    <div className="bg-white text-black ">
      <h1 className="text-center font-bold text-[20px] md:text-[25px] pt-6">
        Our Currencies
      </h1>
      <p className="text-center text-[15px]">
        These currencies has been saving lives since 1900
      </p>

      <div className="md:flex items-center justify-center md:mx-24 mt-10">
        <div className="md:w-1/2">
          <img src={cashblue} alt="" />

          <div className="md:mx-10 mx-7">
            <h1 className="font-bold mb-4">
              We accepts all forms of digital help
            </h1>
            <p className="md:w-[35rem]">
              Urgent 2k is a valid Nigerian currency. It is more than an
              emergency fund; it is a lifesaver, a life jacket when you are
              drowning. In fact, this currency has officially been recognized.
            </p>
            <div className="flex justify-between mt-4 md:w-[34rem]">
              <p className="font-bold">Created</p>
              <p>3rd Dec</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-5 md:mt-0">
          <img src={cashred} alt="" />
          <div className="md:mx-10 mx-7 ">
            <h1 className="font-bold mb-4">
              We accepts all forms of digital help
            </h1>
            <p className="md:w-[35rem]">
              Urgent 2k is a valid Nigerian currency. It is more than an
              emergency fund; it is a lifesaver, a life jacket when you are
              drowning. In fact, this currency has officially been recognized.
            </p>
            <div className="flex justify-between mt-4 md:w-[34rem]">
              <p className="font-bold">Created</p>
              <p>3rd Dec</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currencies;
