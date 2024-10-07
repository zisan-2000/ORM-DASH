// Import icons
import {
  FaBell,
  FaCogs,
  FaFilter,
  FaFolderOpen,
  FaRss,
  FaThLarge,
} from "react-icons/fa";

export const embedNewsFeedsData = {
  title: "Embed Dynamic News Feeds",
  description:
    "Easily manage and control your content with our cloud-based, all-in-one news feed solution. Effortlessly embed real-time content on your website.",
  features: [
    {
      icon: <FaRss className="embed-feature-icon" />,
      title: "Real-Time News Feeds",
      description:
        "Access and display dynamically updated news feeds instantly.",
    },
    {
      icon: <FaCogs className="embed-feature-icon" />,
      title: "Feed Bundles",
      description: "Combine multiple feeds into one comprehensive super feed.",
    },
    {
      icon: <FaFolderOpen className="embed-feature-icon" />,
      title: "Content Collections",
      description:
        "Curate specific posts to create personalized, unique feed collections.",
    },
    {
      icon: <FaFilter className="embed-feature-icon" />,
      title: "Advanced Filtering",
      description:
        "Use powerful filters to ensure your content stays focused and relevant.",
    },
    {
      icon: <FaBell className="embed-feature-icon" />,
      title: "Custom Alerts",
      description:
        "Get the latest updates via email or auto-post them to platforms like Telegram and Slack.",
    },
    {
      icon: <FaThLarge className="embed-feature-icon" />,
      title: "Flexible Widgets",
      description:
        "Choose from various widget styles to seamlessly embed content on your website.",
    },
  ],
};
