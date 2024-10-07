import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Calender from "./pages/Calender";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* RSS Feeds Paths */}
        <Route path="/rss-feeds" element={<div>RSS Feeds Page</div>} />
        <Route path="/rss-generator" element={<div>RSS Generator Page</div>} />
        <Route path="/rss-builder" element={<div>RSS Builder Page</div>} />
        <Route
          path="/feeds-from-topics"
          element={<div>Feeds from Topics Page</div>}
        />
        <Route
          path="/youtube-rss"
          element={<div>YouTube RSS Feeds Page</div>}
        />
        <Route
          path="/google-news"
          element={<div>Google News Feeds Page</div>}
        />
        <Route
          path="/instagram-rss"
          element={<div>Instagram RSS Feeds Page</div>}
        />
        <Route
          path="/facebook-rss"
          element={<div>Facebook Page RSS Feeds Page</div>}
        />
        <Route path="/tiktok-rss" element={<div>TikTok RSS Feeds Page</div>} />
        <Route
          path="/twitter-rss"
          element={<div>X / Twitter RSS Feeds Page</div>}
        />
        <Route
          path="/telegram-rss"
          element={<div>Telegram RSS Feeds Page</div>}
        />
        <Route
          path="/pinterest-rss"
          element={<div>Pinterest RSS Feeds Page</div>}
        />
        <Route path="/reddit-rss" element={<div>Reddit RSS Feeds Page</div>} />

        {/* RSS Widget Paths */}
        <Route path="/rss-widget" element={<div>RSS Widget Page</div>} />
        <Route path="/news-wall" element={<div>News Wall Page</div>} />
        <Route path="/list" element={<div>List Widget Page</div>} />
        <Route path="/carousel" element={<div>Carousel Widget Page</div>} />
        <Route path="/ticker" element={<div>Ticker Widget Page</div>} />

        {/* Bots Paths */}
        <Route path="/bots" element={<div>Bots Page</div>} />
        <Route
          path="/discord-twitter-bot"
          element={<div>X / Twitter Discord Bot Page</div>}
        />
        <Route
          path="/discord-instagram-bot"
          element={<div>Instagram Discord Bot Page</div>}
        />
        <Route
          path="/discord-rss-feed-bot"
          element={<div>RSS Feed Discord Bot Page</div>}
        />
        <Route
          path="/discord-youtube-bot"
          element={<div>YouTube Discord Bot Page</div>}
        />
        <Route
          path="/discord-tiktok-bot"
          element={<div>TikTok Discord Bot Page</div>}
        />
        <Route
          path="/discord-google-news-bot"
          element={<div>Google News Discord Bot Page</div>}
        />
        <Route
          path="/telegram-twitter-bot"
          element={<div>X / Twitter Telegram Bot Page</div>}
        />
        <Route
          path="/telegram-instagram-bot"
          element={<div>Instagram Telegram Bot Page</div>}
        />
        <Route
          path="/telegram-rss-feed-bot"
          element={<div>RSS Feed Telegram Bot Page</div>}
        />
        <Route
          path="/telegram-youtube-bot"
          element={<div>YouTube Telegram Bot Page</div>}
        />
        <Route
          path="/telegram-tiktok-bot"
          element={<div>TikTok Telegram Bot Page</div>}
        />
        <Route
          path="/telegram-google-news-bot"
          element={<div>Google News Telegram Bot Page</div>}
        />
        <Route
          path="/slack-twitter-bot"
          element={<div>X / Twitter Slack Bot Page</div>}
        />
        <Route
          path="/slack-instagram-bot"
          element={<div>Instagram Slack Bot Page</div>}
        />
        <Route
          path="/slack-rss-feed-bot"
          element={<div>RSS Feed Slack Bot Page</div>}
        />
        <Route
          path="/slack-youtube-bot"
          element={<div>YouTube Slack Bot Page</div>}
        />
        <Route
          path="/slack-tiktok-bot"
          element={<div>TikTok Slack Bot Page</div>}
        />
        <Route
          path="/slack-google-news-bot"
          element={<div>Google News Slack Bot Page</div>}
        />
        <Route
          path="/email-twitter-bot"
          element={<div>X / Twitter Email Bot Page</div>}
        />
        <Route
          path="/email-instagram-bot"
          element={<div>Instagram Email Bot Page</div>}
        />
        <Route
          path="/email-rss-feed-bot"
          element={<div>RSS Feed Email Bot Page</div>}
        />
        <Route
          path="/email-youtube-bot"
          element={<div>YouTube Email Bot Page</div>}
        />
        <Route
          path="/email-tiktok-bot"
          element={<div>TikTok Email Bot Page</div>}
        />
        <Route
          path="/email-google-news-bot"
          element={<div>Google News Email Bot Page</div>}
        />

        {/* Blog and Authentication Pages */}
        <Route path="/blog" element={<div>Blog Page</div>} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/signup" element={<div>Signup Page</div>} />
        <Route path="/calender" element={<Calender />} />
      </Routes>
    </Router>
  );
}

export default App;
