import React from "react";
import RssAppImage from "../assets/rssIntegrate.png"; // Assuming the RSS app image is stored here
import { rssIntegrationsData } from "../Data/Data"; // Importing data for the section

const RssIntegrationsSection = () => {
  return (
    <section className="rss-integrations-section container mx-auto py-12 text-center">
      <h2 className="rss-integrations-title">{rssIntegrationsData.title}</h2>
      <p className="rss-integrations-description">
        {rssIntegrationsData.description}
      </p>

      {/* RSS Integration Logos Section */}

      {/* RSS App Image */}
      <div className="rss-app-image-container mt-8">
        <img
          src={RssAppImage}
          alt="RSS App Screenshot"
          className="rss-app-image"
        />
      </div>
    </section>
  );
};

export default RssIntegrationsSection;
