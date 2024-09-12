import React from "react";
import RssAppImage from "../assets/rssapp2.png"; // Assuming the image you uploaded is saved in assets folder
import { embedNewsFeedsData } from "../Data/Data"; // Importing data for the section

const EmbedNewsFeeds = () => {
  return (
    <section className="embed-news-feeds-section container mx-auto grid grid-cols-1 gap-8 py-12 lg:grid-cols-2">
      {/* Left Section - Image */}
      <div className="rss-app-image-container">
        <img
          src={RssAppImage}
          alt="RSS App Screenshot"
          className="rss-app-image"
        />
      </div>

      {/* Right Section */}
      <div>
        <h2 className="embed-title">{embedNewsFeedsData.title}</h2>
        <p className="embed-description">{embedNewsFeedsData.description}</p>
        <div className="embed-grid">
          {embedNewsFeedsData.features.map((feature, index) => (
            <div key={index} className="embed-feature-card">
              <div className="embed-feature-icon">{feature.icon}</div>
              <h3 className="embed-feature-title">{feature.title}</h3>
              <p className="embed-feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmbedNewsFeeds;
