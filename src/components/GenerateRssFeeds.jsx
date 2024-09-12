import React from "react";
import RssAppImage from "../assets/rssapp.png"; // Assuming the image you uploaded is saved in assets folder
import { generateRssFeedsData } from "../Data/Data"; // Importing data for the section

const GenerateRssFeeds = () => {
  return (
    <section className="generate-rss-feeds-section container  mx-auto grid grid-cols-1 gap-8 py-12 lg:grid-cols-2">
      {/* Left Section */}
      <div>
        <h2 className="generate-title">{generateRssFeedsData.title}</h2>
        <p className="generate-description">
          {generateRssFeedsData.description}
        </p>
        <div className="generate-grid">
          {generateRssFeedsData.features.map((feature, index) => (
            <div key={index} className="generate-feature-card">
              <div className="generate-feature-icon">{feature.icon}</div>
              <h3 className="generate-feature-title">{feature.title}</h3>
              <p className="generate-feature-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="rss-app-image-container">
        <img
          src={RssAppImage}
          alt="RSS App Screenshot"
          className="rss-app-image"
        />
      </div>
    </section>
  );
};

export default GenerateRssFeeds;
