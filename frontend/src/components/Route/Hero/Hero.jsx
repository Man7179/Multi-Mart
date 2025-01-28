import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[90vh]  bg-cover   w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://raw.githubusercontent.com/Rahuljagwan/images/refs/heads/main/bg.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] ml-[-150px] mt-[-40px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize z-50`}
        >
          Your Ultimate <span className="text-[#c88b21]">Shopping</span> <br />
          <span className="text-[#c88b21]">Destination!</span>
        </h1>
        <p className="pt-5 text-[16px] font-semibold font-[Poppins] font-[400] text-[#000000ba] ml-[-150px] z-100">
          <span className="animate-pulse">Discover</span>{" "}
          <span className="animate-pulse delay-100">an</span>{" "}
          <span className="animate-pulse delay-300">incredible</span>{" "}
          <span className="animate-pulse delay-500">variety</span>{" "}
          <span className="animate-pulse delay-700">of</span>{" "}
          <span className="animate-pulse delay-900">products</span>{" "}
          <span className="animate-pulse delay-1100">from</span>{" "}
          <span className="animate-pulse delay-1300">multiple</span> <br />
          <span className="animate-pulse delay-1500">vendors</span>,
          <span className="animate-pulse delay-1700">all in one place.</span>
          <br />
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5 ml-[-150px] `}>
            <span className="text-[#c88b21] font-[Poppins] text-[18px] ">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
