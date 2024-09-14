// src/pages/HomePage.js
import { motion } from "framer-motion"; // Import motion from framer-motion
import React from "react";
import EmbedNewsFeeds from "../components/EmbedNewsFeeds";
import FooterSection from "../components/FooterSection";
import GenerateRssFeeds from "../components/GenerateRssFeeds";
import Header from "../components/Header/Header";
import Hero from "../components/Hero";
import RssUseCasesSection from "../components/RssUseCasesSection";
import RssWidgets from "../components/RssWidgets";
import TopFeaturesSection from "../components/TopFeaturesSection";
import TrustedBySection from "../components/TrustedBySection";
import WhyUseUsSection from "../components/WhyUseUsSection";
import UseCaseSection from "../components/useCaseSection";
import CallToActionSection from "./../components/CallToActionSection";
import FooterLinksSection from "./../components/FooterLinksSection";
import NewsFeedsSection from "./../components/NewsFeedsSection";
import RssIntegrationsSection from "./../components/RssIntegrationsSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import TopRssSourcesSection from "./../components/TopRssSourcesSection";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, staggerChildren: 0.3 }} // Parent motion to stagger the child components
    >
      {/* Header Section */}
      <motion.div
        initial={{ y: -100, opacity: 0, rotate: -10 }} // Rotating effect added
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Header />
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ y: 100, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
      >
        <Hero />
      </motion.div>

      {/* Trusted By Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: "easeInOut",
          delayChildren: 0.5,
        }}
        viewport={{ once: true }}
      >
        <TrustedBySection />
      </motion.div>

      {/* Why Use Us Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.8, rotate: -5 }, // Adding rotation for advanced effect
          visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { delay: 0.9, duration: 1, ease: "easeInOut" },
          },
        }}
      >
        <WhyUseUsSection />
      </motion.div>

      {/* Top Features Section */}
      <motion.div
        initial={{ opacity: 0, x: -100, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <TopFeaturesSection />
      </motion.div>

      {/* Generate RSS Feeds Section */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: 90 }} // Adding 3D rotation effect
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <GenerateRssFeeds />
      </motion.div>

      {/* Embed News Feeds Section */}
      <motion.div
        initial={{ y: 100, opacity: 0, scale: 0.9 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <EmbedNewsFeeds />
      </motion.div>

      {/* Use Case Section */}
      <motion.div
        initial={{ opacity: 0, y: -50, rotateY: -45 }} // 3D rotation on Y axis
        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <UseCaseSection />
      </motion.div>

      {/* RSS Widgets Section */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <RssWidgets />
      </motion.div>

      {/* RSS Use Cases Section */}

      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <RssUseCasesSection />
      </motion.div>

      {/* RSS Integrations Section */}
      <motion.div
        initial={{ opacity: 0, y: -50, rotateZ: -15 }} // Z-axis rotation এবং Y-axis থেকে উপরে আসার effect
        whileInView={{ opacity: 1, y: 0, rotateZ: 0 }} // ভিউপোর্টে আসার পর এলিমেন্টটি সম্পূর্ণ দৃশ্যমান হবে
        transition={{ delay: 0.5, duration: 1 }} // ১ সেকেন্ডের মধ্যে অ্যানিমেশন সম্পন্ন হবে
        viewport={{ once: true }} // এলিমেন্ট একবার ভিউপোর্টে আসলে এটি এনিমেট হবে
      >
        <RssIntegrationsSection />
      </motion.div>

      {/* News Feeds Section */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, x: -100 }}
        whileInView={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <NewsFeedsSection />
      </motion.div>

      {/* Top RSS Sources Section */}
      <motion.div
        initial={{ opacity: 0, x: -100, scale: 0.8, rotate: -10 }} // Rotation with scaling and X-axis movement
        whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <TopRssSourcesSection />
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <TestimonialsSection />
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 100, rotateX: 90 }} // Adding 3D effect with X-axis rotation
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <CallToActionSection />
      </motion.div>

      {/* Footer Links Section */}
      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <FooterLinksSection />
      </motion.div>

      {/* Footer Section */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -15 }} // Footer section with rotation and Y-axis movement
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <FooterSection />
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
