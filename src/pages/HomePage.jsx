// src/pages/HomePage.js
import { motion } from "framer-motion";
import React from "react";
import {
  fadeInLeft,
  fadeInUp,
  rotateIn,
  rotateX3D,
  rotateY3D,
  rotateZUp,
  scaleInLeft,
  scaleUp,
  scaleUpRight,
} from "../components/AnimationVariants/animationVariants"; // Importing animation variants

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
      transition={{ duration: 1, staggerChildren: 0.3 }}
    >
      {/* Header Section */}
      <motion.div {...rotateIn}>
        <Header />
      </motion.div>

      {/* Hero Section */}
      <motion.div {...fadeInUp}>
        <Hero />
      </motion.div>

      {/* Trusted By Section */}
      <motion.div {...scaleUp}>
        <TrustedBySection />
      </motion.div>

      {/* Why Use Us Section */}
      <motion.div {...scaleUp}>
        <WhyUseUsSection />
      </motion.div>

      {/* Top Features Section */}
      <motion.div {...fadeInLeft}>
        <TopFeaturesSection />
      </motion.div>

      {/* Generate RSS Feeds Section */}
      <motion.div {...rotateY3D}>
        <GenerateRssFeeds />
      </motion.div>

      {/* Embed News Feeds Section */}
      <motion.div {...scaleUp}>
        <EmbedNewsFeeds />
      </motion.div>

      {/* Use Case Section */}
      <motion.div {...rotateY3D}>
        <UseCaseSection />
      </motion.div>

      {/* RSS Widgets Section */}
      <motion.div {...scaleUp}>
        <RssWidgets />
      </motion.div>

      {/* RSS Use Cases Section */}
      <motion.div {...scaleUpRight}>
        <RssUseCasesSection />
      </motion.div>

      {/* RSS Integrations Section */}
      <motion.div {...rotateZUp}>
        <RssIntegrationsSection />
      </motion.div>

      {/* News Feeds Section */}
      <motion.div {...fadeInLeft}>
        <NewsFeedsSection />
      </motion.div>

      {/* Top RSS Sources Section */}
      <motion.div {...scaleInLeft}>
        <TopRssSourcesSection />
      </motion.div>

      {/* Testimonials Section */}
      <motion.div {...scaleUp}>
        <TestimonialsSection />
      </motion.div>

      {/* Call to Action Section */}
      <motion.div {...rotateX3D}>
        <CallToActionSection />
      </motion.div>

      {/* Footer Links Section */}
      <motion.div {...scaleUpRight}>
        <FooterLinksSection />
      </motion.div>

      {/* Footer Section */}
      <motion.div {...rotateIn}>
        <FooterSection />
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
