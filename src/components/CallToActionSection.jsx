import React from "react";
import { backgroundColors, callToActionData } from "../Data/Data"; // Importing data for the section

const CallToActionSection = () => {
  return (
    <section
      className={`call-to-action-section ${backgroundColors.callToAction} py-12 text-center text-white`}
    >
      <h2 className="cta-title">{callToActionData.title}</h2>

      <button className="cta-button mt-4">{callToActionData.buttonText}</button>

      <div className="cta-info mt-4">
        {callToActionData.info.map((item, index) => (
          <p key={index} className="cta-info-item">
            ✓ {item}
          </p>
        ))}
      </div>
    </section>
  );
};

export default CallToActionSection;
