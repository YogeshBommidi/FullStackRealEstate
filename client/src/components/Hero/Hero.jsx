import React from "react";
import "./Hero.css";
import "../../index.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBAr/SearchBar";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/**Left Side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Discover
              <br /> Most Suitable
              <br /> Property
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText hero-des">
            <span>Find a variety of properties that suit you very easily</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <SearchBar/>
          
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8700} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1800} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>
        {/*Right Side */}
        <div className="flexCenter hero-right">
          <motion.div
            className="image-container"
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
          >
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
