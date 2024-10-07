import {
  FaBars,
  FaChevronDown,
  FaColumns,
  FaDiscord,
  FaEnvelope,
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
  logo: "ReputaionPrime.AI",
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
    { name: "Calender", path: "/calender", hasDropdown: false },
  ],
  dropdownIcon: <FaChevronDown />, // Chevron down icon added
};
