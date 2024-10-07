// src/components/Hero.js
import React from "react";
// import { backgroundColors, heroData } from "../Data/Data"; // Assuming you named it dada
import { backgroundColors } from "../Data/backgroundColors";
import { heroData } from "../Data/heroData";

const Hero = () => {
  return (
    <section className={`${backgroundColors.hero} py-20 text-white`}>
      <div className="container text-center">
        {/* Hero Title */}
        <h1 className="hero-title text-center ">{heroData.title}</h1>

        {/* Hero Subtitle */}
        <p className="hero-subtitle mt-4 text-center">{heroData.subtitle}</p>

        {/* Hero Description */}
        <p className="mt-4 text-lg md:text-xl">{heroData.description}</p>

        {/* Call to Action Button */}
        <button className="mt-16 rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition duration-300 hover:bg-orange-600">
          {heroData.buttonText}
        </button>

        {/* Statistic Section - Updated for Styling */}
        <p className="mt-4 text-lg text-gray-300">{heroData.stats.info}</p>
        <p className="hero-subtitle mt-2 font-light text-white">
          {heroData.stats.users}{" "}
          <span className="text-lg font-normal text-gray-300">
            {heroData.stats.newUsers}
          </span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
