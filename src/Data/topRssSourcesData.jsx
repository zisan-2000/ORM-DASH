// Import icons
import {
  FaGoogle,
  FaRss,
  FaTags,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const topRssSourcesData = {
  title: "Top RSS Feed Sources",
  description:
    "Stay up to date with the latest news, trends, and updates from the best RSS sources across the web. Access content from world events, technology, business, and more.",
  sources: [
    {
      icon: <FaRss className="top-rss-sources-icon" />,
      title: "Web to RSS",
      description:
        "Stay informed even with websites that don’t provide RSS feeds using the Web to RSS converter.",
    },
    {
      icon: <FaGoogle className="top-rss-sources-icon" />,
      title: "Google News",
      description:
        "Get the latest from Google News, including feeds for world news, business, technology, and more.",
    },
    {
      icon: <FaTwitter className="top-rss-sources-icon" />,
      title: "X (formerly Twitter)",
      description:
        "Create RSS feeds for X (formerly Twitter) based on individual users, hashtags, or specific keywords.",
    },
    {
      icon: <FaYoutube className="top-rss-sources-icon" />,
      title: "YouTube",
      description:
        "Receive updates on new video uploads by subscribing to RSS feeds for YouTube channels.",
    },
    {
      icon: <FaTiktok className="top-rss-sources-icon" />,
      title: "TikTok",
      description:
        "Generate RSS feeds for specific TikTok users or search terms and stay updated with the latest content.",
    },
    {
      icon: <FaTags className="top-rss-sources-icon" />,
      title: "Custom Topics & Keywords",
      description:
        "Create personalized RSS feeds based on specific keywords or topics to get updates as soon as new content is published.",
    },
  ],
};
