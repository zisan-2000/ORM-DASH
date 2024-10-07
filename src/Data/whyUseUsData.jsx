// Import icons
import { FaBolt, FaHeart, FaNewspaper } from "react-icons/fa";

export const whyUseUsData = {
  title: "Top 3 Reasons to Choose Our Service",
  reasons: [
    {
      icon: <FaBolt className="why-use-us-icon" />, // JSX icon component
      title: "Effortless RSS Feed Generation",
      description:
        "No coding skills needed. Our tool automatically selects the best content for you.",
    },
    {
      icon: <FaNewspaper className="why-use-us-icon" />, // JSX icon component
      title: "Seamless News Feed Integration",
      description:
        "Easily add real-time, dynamic content to your website or mobile app.",
    },
    {
      icon: <FaHeart className="why-use-us-icon" />, // JSX icon component
      title: "Boost User Engagement",
      description:
        "Distribute your content across multiple platforms, making it more accessible for users.",
    },
  ],
};
