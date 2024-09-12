// src/App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rss-feeds" element={<div>RSS Feeds Page</div>} />
        <Route path="/rss-widget" element={<div>RSS Widget Page</div>} />
        <Route path="/bots" element={<div>Bots Page</div>} />
        <Route path="/blog" element={<div>Blog Page</div>} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/signup" element={<div>Signup Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
