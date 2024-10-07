// Import icons
import { FaCode, FaEnvelope, FaFileCsv, FaServer } from "react-icons/fa";

export const useCaseData = {
  title: "Simplified RSS Feed Generation and Consumption",
  description:
    "Our tools are designed to make RSS feed creation and management effortless, whether you're a beginner or a professional.",
  features: [
    {
      icon: <FaCode className="use-case-icon" />,
      title: "Convert RSS to JSON",
      description:
        "Easily parse and integrate RSS feeds into your website or app using JSON.",
    },
    {
      icon: <FaEnvelope className="use-case-icon" />,
      title: "RSS to Email Service",
      description:
        "Get daily emails with the latest updates from your RSS feeds directly in your inbox.",
    },
    {
      icon: <FaFileCsv className="use-case-icon" />,
      title: "Export RSS to CSV",
      description:
        "Extract data from multiple RSS feeds for detailed analysis in CSV format.",
    },
    {
      icon: <FaServer className="use-case-icon" />,
      title: "RSS API Integration",
      description:
        "Build and scale applications with ease by programmatically using our RSS feed API.",
    },
  ],
};
