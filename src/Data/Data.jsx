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

import { FaChevronDown, FaRss } from "react-icons/fa"; // RSS icon for logo

export const headerData = {
  logo: "ORMDASH.APP",
  logoIcon: <FaRss />, // RSS icon added
  navLinks: [
    { name: "RSS Feeds", path: "/rss-feeds", hasDropdown: true },
    { name: "RSS Widget", path: "/rss-widget", hasDropdown: true },
    { name: "Bots", path: "/bots", hasDropdown: true },
    { name: "Blog", path: "/blog", hasDropdown: false },
    { name: "Log In", path: "/login", hasDropdown: false },
    { name: "Sign Up", path: "/signup", hasDropdown: false },
  ],
  dropdownIcon: <FaChevronDown />, // Chevron down icon added
};

export const heroData = {
  title: "The #1 Source of RSS Feeds",
  subtitle: "Connect with Information You Care About",
  description: "Get RSS Feeds from almost any webpage",
  buttonText: "Get Started Now",
  stats: {
    info: "Instantly generate RSS feeds from any URL",
    users: "+2,693",
    newUsers: "New Users Joined Last Week",
  },
};

// Trusted by section data
// src/data/data.jsx

// Import the images first
import HubSpotLogo from "../assets/ann-nahl.png";
import MicrosoftLogo from "../assets/buzzmoving.png";
import OhioUniversityLogo from "../assets/netreputation.png";

// Trusted by section data
export const trustedByData = {
  title: "Trusted and used by thousands of companies",
  companies: [
    { name: "Ohio University", logo: OhioUniversityLogo },
    { name: "Microsoft", logo: MicrosoftLogo },
    { name: "HubSpot", logo: HubSpotLogo },
  ],
};

// src/data/data.jsx

// src/data/data.jsx

// Import icons
import { FaBolt, FaHeart, FaNewspaper } from "react-icons/fa";

export const whyUseUsData = {
  title: "3 Reasons Why You Should Use Our Service",
  reasons: [
    {
      icon: <FaBolt className="why-use-us-icon" />, // JSX icon component
      title: "Generate RSS Feeds",
      description:
        "No coding required. Our feed generator can pick the right content for you.",
    },
    {
      icon: <FaNewspaper className="why-use-us-icon" />, // JSX icon component
      title: "Embed News Feeds",
      description:
        "Add auto-updated dynamic content to your website or mobile app.",
    },
    {
      icon: <FaHeart className="why-use-us-icon" />, // JSX icon component
      title: "Increase Engagement",
      description:
        "Syndicate your content and make it easy for users to access and consume your content.",
    },
  ],
};

// src/data/data.jsx

// Import required icons
import { FaCode, FaImage, FaSyncAlt, FaThLarge } from "react-icons/fa";

export const topFeaturesData = {
  title: "Top Features",
  features: [
    {
      icon: <FaCode className="top-feature-icon" />, // JSX icon component
      title: "No Coding",
      description:
        "Simply copy and paste the URL into the feed generator or RSS builder.",
    },
    {
      icon: <FaImage className="top-feature-icon" />, // JSX icon component
      title: "Customization",
      description:
        "Extract large images & customize your feed with advanced filters.",
    },
    {
      icon: <FaSyncAlt className="top-feature-icon" />, // JSX icon component
      title: "Auto-updated",
      description:
        "The feed will update automatically, so you never miss any updates.",
    },
    {
      icon: <FaThLarge className="top-feature-icon" />, // JSX icon component
      title: "Dynamic Widgets",
      description:
        "Bring content to your users with adaptive and simple widgets.",
    },
  ],
};

// src/data/data.jsx

// Import icons
import { FaCogs, FaSearch, FaShareAlt, FaStar } from "react-icons/fa"; // Use FaShareAlt for social media icon

export const generateRssFeedsData = {
  title: "Generate RSS Feeds",
  description:
    "Aggregate and curate your favorite websites by turning them into auto-updated RSS feeds. Fastest RSS finder and creator on the market.",
  features: [
    {
      icon: <FaCogs className="generate-feature-icon" />,
      title: "RSS Generator",
      description:
        "Generate a feed from almost any website using our advanced AI.",
    },
    {
      icon: <FaCogs className="generate-feature-icon" />,
      title: "RSS Builder",
      description:
        "Manually select the elements you want to include in your RSS feed.",
    },
    {
      icon: <FaCode className="generate-feature-icon" />,
      title: "No Coding",
      description:
        "Coding not required! Just enter the webpage URL to get your RSS feed.",
    },
    {
      icon: <FaStar className="generate-feature-icon" />,
      title: "1000+ Sources",
      description:
        "Support for thousands of popular websites to create your RSS feed from.",
    },
    {
      icon: <FaSearch className="generate-feature-icon" />,
      title: "RSS Finder",
      description:
        "Discover and subscribe to new RSS feeds with our advanced RSS Finder.",
    },
    {
      icon: <FaShareAlt className="generate-feature-icon" />, // Replace with FaShareAlt
      title: "Social Media",
      description:
        "Get new content from almost any website or social media with our feed generator.",
    },
  ],
};

// src/data/data.jsx

// Import icons
import { FaBell, FaFilter, FaFolderOpen } from "react-icons/fa";

export const embedNewsFeedsData = {
  title: "Embed News Feeds",
  description:
    "Take control of your content using our cloud based all-in-one news feeds solution. Easily embed dynamic content on your website.",
  features: [
    {
      icon: <FaRss className="embed-feature-icon" />,
      title: "News Feeds",
      description:
        "Dynamically updated news feeds at the tips of your fingers.",
    },
    {
      icon: <FaCogs className="embed-feature-icon" />,
      title: "Bundles",
      description: "Easily bundle multiple feeds into one super feed.",
    },
    {
      icon: <FaFolderOpen className="embed-feature-icon" />,
      title: "Collections",
      description:
        "Curate and collect individual posts to create your unique feed.",
    },
    {
      icon: <FaFilter className="embed-feature-icon" />,
      title: "Filters",
      description: "Stay focused on your content using our advanced filters.",
    },
    {
      icon: <FaBell className="embed-feature-icon" />,
      title: "Alerts",
      description:
        "Send the latest posts straight to your email or auto-post to telegram or slack.",
    },
    {
      icon: <FaThLarge className="embed-feature-icon" />,
      title: "Widgets",
      description: "Choose from a variety of widgets to embed on your website.",
    },
  ],
};

// src/data/data.jsx

// Import icons
import { FaEnvelope, FaFileCsv, FaServer } from "react-icons/fa";

export const useCaseData = {
  title: "The easiest way to generate and consume RSS Feeds",
  description:
    "Tools designed to simplify the creation and management of RSS feeds. For beginners and professionals.",
  features: [
    {
      icon: <FaCode className="use-case-icon" />,
      title: "RSS to JSON",
      description:
        "JSON can be easily parsed and integrated into a website or app.",
    },
    {
      icon: <FaEnvelope className="use-case-icon" />,
      title: "RSS to Email",
      description:
        "Receive a daily email of the newest posts in your RSS feed.",
    },
    {
      icon: <FaFileCsv className="use-case-icon" />,
      title: "RSS to CSV",
      description: "Easily extract and analyze data from multiple RSS feeds.",
    },
    {
      icon: <FaServer className="use-case-icon" />,
      title: "RSS API",
      description:
        "Build applications that utilize RSS feeds programmatically.",
    },
  ],
};

// src/data/data.jsx

// Import icons
import { FaPalette } from "react-icons/fa";

export const rssWidgetsData = {
  title: "RSS Widgets for Your Website",
  description:
    "Widgets are easy to embed and can be customized to fit the look and feel of your website.",
  features: [
    {
      icon: <FaCogs className="rss-widgets-icon" />,
      title: "Customize Widgets",
      description:
        "Improve user experience and increase engagement with customizable RSS widgets.",
    },
    {
      icon: <FaPalette className="rss-widgets-icon" />,
      title: "Create Presets",
      description:
        "Save customized widgets as presets and quickly apply the style you wish to use.",
    },
    {
      icon: <FaThLarge className="rss-widgets-icon" />,
      title: "RSS Widgets",
      description:
        "7 RSS Widgets: Wall, List, Carousel, Imageboard, Ticker, Magazine and Feed.",
    },
    {
      icon: <FaCode className="rss-widgets-icon" />,
      title: "Apply Custom CSS",
      description:
        "Add advanced styles to the widgets by applying custom CSS styles.",
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
  title: "How are RSS Feeds used?",
  description:
    "RSS feeds are a convenient way to stay up to date with the latest news and content from your favorite websites. Here are some common use cases for RSS feeds.",
  useCases: [
    {
      icon: <FaListAlt className="rss-use-case-icon" />,
      title: "News Aggregation",
      description:
        "One of the most popular uses of RSS feeds is to aggregate news from multiple sources into a single feed.",
    },
    {
      icon: <FaBookReader className="rss-use-case-icon" />,
      title: "Personalized Content",
      description:
        "Many websites offer RSS feeds for specific topics or categories to help you get relevant and up-to-date content.",
    },
    {
      icon: <FaFileAlt className="rss-use-case-icon" />,
      title: "Research and Monitoring",
      description:
        "By subscribing to RSS feeds from industry blogs, news sources, and social media, you can follow the latest trends in your field.",
    },
    {
      icon: <FaPodcast className="rss-use-case-icon" />,
      title: "Podcasts and Video",
      description:
        "RSS feeds can also be used to subscribe to podcasts and video feeds. And also use for your channel or podcast.",
    },
    {
      icon: <FaBullhorn className="rss-use-case-icon" />,
      title: "Content Marketing",
      description:
        "For their blog or website, they can make it easy for readers to subscribe to updates and receive new content after publication.",
    },
    {
      icon: <FaChartBar className="rss-use-case-icon" />,
      title: "Competitive Intelligence",
      description:
        "Businesses can use RSS feeds to monitor their competitors' websites and social media profiles for updates and news.",
    },
    {
      icon: <FaEnvelope className="rss-use-case-icon" />,
      title: "Customer Service",
      description:
        "Businesses use RSS feeds to monitor social media channels and customer review websites for mentions of their brand.",
    },
    {
      icon: <FaEnvelope className="rss-use-case-icon" />,
      title: "Internal Communications",
      description:
        "Share internal company news and updates with your team and coworkers.",
    },
    {
      icon: <FaStoreAlt className="rss-use-case-icon" />,
      title: "E-commerce",
      description:
        "Notify customers of new products or promotions with RSS feeds.",
    },
  ],
};

// src/data/data.jsx

export const rssIntegrationsData = {
  title: "RSS Feed Integrations",
  description:
    "Make your RSS feed work better by integrating with your favorite platforms. Save time by connecting your tools together. No coding required.",
};

// src/data/data.jsx

// Import logos
import HtmlLogo from "../assets/html-logo.jpg";
import ShopifyLogo from "../assets/shopify-logo.png";
import WixLogo from "../assets/wix-logo.png";
import WordPressLogo from "../assets/wordpress-logo.jpg";

export const newsFeedsData = {
  title: "News Feeds For Your Website",
  description:
    "Add dynamic news feeds to your website using our customizable widgets. No coding required!",
  features: [
    {
      logo: WixLogo,
      title: "Wix",
      description:
        "Display content related to your industry on your Wix website.",
    },
    {
      logo: ShopifyLogo,
      title: "Shopify",
      description:
        "Showcase the latest content related to your products or blog posts on your Shopify store.",
    },
    {
      logo: WordPressLogo,
      title: "WordPress",
      description:
        "Embed news widgets on your WordPress website that keep your visitors engaged and informed.",
    },
    {
      logo: HtmlLogo,
      title: "HTML",
      description:
        "Embed news widgets on your HTML website to showcase the latest news and updates.",
    },
  ],
  buttonText: "Website Integrations",
};

// src/data/data.jsx

// Import icons
import {
  FaGoogle,
  FaTags,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const topRssSourcesData = {
  title: "Top RSS Sources",
  description:
    "Get the latest news and updates from top sources with RSS feeds. Stay informed on world events, technology, business, and more.",
  sources: [
    {
      icon: <FaRss className="top-rss-sources-icon" />,
      title: "Web to RSS",
      description:
        "Web to RSS keeps you updated on the latest news and updates from websites that don't offer RSS feeds.",
    },
    {
      icon: <FaGoogle className="top-rss-sources-icon" />,
      title: "Google News",
      description:
        "Google News provides RSS feeds for a variety of categories such as world news, business, technology, and more.",
    },
    {
      icon: <FaTwitter className="top-rss-sources-icon" />,
      title: "X / Twitter",
      description:
        "Offers a X / Twitter RSS feed generator that allows you to create feeds for individual users or specific keywords.",
    },
    {
      icon: <FaYoutube className="top-rss-sources-icon" />,
      title: "YouTube",
      description:
        "YouTube provides RSS feeds for channels, allowing users to receive updates on new video uploads.",
    },
    {
      icon: <FaTiktok className="top-rss-sources-icon" />,
      title: "TikTok",
      description:
        "Provides a TikTok RSS feed generator that allows you to create feeds for a specific TikTok user or search term.",
    },
    {
      icon: <FaTags className="top-rss-sources-icon" />,
      title: "Topics and Keywords",
      description:
        "Create your own RSS feeds based on keywords or topics and receive updates every time new content is published.",
    },
  ],
};

// src/data/data.jsx

// Import images for the avatars
import IsaacAvatar from "../assets/ann-nahl.png";
import KirilAvatar from "../assets/buzzmoving.png"; // Assuming you have these images

export const testimonialsData = {
  title: "Read What Our Users Say",
  testimonials: [
    {
      image: KirilAvatar,
      name: "Kiril Gantchev",
      position: "CEO of ST6",
      message:
        "I tried several RSS feed generators and the one that worked best, aside from being the simplest, was RSS.app. It's great how useful the tool can be for somebody that doesn't know how to code.",
    },
    {
      image: IsaacAvatar,
      name: "Isaac Halvorson",
      position: "iOS Developer Hisaac",
      message:
        "I've long wanted an app that generates RSS feeds from social media sites, and while there are other options that do it (IFTTT, Zapier, etc.), this is the first one that is dead simple, and works out of the box.",
    },
  ],
};

// src/data/data.jsx

export const callToActionData = {
  title: "Join thousands of happy users!",
  buttonText: "Get My First Feed",
  info: ["No credit card required", "7-day free trial", "Cancel anytime"],
};

// src/data/data.jsx

export const footerLinksData = [
  {
    title: "RSS Feeds",
    links: [
      { name: "Webpage", url: "/webpage" },
      { name: "Google News", url: "/google-news" },
      { name: "Instagram", url: "/instagram" },
    ],
  },
  {
    title: "Widgets",
    links: [
      { name: "RSS to HTML", url: "/rss-to-html" },
      { name: "News Wall", url: "/news-wall" },
      { name: "News Ticker", url: "/news-ticker" },
    ],
  },
  {
    title: "Tools & Features",
    links: [
      { name: "RSS Builder", url: "/rss-builder" },
      { name: "Bots & Alerts", url: "/bots-alerts" },
      { name: "RSS to Email", url: "/rss-to-email" },
    ],
  },
  {
    title: "Bots & Alerts",
    links: [
      { name: "YouTube Telegram Bot", url: "/youtube-telegram-bot" },
      { name: "Google News Telegram Bot", url: "/google-news-telegram-bot" },
      { name: "RSS Feed Telegram Bot", url: "/rss-feed-telegram-bot" },
    ],
  },
  {
    title: "Blog",
    links: [
      { name: "How to Get RSS Feeds From Websites", url: "/get-rss-feeds" },
      { name: "The Best News Aggregators in 2022", url: "/news-aggregators" },
      { name: "RSS to Email: Automatically Send News", url: "/rss-to-email" },
    ],
  },
];

// src/data/data.jsx

// src/data/data.jsx

export const footerData = {
  year: "2024",
  name: "ORMDASH.APP",
  links: [
    { name: "Terms & Conditions", url: "/terms" },
    { name: "Privacy", url: "/privacy" },
  ],
  language: "English",
};
