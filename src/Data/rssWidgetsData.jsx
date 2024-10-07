// src/data/data.jsx

// Import icons
import { FaCode, FaCogs, FaPalette, FaThLarge } from "react-icons/fa";

export const rssWidgetsData = {
  title: "Customizable RSS Widgets for Your Website",
  description:
    "Effortlessly embed and style RSS widgets to match the design and aesthetic of your website.",
  features: [
    {
      icon: <FaCogs className="rss-widgets-icon" />,
      title: "Personalized Widgets",
      description:
        "Enhance user interaction with fully customizable RSS widgets tailored to your site.",
    },
    {
      icon: <FaPalette className="rss-widgets-icon" />,
      title: "Save and Use Presets",
      description:
        "Create and save widget presets for easy and quick styling across multiple pages.",
    },
    {
      icon: <FaThLarge className="rss-widgets-icon" />,
      title: "Versatile Widget Options",
      description:
        "Choose from 7 unique widgets: Wall, List, Carousel, Imageboard, Ticker, Magazine, and Feed.",
    },
    {
      icon: <FaCode className="rss-widgets-icon" />,
      title: "Custom CSS Support",
      description:
        "Take control of the design by applying custom CSS to fine-tune widget appearance.",
    },
  ],
};
