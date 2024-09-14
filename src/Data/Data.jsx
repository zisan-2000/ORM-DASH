// src/data/dada.js
// src/data/dada.js

// src/data/data.jsx

export const backgroundColors = {
  hero: "bg-cyan-900",
  callToAction: "bg-cyan-900",
  trustedBy: "bg-slate-100",
  whyUseUs: "bg-slate-100",
  topFeatures: "bg-slate-100",
  generateRssFeeds: "bg-slate-100",
  embedNewsFeeds: "bg-slate-100",
  useCase: "bg-slate-100",
  rssWidgets: "bg-slate-100",
  rssIntegrations: "bg-slate-100",
  newsFeeds: "bg-slate-100",
  topRssSources: "bg-slate-100",
  testimonials: "bg-slate-100",
  footer: "bg-slate-100",
};

import {
  FaBars,
  FaChevronDown,
  FaColumns,
  FaDiscord,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaList,
  FaPinterest,
  FaReddit,
  FaRss,
  FaSlack,
  FaTelegramPlane,
  FaTh,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"; // Import icons

export const headerData = {
  logo: "ORMDASH.APP",
  logoIcon: <FaRss />, // RSS icon added
  navLinks: [
    {
      name: "RSS Feeds",
      path: "/rss-feeds",
      hasDropdown: true,
      dropdownItems: [
        {
          leftSection: {
            title: "RSS Feeds →",
            description: "Select which RSS feed you would like to create",
          },
          rightSection: [
            { icon: <FaRss />, name: "RSS Generator", path: "/rss-generator" },
            { icon: <FaRss />, name: "RSS Builder", path: "/rss-builder" },
            {
              icon: <FaRss />,
              name: "Feeds from Topics",
              path: "/feeds-from-topics",
            },
            {
              icon: <FaYoutube />,
              name: "YouTube RSS Feeds",
              path: "/youtube-rss",
            },
            {
              icon: <FaGoogle />,
              name: "Google News Feeds",
              path: "/google-news",
            },
            {
              icon: <FaInstagram />,
              name: "Instagram RSS Feeds",
              path: "/instagram-rss",
            },
            {
              icon: <FaFacebook />,
              name: "Facebook Page RSS",
              path: "/facebook-rss",
            },
            {
              icon: <FaTiktok />,
              name: "TikTok RSS Feeds",
              path: "/tiktok-rss",
            },
            {
              icon: <FaTwitter />,
              name: "X / Twitter RSS Feeds",
              path: "/twitter-rss",
            },
            {
              icon: <FaTelegramPlane />,
              name: "Telegram RSS Feeds",
              path: "/telegram-rss",
            },
            {
              icon: <FaPinterest />,
              name: "Pinterest RSS Feeds",
              path: "/pinterest-rss",
            },
            {
              icon: <FaReddit />,
              name: "Reddit RSS Feeds",
              path: "/reddit-rss",
            },
          ],
        },
      ],
    },
    {
      name: "RSS Widget",
      path: "/rss-widget",
      hasDropdown: true,
      dropdownItems: [
        {
          leftSection: {
            title: "RSS Widgets →",
            description: "Add HTML & RSS widgets to your website",
          },
          rightSection: [
            {
              icon: <FaTh />,
              name: "News wall",
              path: "/news-wall",
              description: "Showcase the latest news all in one place",
            },
            {
              icon: <FaList />,
              name: "List",
              path: "/list",
              description: "Add the latest posts to your website",
            },
            {
              icon: <FaColumns />,
              name: "Carousel",
              path: "/carousel",
              description: "Display interactive content on your website",
            },
            {
              icon: <FaBars />,
              name: "Ticker",
              path: "/ticker",
              description: "Stream the latest headlines on your webpage",
            },
          ],
        },
      ],
    },
    {
      name: "Bots",
      path: "/bots",
      hasDropdown: true,
      dropdownItems: [
        {
          leftSection: {
            title: "Integration with Bots →",
            description:
              "Use Integration bots to get alerts in your messaging apps or email",
          },
          rightSection: [
            {
              icon: <FaDiscord />,
              name: "X / Twitter Discord Bot",
              path: "/discord-twitter-bot",
            },
            {
              icon: <FaDiscord />,
              name: "Instagram Discord Bot",
              path: "/discord-instagram-bot",
            },
            {
              icon: <FaDiscord />,
              name: "RSS Feed Discord Bot",
              path: "/discord-rss-feed-bot",
            },
            {
              icon: <FaDiscord />,
              name: "YouTube Discord Bot",
              path: "/discord-youtube-bot",
            },
            {
              icon: <FaDiscord />,
              name: "TikTok Discord Bot",
              path: "/discord-tiktok-bot",
            },
            {
              icon: <FaDiscord />,
              name: "Google News Discord Bot",
              path: "/discord-google-news-bot",
            },
            {
              icon: <FaTelegramPlane />,
              name: "X / Twitter Telegram Bot",
              path: "/telegram-twitter-bot",
            },
            {
              icon: <FaTelegramPlane />,
              name: "Instagram Telegram Bot",
              path: "/telegram-instagram-bot",
            },
            {
              icon: <FaTelegramPlane />,
              name: "RSS Feed Telegram Bot",
              path: "/telegram-rss-feed-bot",
            },
            {
              icon: <FaTelegramPlane />,
              name: "YouTube Telegram Bot",
              path: "/telegram-youtube-bot",
            },
            {
              icon: <FaTelegramPlane />,
              name: "TikTok Telegram Bot",
              path: "/telegram-tiktok-bot",
            },
            {
              icon: <FaTelegramPlane />,
              name: "Google News Telegram Bot",
              path: "/telegram-google-news-bot",
            },
            {
              icon: <FaSlack />,
              name: "X / Twitter Slack Bot",
              path: "/slack-twitter-bot",
            },
            {
              icon: <FaSlack />,
              name: "Instagram Slack Bot",
              path: "/slack-instagram-bot",
            },
            {
              icon: <FaSlack />,
              name: "RSS Feed Slack Bot",
              path: "/slack-rss-feed-bot",
            },
            {
              icon: <FaSlack />,
              name: "YouTube Slack Bot",
              path: "/slack-youtube-bot",
            },
            {
              icon: <FaSlack />,
              name: "TikTok Slack Bot",
              path: "/slack-tiktok-bot",
            },
            {
              icon: <FaSlack />,
              name: "Google News Slack Bot",
              path: "/slack-google-news-bot",
            },
            {
              icon: <FaEnvelope />,
              name: "X / Twitter Email Bot",
              path: "/email-twitter-bot",
            },
            {
              icon: <FaEnvelope />,
              name: "Instagram Email Bot",
              path: "/email-instagram-bot",
            },
            {
              icon: <FaEnvelope />,
              name: "RSS Feed Email Bot",
              path: "/email-rss-feed-bot",
            },
            {
              icon: <FaEnvelope />,
              name: "YouTube Email Bot",
              path: "/email-youtube-bot",
            },
            {
              icon: <FaEnvelope />,
              name: "TikTok Email Bot",
              path: "/email-tiktok-bot",
            },
            {
              icon: <FaEnvelope />,
              name: "Google News Email Bot",
              path: "/email-google-news-bot",
            },
          ],
        },
      ],
    },
    { name: "Blog", path: "/blog", hasDropdown: false },
    { name: "Log In", path: "/login", hasDropdown: false },
    { name: "Sign Up", path: "/signup", hasDropdown: false },
  ],
  dropdownIcon: <FaChevronDown />, // Chevron down icon added
};

export const heroData = {
  title: "Your Top Choice for RSS Feeds",
  subtitle: "Stay Connected to What Matters Most",
  description: "Easily generate RSS feeds from any website you visit.",
  buttonText: "Start Now",
  stats: {
    info: "Quickly create RSS feeds from any web page URL",
    users: "Over 2,693 Users",
    newUsers: "Joined Last Week",
  },
};

// Trusted by section data
// src/data/data.jsx

// Import the images first
import annnahl from "../assets/ann-nahl.png";
import buzzmoving from "../assets/buzzmoving.png";
import netreputation from "../assets/netreputation.png";

// Trusted by section data
export const trustedByData = {
  title: "Trusted by Thousands of Leading Companies Worldwide",
  companies: [
    { name: "ann-nahl", logo: annnahl },
    { name: "buzzmoving", logo: buzzmoving },
    { name: "netreputation", logo: netreputation },
  ],
};

// src/data/data.jsx

// src/data/data.jsx

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

// src/data/data.jsx

// Import required icons
import { FaCode, FaImage, FaSyncAlt, FaThLarge } from "react-icons/fa";

export const topFeaturesData = {
  title: "Key Features",
  features: [
    {
      icon: <FaCode className="top-feature-icon" />, // JSX icon component
      title: "Code-Free Setup",
      description:
        "Just paste the URL into our feed generator or RSS builder—no coding required.",
    },
    {
      icon: <FaImage className="top-feature-icon" />, // JSX icon component
      title: "Full Customization",
      description:
        "Easily extract high-quality images and fine-tune your feed with advanced filtering options.",
    },
    {
      icon: <FaSyncAlt className="top-feature-icon" />, // JSX icon component
      title: "Automatic Updates",
      description:
        "Your feed stays up-to-date automatically, ensuring you never miss a thing.",
    },
    {
      icon: <FaThLarge className="top-feature-icon" />, // JSX icon component
      title: "Interactive Widgets",
      description:
        "Engage users with dynamic, easy-to-integrate content widgets for a seamless experience.",
    },
  ],
};

// src/data/data.jsx

// Import icons
import { FaCogs, FaSearch, FaShareAlt, FaStar } from "react-icons/fa";

export const generateRssFeedsData = {
  title: "Create and Manage RSS Feeds",
  description:
    "Easily turn your favorite websites into auto-updated RSS feeds. The fastest and most reliable RSS generator on the market.",
  features: [
    {
      icon: <FaCogs className="generate-feature-icon" />,
      title: "RSS Feed Generator",
      description:
        "Automatically generate RSS feeds from almost any site using our powerful AI tool.",
    },
    {
      icon: <FaCogs className="generate-feature-icon" />,
      title: "Custom RSS Builder",
      description:
        "Select specific elements to include in your RSS feed for full customization.",
    },
    {
      icon: <FaCode className="generate-feature-icon" />,
      title: "No Coding Required",
      description:
        "Simply input the webpage URL—no coding needed to generate your RSS feed.",
    },
    {
      icon: <FaStar className="generate-feature-icon" />,
      title: "1000+ Supported Sources",
      description:
        "Choose from thousands of popular websites to build your RSS feeds quickly.",
    },
    {
      icon: <FaSearch className="generate-feature-icon" />,
      title: "Advanced RSS Finder",
      description:
        "Easily discover and subscribe to new RSS feeds with our smart RSS Finder.",
    },
    {
      icon: <FaShareAlt className="generate-feature-icon" />,
      title: "Social Media Integration",
      description:
        "Generate feeds from almost any website or social media platform effortlessly.",
    },
  ],
};

// src/data/data.jsx

// Import icons
import { FaBell, FaFilter, FaFolderOpen } from "react-icons/fa";

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

// src/data/data.jsx

// Import icons
import { FaEnvelope, FaFileCsv, FaServer } from "react-icons/fa";

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

// src/data/data.jsx

// Import icons
import { FaPalette } from "react-icons/fa";

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

// src/data/data.jsx

// Import icons
import {
  FaBookReader,
  FaBullhorn,
  FaChartBar,
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

// src/data/data.jsx

export const rssIntegrationsData = {
  title: "Seamless RSS Feed Integrations",
  description:
    "Enhance the power of your RSS feeds by connecting them with your favorite platforms. Effortlessly automate workflows and save time—no coding needed.",
};

// src/data/data.jsx

// Import logos
import HtmlLogo from "../assets/html-logo.jpg";
import ShopifyLogo from "../assets/shopify-logo.png";
import WixLogo from "../assets/wix-logo.png";
import WordPressLogo from "../assets/wordpress-logo.jpg";

export const newsFeedsData = {
  title: "Dynamic News Feeds for Your Website",
  description:
    "Easily add live news feeds to your website with our fully customizable widgets—no coding necessary!",
  features: [
    {
      logo: WixLogo,
      title: "Wix",
      description:
        "Enhance your Wix site with industry-specific content displayed in real-time.",
    },
    {
      logo: ShopifyLogo,
      title: "Shopify",
      description:
        "Showcase the latest blog posts or product-related content directly on your Shopify store.",
    },
    {
      logo: WordPressLogo,
      title: "WordPress",
      description:
        "Keep your visitors engaged with dynamic news widgets embedded on your WordPress site.",
    },
    {
      logo: HtmlLogo,
      title: "HTML",
      description:
        "Easily integrate real-time news widgets into your HTML website for up-to-date content.",
    },
  ],
  buttonText: "Explore Website Integrations",
};

// src/data/data.jsx

// Import icons
import { FaTags } from "react-icons/fa";

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

// src/data/data.jsx

// Import images for the avatars
import IsaacAvatar from "../assets/ann-nahl.png";
import KirilAvatar from "../assets/buzzmoving.png"; // Assuming you have these images

export const testimonialsData = {
  title: "What Our Users Are Saying",
  testimonials: [
    {
      image: KirilAvatar,
      name: "Kiril Gantchev",
      position: "CEO of ST6",
      message:
        "I've tried various RSS feed generators, and RSS.app stood out as the easiest and most efficient. It’s perfect for those who aren’t tech-savvy but need a reliable tool.",
    },
    {
      image: IsaacAvatar,
      name: "Isaac Halvorson",
      position: "iOS Developer at Hisaac",
      message:
        "I've been searching for an app that creates RSS feeds from social media, and RSS.app delivers. Unlike other complex tools, this one is incredibly straightforward and works instantly.",
    },
  ],
};

// src/data/data.jsx

export const callToActionData = {
  title: "Join Thousands of Satisfied Users!",
  buttonText: "Start My First Feed",
  info: ["No credit card needed", "7-day free trial", "Cancel anytime"],
};

// src/data/data.jsx

export const footerLinksData = [
  {
    title: "RSS Feeds",
    links: [
      { name: "Webpage Feeds", url: "/webpage" },
      { name: "Google News Feeds", url: "/google-news" },
      { name: "Instagram Feeds", url: "/instagram" },
    ],
  },
  {
    title: "Widgets",
    links: [
      { name: "RSS to HTML Widget", url: "/rss-to-html" },
      { name: "News Wall Widget", url: "/news-wall" },
      { name: "News Ticker Widget", url: "/news-ticker" },
    ],
  },
  {
    title: "Tools & Features",
    links: [
      { name: "RSS Feed Builder", url: "/rss-builder" },
      { name: "Bots & Alerts Tools", url: "/bots-alerts" },
      { name: "RSS to Email Feature", url: "/rss-to-email" },
    ],
  },
  {
    title: "Bots & Alerts",
    links: [
      { name: "YouTube to Telegram Bot", url: "/youtube-telegram-bot" },
      { name: "Google News to Telegram Bot", url: "/google-news-telegram-bot" },
      { name: "RSS Feed to Telegram Bot", url: "/rss-feed-telegram-bot" },
    ],
  },
  {
    title: "Blog",
    links: [
      { name: "How to Extract RSS Feeds from Websites", url: "/get-rss-feeds" },
      { name: "Top News Aggregators for 2022", url: "/news-aggregators" },
      { name: "RSS to Email: Automate News Delivery", url: "/rss-to-email" },
    ],
  },
];

// src/data/data.jsx

export const footerData = {
  year: "2024",
  name: "ORMDASH.APP",
  links: [
    { name: "Terms & Conditions", url: "/terms" },
    { name: "Privacy Policy", url: "/privacy" },
  ],
  language: "English",
};
