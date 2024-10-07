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
