import React from "react";
import { topRssSourcesData } from "../Data/Data"; // Importing data for the section

const TopRssSourcesSection = () => {
  return (
    <section className="top-rss-sources-section container py-12 text-center">
      <div className="container mx-auto">
        <h2 className="top-rss-sources-title">{topRssSourcesData.title}</h2>
        <p className="top-rss-sources-description">
          {topRssSourcesData.description}
        </p>

        <div className="top-rss-sources-grid">
          {topRssSourcesData.sources.map((source, index) => (
            <div key={index} className="top-rss-sources-card">
              <div className="top-rss-sources-icon">{source.icon}</div>
              <h3 className="top-rss-sources-feature-title">{source.title}</h3>
              <p className="top-rss-sources-feature-description">
                {source.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRssSourcesSection;
