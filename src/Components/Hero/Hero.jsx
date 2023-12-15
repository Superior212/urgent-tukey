// eslint-disable-next-line no-unused-vars
import React from "react";
import TukayBtn from "../Buttons/TukayBtn";
import opay from "../../assets/opay.png";
import palmpay from "../../assets/palmpay.png";
import kuda from "../../assets/kuda.png";
import begger from "../../assets/begger.png";

const Hero = () => {
  const customStyles = {
    backgroundColor: "#215056",
    marginLeft: "4rem",
    marginRight: 10,
  };
  return (
    <div className="md:flex block pt-28 md:pt-10">
      <div className="md:w-1/2 md:pt-28 md:px-20">
        <h1 className="text-[25px] md:text-[52px] px-[4rem] font-bold mb-4 md:mb-2 ">
          Na beg , we dey beg
        </h1>

        <p className="px-[4rem] mb-8 text-[17px]">
          Urgent 2k is a valid Nigerian currency. It is more than an emergency
          fund; it is a lifesaver, a life jacket when you are drowning. In fact,
          this currency has officially been recognized.
        </p>

        <TukayBtn {...customStyles}>Urgent tukay</TukayBtn>

        <p className="px-[4rem] mt-8">Who supports us</p>

        <div className="flex items-center justify-between px-[4rem] mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="112"
            height="29"
            viewBox="0 0 112 29"
            fill="none">
            <path
              d="M29.9263 4.62144C28.9414 3.94268 27.6561 3.60247 26.0706 3.60247H19.932C19.446 3.60247 19.1774 3.84616 19.1264 4.33308L16.6328 20.0244C16.6069 20.1785 16.6454 20.3195 16.7479 20.4476C16.8498 20.576 16.9779 20.6398 17.1315 20.6398H20.0472C20.5586 20.6398 20.8397 20.3967 20.8913 19.9092L21.5818 15.6788C21.607 15.4738 21.6969 15.3071 21.8504 15.1788C22.0038 15.0506 22.1957 14.9668 22.4259 14.9285C22.6561 14.8904 22.8731 14.8711 23.0781 14.8711C23.2825 14.8711 23.5254 14.8842 23.8072 14.9097C24.0883 14.9352 24.2675 14.9478 24.3443 14.9478C26.5437 14.9478 28.2702 14.3265 29.5236 13.0825C30.7765 11.8392 31.4037 10.1152 31.4037 7.90959C31.4037 6.39688 30.9108 5.30091 29.9263 4.62109V4.62144ZM26.7614 9.33307C26.6331 10.2306 26.301 10.82 25.7639 11.1022C25.2267 11.3846 24.4594 11.5252 23.4621 11.5252L22.1959 11.5636L22.8483 7.4483C22.8992 7.16652 23.0653 7.02545 23.3469 7.02545H24.0761C25.0986 7.02545 25.8408 7.17322 26.3012 7.46758C26.7614 7.76264 26.9149 8.38463 26.7614 9.33307Z"
              fill="white"
            />
            <path
              d="M94.7064 3.60223H91.8677C91.5856 3.60223 91.4195 3.7433 91.3689 4.02555L88.875 20.0249L88.8366 20.1017C88.8366 20.2306 88.8877 20.3518 88.9903 20.4672C89.092 20.5824 89.2205 20.6401 89.3738 20.6401H91.9063C92.3914 20.6401 92.6601 20.397 92.7121 19.9095L95.2056 4.17943V4.14123C95.2055 3.78209 95.0388 3.60271 94.7064 3.60271V3.60223Z"
              fill="white"
            />
            <path
              d="M60.4078 9.79506C60.4078 9.66716 60.3565 9.54514 60.2548 9.43005C60.1522 9.31473 60.037 9.25665 59.9095 9.25665H56.9554C56.6734 9.25665 56.4432 9.3855 56.2645 9.64118L52.1979 15.6411L50.5098 9.87218C50.3813 9.46226 50.1003 9.25665 49.6659 9.25665H46.788C46.6598 9.25665 46.5448 9.31449 46.4431 9.43005C46.3405 9.54514 46.2896 9.66739 46.2896 9.79506C46.2896 9.84667 46.539 10.6028 47.0376 12.0642C47.5363 13.5262 48.0734 15.103 48.6489 16.7954C49.2245 18.4873 49.5248 19.3852 49.5505 19.4869C47.453 22.359 46.4047 23.8974 46.4047 24.1022C46.4047 24.4358 46.5707 24.6022 46.9035 24.6022H49.8576C50.1388 24.6022 50.3689 24.4743 50.5483 24.2178L60.3316 10.0641C60.3824 10.0134 60.4078 9.92402 60.4078 9.79494V9.79506Z"
              fill="white"
            />
            <path
              d="M87.9166 9.25665H85.0007C84.6423 9.25665 84.4257 9.67985 84.3488 10.5261C83.683 9.50082 82.4689 8.98745 80.7037 8.98745C78.8622 8.98745 77.2954 9.67986 76.004 11.0644C74.7122 12.449 74.0667 14.0776 74.0667 15.9491C74.0667 17.4621 74.5078 18.6671 75.39 19.5642C76.2725 20.4622 77.4552 20.9103 78.9393 20.9103C79.6809 20.9103 80.4354 20.7562 81.2027 20.4488C81.9699 20.1411 82.5705 19.7311 83.0061 19.2181C83.0061 19.2438 82.98 19.3588 82.9294 19.5638C82.8777 19.7693 82.8525 19.9236 82.8525 20.0253C82.8525 20.4361 83.0183 20.6406 83.3514 20.6406H85.9988C86.4842 20.6406 86.7659 20.3975 86.8423 19.91L88.4156 9.87194C88.4408 9.71794 88.4026 9.57723 88.3004 9.44886C88.1976 9.32096 88.07 9.25665 87.9166 9.25665ZM82.91 16.8336C82.2577 17.4746 81.4711 17.7949 80.5504 17.7949C79.8083 17.7949 79.2078 17.5902 78.7472 17.1797C78.2865 16.7703 78.0564 16.2062 78.0564 15.4874C78.0564 14.5395 78.3761 13.7375 79.0158 13.0838C79.6544 12.4299 80.448 12.1031 81.3944 12.1031C82.11 12.1031 82.7047 12.3146 83.1784 12.7375C83.6511 13.1607 83.8884 13.744 83.8884 14.4878C83.8882 15.4107 83.5621 16.1929 82.91 16.8336Z"
              fill="white"
            />
            <path
              d="M44.3327 9.25665H41.4169C41.0583 9.25665 40.8413 9.67985 40.7645 10.5261C40.0739 9.50082 38.8589 8.98745 37.1197 8.98745C35.2781 8.98745 33.7113 9.67986 32.4198 11.0644C31.128 12.449 30.4824 14.0776 30.4824 15.9491C30.4824 17.4621 30.9237 18.6671 31.8062 19.5642C32.6886 20.4622 33.8712 20.9103 35.3549 20.9103C36.0707 20.9103 36.8129 20.7562 37.5801 20.4488C38.3474 20.1411 38.9613 19.7311 39.4217 19.2181C39.319 19.5255 39.2682 19.7948 39.2682 20.0253C39.2682 20.4361 39.4343 20.6406 39.7669 20.6406H42.4141C42.8997 20.6406 43.1814 20.3975 43.2582 19.91L44.8311 9.87194C44.8563 9.71794 44.8181 9.57723 44.7161 9.44886C44.6137 9.32096 44.486 9.25665 44.3327 9.25665ZM39.326 16.8526C38.6736 17.4815 37.874 17.7949 36.9282 17.7949C36.186 17.7949 35.5913 17.5902 35.1441 17.1797C34.6962 16.7703 34.4726 16.2062 34.4726 15.4874C34.4726 14.5395 34.7921 13.7375 35.4318 13.0838C36.0708 12.4299 36.8638 12.103 37.8105 12.103C38.5263 12.103 39.121 12.3146 39.5946 12.7375C40.0675 13.1607 40.3043 13.744 40.3043 14.4878C40.3042 15.4364 39.9782 16.2251 39.326 16.8526Z"
              fill="white"
            />
            <path
              d="M73.5102 4.62144C72.5254 3.94268 71.2405 3.60247 69.6546 3.60247H63.5543C63.0426 3.60247 62.7611 3.84616 62.7103 4.33308L60.2165 20.0244C60.1906 20.1785 60.229 20.3195 60.3316 20.4476C60.4331 20.576 60.5616 20.6398 60.7151 20.6398H63.8609C64.1678 20.6398 64.3723 20.4733 64.4749 20.1399L65.1655 15.6788C65.191 15.4738 65.2805 15.3071 65.4342 15.1788C65.5877 15.0506 65.7793 14.9668 66.0097 14.9285C66.2397 14.8904 66.4568 14.8711 66.6619 14.8711C66.8664 14.8711 67.1091 14.8842 67.3907 14.9097C67.6719 14.9352 67.8516 14.9478 67.9278 14.9478C70.1277 14.9478 71.8538 14.3265 73.1073 13.0825C74.3606 11.8392 74.9872 10.1152 74.9872 7.90959C74.9873 6.39688 74.4947 5.30079 73.5102 4.62109V4.62144ZM69.5779 10.9482C69.0151 11.3327 68.1709 11.5249 67.0458 11.5249L65.8179 11.5634L66.4701 7.44806C66.5208 7.1664 66.6871 7.0251 66.9688 7.0251H67.6591C68.2219 7.0251 68.6694 7.05084 69.0024 7.10198C69.3343 7.15347 69.6546 7.31346 69.9614 7.58255C70.2686 7.85187 70.4218 8.24309 70.4218 8.75563C70.4218 9.83291 70.1402 10.5633 69.5779 10.9482Z"
              fill="white"
            />
          </svg>

          <div className="w-1/2">
            <img src={opay} alt="" />
          </div>
          <div>
            <img src={palmpay} alt="" />
          </div>
          <div>
            <img src={kuda} alt="" />
          </div>
        </div>
      </div>
      <div>
        <img src={begger} className="w-[90%] mx-auto" alt="" />
      </div>
    </div>
  );
};

export default Hero;
