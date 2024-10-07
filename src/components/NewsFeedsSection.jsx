import React from "react";
import { newsFeedsData } from "../Data/newsFeedsData"; // Importing data for the section

const NewsFeedsSection = () => {
  return (
    <section className="news-feeds-section container py-12 text-center">
      <div className="container mx-auto">
        <h2 className="news-feeds-title">{newsFeedsData.title}</h2>
        <p className="news-feeds-description">{newsFeedsData.description}</p>

        <div className="news-feeds-grid">
          {newsFeedsData.features.map((feature, index) => (
            <div key={index} className="news-feeds-card">
              <img
                src={feature.logo}
                alt={feature.title}
                className="news-feeds-logo"
              />
              <h3 className="news-feeds-feature-title">{feature.title} →</h3>
              <p className="news-feeds-feature-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <button className="news-feeds-button">
          {newsFeedsData.buttonText} →
        </button>
      </div>
    </section>
  );
};

export default NewsFeedsSection;
