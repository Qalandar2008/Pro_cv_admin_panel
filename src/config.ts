// =============================================================================
// Professional CV Admin Panel Configuration
// Edit ONLY this file to customize all content across the site.
// All animations, layouts, and styles are controlled by the components.
// =============================================================================

// -- Site-wide settings -------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Alex Chen | Senior Full-Stack Developer",
  description: "Professional portfolio of Alex Chen - Senior Full-Stack Developer specializing in React, TypeScript, Node.js, and Cloud Architecture",
  language: "en",
};

// -- Hero Section -------------------------------------------------------------
export interface HeroNavItem {
  label: string;
  sectionId: string;
  icon: "disc" | "play" | "calendar" | "music";
}

export interface HeroConfig {
  backgroundImage: string;
  brandName: string;
  decodeText: string;
  decodeChars: string;
  subtitle: string;
  ctaPrimary: string;
  ctaPrimaryTarget: string;
  ctaSecondary: string;
  ctaSecondaryTarget: string;
  cornerLabel: string;
  cornerDetail: string;
  navItems: HeroNavItem[];
}

export const heroConfig: HeroConfig = {
  backgroundImage: "/hero-bg.jpg",
  brandName: "ALEX.CHEN",
  decodeText: "FULL-STACK",
  decodeChars: "<>{}[];/\\|",
  subtitle: "Building scalable web applications with modern technologies. Passionate about clean code, user experience, and innovative solutions.",
  ctaPrimary: "View Projects",
  ctaPrimaryTarget: "gallery",
  ctaSecondary: "Contact Me",
  ctaSecondaryTarget: "contact",
  cornerLabel: "Available For",
  cornerDetail: "Freelance & Full-Time",
  navItems: [
    { label: "Skills", sectionId: "albums", icon: "disc" },
    { label: "Projects", sectionId: "gallery", icon: "play" },
    { label: "Experience", sectionId: "tour", icon: "calendar" },
    { label: "Contact", sectionId: "contact", icon: "music" },
  ],
};

// -- Skills Cube Section -------------------------------------------------------
export interface Album {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export interface AlbumCubeConfig {
  albums: Album[];
  cubeTextures: string[];
  scrollHint: string;
}

export const albumCubeConfig: AlbumCubeConfig = {
  albums: [
    {
      id: 1,
      title: "REACT",
      subtitle: "FRONTEND",
      image: "/skill-react.jpg",
    },
    {
      id: 2,
      title: "TYPESCRIPT",
      subtitle: "TYPING",
      image: "/skill-ts.jpg",
    },
    {
      id: 3,
      title: "NODE.JS",
      subtitle: "BACKEND",
      image: "/skill-node.jpg",
    },
    {
      id: 4,
      title: "CLOUD",
      subtitle: "DEVOPS",
      image: "/skill-cloud.jpg",
    },
  ],
  cubeTextures: [
    "/skill-react.jpg",
    "/skill-ts.jpg",
    "/skill-cloud.jpg",
    "/skill-design.jpg",
    "/skill-node.jpg",
    "/skill-data.jpg",
  ],
  scrollHint: "Scroll to explore skills",
};

// -- Portfolio Gallery Section -------------------------------------------------
export interface ParallaxImage {
  id: number;
  src: string;
  alt: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  date: string;
}

export interface ParallaxGalleryConfig {
  sectionLabel: string;
  sectionTitle: string;
  galleryLabel: string;
  galleryTitle: string;
  marqueeTexts: string[];
  endCtaText: string;
  parallaxImagesTop: ParallaxImage[];
  parallaxImagesBottom: ParallaxImage[];
  galleryImages: GalleryImage[];
}

export const parallaxGalleryConfig: ParallaxGalleryConfig = {
  sectionLabel: "Portfolio",
  sectionTitle: "FEATURED PROJECTS",
  galleryLabel: "Selected Work",
  galleryTitle: "RECENT DELIVERIES",
  marqueeTexts: [
    "REACT • TYPESCRIPT • NODE.JS •",
    "AWS • DOCKER • KUBERNETES •",
    "POSTGRESQL • MONGODB • REDIS •",
    "GRAPHQL • REST API • WEBSOCKET •",
  ],
  endCtaText: "Let's Build Something Amazing Together",
  parallaxImagesTop: [
    { id: 1, src: "/project-1.jpg", alt: "Analytics Dashboard" },
    { id: 2, src: "/project-2.jpg", alt: "E-commerce Platform" },
    { id: 3, src: "/project-3.jpg", alt: "Fitness App" },
    { id: 4, src: "/project-1.jpg", alt: "Analytics Dashboard" },
    { id: 5, src: "/project-2.jpg", alt: "E-commerce Platform" },
    { id: 6, src: "/project-3.jpg", alt: "Fitness App" },
  ],
  parallaxImagesBottom: [
    { id: 1, src: "/project-4.jpg", alt: "AI Chatbot" },
    { id: 2, src: "/project-5.jpg", alt: "Real Estate Platform" },
    { id: 3, src: "/project-6.jpg", alt: "Crypto Dashboard" },
    { id: 4, src: "/project-4.jpg", alt: "AI Chatbot" },
    { id: 5, src: "/project-5.jpg", alt: "Real Estate Platform" },
    { id: 6, src: "/project-6.jpg", alt: "Crypto Dashboard" },
  ],
  galleryImages: [
    { id: 1, src: "/project-1.jpg", title: "Pulsar Analytics", date: "2024" },
    { id: 2, src: "/project-2.jpg", title: "ShopFlow Pro", date: "2024" },
    { id: 3, src: "/project-3.jpg", title: "FitTrack Mobile", date: "2023" },
    { id: 4, src: "/project-4.jpg", title: "AI Assistant", date: "2023" },
    { id: 5, src: "/project-5.jpg", title: "HomeSync", date: "2022" },
    { id: 6, src: "/project-6.jpg", title: "CryptoVault", date: "2022" },
  ],
};

// -- Work Experience Section ---------------------------------------------------
export interface TourDate {
  id: number;
  date: string;
  time: string;
  city: string;
  venue: string;
  status: "on-sale" | "sold-out" | "coming-soon";
  image: string;
}

export interface TourStatusLabels {
  onSale: string;
  soldOut: string;
  comingSoon: string;
  default: string;
}

export interface TourScheduleConfig {
  sectionLabel: string;
  sectionTitle: string;
  vinylImage: string;
  buyButtonText: string;
  detailsButtonText: string;
  bottomNote: string;
  bottomCtaText: string;
  statusLabels: TourStatusLabels;
  tourDates: TourDate[];
}

export const tourScheduleConfig: TourScheduleConfig = {
  sectionLabel: "Career Path",
  sectionTitle: "WORK EXPERIENCE",
  vinylImage: "/timeline-disc.png",
  buyButtonText: "View Details",
  detailsButtonText: "Learn More",
  bottomNote: "Open to new opportunities and collaborations",
  bottomCtaText: "Download Resume",
  statusLabels: {
    onSale: "Current",
    soldOut: "Completed",
    comingSoon: "Upcoming",
    default: "View",
  },
  tourDates: [
    {
      id: 1,
      date: "2022.03",
      time: "Present",
      city: "TechCorp Inc.",
      venue: "Senior Full-Stack Developer",
      status: "on-sale",
      image: "/company-1.jpg",
    },
    {
      id: 2,
      date: "2020.06",
      time: "2022.02",
      city: "StartupXYZ",
      venue: "Full-Stack Developer",
      status: "sold-out",
      image: "/company-2.jpg",
    },
    {
      id: 3,
      date: "2018.09",
      time: "2020.05",
      city: "Enterprise Solutions",
      venue: "Frontend Developer",
      status: "sold-out",
      image: "/company-3.jpg",
    },
    {
      id: 4,
      date: "2017.01",
      time: "2018.08",
      city: "Creative Agency",
      venue: "Junior Developer",
      status: "sold-out",
      image: "/company-4.jpg",
    },
  ],
};

// -- Footer Section -----------------------------------------------------------
export interface FooterImage {
  id: number;
  src: string;
}

export interface SocialLink {
  icon: "instagram" | "twitter" | "youtube" | "music";
  label: string;
  href: string;
}

export interface FooterConfig {
  portraitImage: string;
  portraitAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  artistLabel: string;
  artistName: string;
  artistSubtitle: string;
  brandName: string;
  brandDescription: string;
  quickLinksTitle: string;
  quickLinks: string[];
  contactTitle: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  addressLabel: string;
  address: string;
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  subscribeAlertMessage: string;
  copyrightText: string;
  bottomLinks: string[];
  socialLinks: SocialLink[];
  galleryImages: FooterImage[];
}

export const footerConfig: FooterConfig = {
  portraitImage: "/profile-portrait.jpg",
  portraitAlt: "Alex Chen - Professional Portrait",
  heroTitle: "LET'S CONNECT",
  heroSubtitle: "Ready to bring your ideas to life",
  artistLabel: "Developer",
  artistName: "ALEX CHEN",
  artistSubtitle: "Full-Stack Developer & UI/UX Enthusiast",
  brandName: "ALEX.CHEN",
  brandDescription: "Passionate about creating elegant, efficient, and user-centric web applications. With 7+ years of experience in full-stack development, I help businesses transform their digital presence.",
  quickLinksTitle: "Quick Links",
  quickLinks: ["Home", "Skills", "Projects", "Experience", "Contact"],
  contactTitle: "Get In Touch",
  emailLabel: "Email",
  email: "alex.chen@developer.com",
  phoneLabel: "Phone",
  phone: "+1 (555) 123-4567",
  addressLabel: "Location",
  address: "San Francisco, CA",
  newsletterTitle: "Stay Updated",
  newsletterDescription: "Subscribe to receive updates on new projects and tech insights.",
  newsletterButtonText: "Subscribe",
  subscribeAlertMessage: "Thanks for subscribing! You'll receive updates soon.",
  copyrightText: "© 2024 Alex Chen. All rights reserved.",
  bottomLinks: ["Privacy Policy", "Terms of Service"],
  socialLinks: [
    { icon: "twitter", label: "Twitter", href: "https://twitter.com/alexchen" },
    { icon: "instagram", label: "LinkedIn", href: "https://linkedin.com/in/alexchen" },
    { icon: "youtube", label: "GitHub", href: "https://github.com/alexchen" },
    { icon: "music", label: "Dribbble", href: "https://dribbble.com/alexchen" },
  ],
  galleryImages: [
    { id: 1, src: "/project-1.jpg" },
    { id: 2, src: "/project-2.jpg" },
    { id: 3, src: "/project-3.jpg" },
    { id: 4, src: "/project-4.jpg" },
  ],
};
