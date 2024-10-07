import React from "react";
import RssAppImage from "../assets/rsswidgets.png"; // Assuming the image you uploaded is saved in assets folder
import { rssWidgetsData } from "../Data/rssWidgetsData"; // Importing data for the section

const RssWidgets = () => {
  return (
    <section className="rss-widgets-section container mx-auto grid grid-cols-1 gap-8 py-12 lg:grid-cols-2">
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
        <h2 className="rss-widgets-title">{rssWidgetsData.title}</h2>
        <p className="rss-widgets-description">{rssWidgetsData.description}</p>
        <div className="rss-widgets-grid">
          {rssWidgetsData.features.map((feature, index) => (
            <div key={index} className="rss-widgets-feature-card">
              <div className="rss-widgets-feature-icon">{feature.icon}</div>
              <h3 className="rss-widgets-feature-title">{feature.title}</h3>
              <p className="rss-widgets-feature-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RssWidgets;
