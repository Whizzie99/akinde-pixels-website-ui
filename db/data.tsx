// db/data.ts

export interface Testimonial {
  id: number;
  image: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  details: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    image: '/images/Rectangle 3712.png',
    imageWidth: 400, 
    imageHeight: 400,
    title: "Amazing Experience",
    details: "The photography service was exceptional. They captured every moment perfectly!"
  },
  {
    id: 2,
    image: '/images/Rectangle 3712 (1).png',
    imageWidth: 400, 
    imageHeight: 400, 
    title: "Professional and Creative",
    details: "I was impressed by their creativity and attention to detail. Highly recommended!"
  },
  {
    id: 3,
    image: '/images/Rectangle 3712.png',
    imageWidth: 400,
    imageHeight: 400,
    title: "Exceeded Expectations",
    details: "The photos turned out even better than I imagined. A truly talented team!"
  }
];

export interface footerNavItems {
  id: number;
  name: string;
  link: string;
}

export const footerNav: footerNavItems[] = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    id: 3,
    name: "About Us",
    link: "/about",
  },
  {
    id: 4,
    name: "Testimonies",
    link: "/testimonies",
  },
  {
    id: 5,
    name: "FAQ",
    link: "/faq",
  },
  {
    id: 6,
    name: "Privacy Policy",
    link: "/privacy-policy",
  },

  {
    id: 7,
    name: "Journals",
    link: "/journals",
  },

  {
    id: 8,
    name: "Contact Us",
    link: "/contact",
  },
  
];


import { ReactNode } from "react";
import { IconType } from "react-icons";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export interface FooterSocial {
  id: number;
  icon: IconType; 
  link: string;
}

export const footerSocials: FooterSocial[] = [
  {
    id: 1,
    icon: FaFacebookF, 
    link: "https://www.facebook.com/akinde.pixels",
  },
  {
    id: 2,
    icon: FaInstagram,
    link: "https://www.instagram.com/akinde.pixels",
  },
  {
    id: 3,
    icon: FaTwitter,
    link: "https://www.twitter.com/akinde.pixels",
  },
];

export interface footerPix {
  id: number;
  image: string;
}

export const footerPix: footerPix[] = [
  {
    id: 1,
    image: "/images/footer-pix.png",
  },
  {
    id: 2,
    image: "/images/footer-pix1.png",
  },
]
