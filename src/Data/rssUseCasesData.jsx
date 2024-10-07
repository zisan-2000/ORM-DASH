// src/data/data.jsx

// Import icons
import {
  FaBookReader,
  FaBullhorn,
  FaChartBar,
  FaEnvelope,
  FaFileAlt,
  FaListAlt,
  FaPodcast,
  FaStoreAlt,
} from "react-icons/fa";

export const rssUseCasesData = {
  title: "Popular Ways to Use RSS Feeds",
  description:
    "RSS feeds are an efficient way to keep up with the latest content from your favorite websites. Here are some of the most common and valuable use cases for RSS feeds.",
  useCases: [
    {
      icon: <FaListAlt className="rss-use-case-icon" />,
      title: "News Aggregation",
      description:
        "Aggregate news from multiple sources into one place for easy access and up-to-date information.",
    },
    {
      icon: <FaBookReader className="rss-use-case-icon" />,
      title: "Personalized Content",
      description:
        "Receive tailored updates by subscribing to topic-specific RSS feeds, ensuring relevant and fresh content.",
    },
    {
      icon: <FaFileAlt className="rss-use-case-icon" />,
      title: "Research & Monitoring",
      description:
        "Stay on top of industry trends by subscribing to feeds from blogs, news sites, and social media platforms.",
    },
    {
      icon: <FaPodcast className="rss-use-case-icon" />,
      title: "Podcasts & Video",
      description:
        "Subscribe to podcasts and video feeds via RSS to get the latest episodes delivered directly to you.",
    },
    {
      icon: <FaBullhorn className="rss-use-case-icon" />,
      title: "Content Marketing",
      description:
        "Make it simple for your readers to subscribe and receive updates whenever you publish new content.",
    },
    {
      icon: <FaChartBar className="rss-use-case-icon" />,
      title: "Competitive Intelligence",
      description:
        "Monitor competitor activity by subscribing to RSS feeds from their websites and social media profiles.",
    },
    {
      icon: <FaEnvelope className="rss-use-case-icon" />,
      title: "Customer Service",
      description:
        "Track customer reviews and brand mentions across social media and review platforms using RSS feeds.",
    },
    {
      icon: <FaEnvelope className="rss-use-case-icon" />,
      title: "Internal Communications",
      description:
        "Distribute company news and updates internally to keep your team informed and connected.",
    },
    {
      icon: <FaStoreAlt className="rss-use-case-icon" />,
      title: "E-commerce Notifications",
      description:
        "Keep customers updated on new products, promotions, and deals with RSS feeds for your store.",
    },
  ],
};
