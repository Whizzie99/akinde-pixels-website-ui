import { IconType } from "react-icons";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export interface Testimonial {
  id: number;
  image: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  details: string;
}

export interface footerNavItems {
  id: number;
  name: string;
  link: string;
}

export interface FooterSocial {
  id: number;
  icon: IconType;
  link: string;
}

export interface footerPix {
  id: number;
  image: string;
}

export interface aboutSwiper {
  id: number;
  image: string;
  caption: string;
}

export interface Testimony {
  id: number;
  image: string;
  title: string;
  details: string;
}

export interface faq {
  id: number;
  questions: string;
  answer: string;
}

export interface journal {
  id: number;
  image: string;
  title: string;
  name: string;
}

export interface journalSwiper {
  id: number;
  image: string;
}

export const journalSwipers: journalSwiper[] = [
  {
    id: 1,
    image: "/images/journalpix1.png",
  },

  {
    id: 2,
    image: "/images/journalpix2.png",
  },

  {
    id: 3,
    image: "/images/journalpix3.png",
  },

  {
    id: 4,
    image: "/images/journalpix2.png",
  },

  {
    id: 5,
    image: "/images/journalpix1.png",
  },

  {
    id: 6,
    image: "/images/journalpix3.png",
  },
];

export const journals: journal[] = [
  {
    id: 1,
    image: "/images/journalpix1.png",
    title: "Family Session",
    name: "Mr Ade's Family",
  },

  {
    id: 2,
    image: "/images/journalpix3.png",
    title: "Wedding Session",
    name: "Josh & Mimi",
  },

  {
    id: 3,
    image: "/images/journalpix2.png",
    title: "Birthday Session",
    name: "Jennifer",
  },

  {
    id: 4,
    image: "/images/journalpix1.png",
    title: "Portrait Session",
    name: "Mr Cole's Family",
  },

  {
    id: 5,
    image: "/images/journalpix3.png",
    title: "Wedding Session",
    name: "Josh & Mimi",
  },

  {
    id: 6,
    image: "/images/journalpix2.png",
    title: "Family Session",
    name: "Mr Ade's Family",
  },
];

export const faqs: faq[] = [
  {
    id: 1,
    questions: "How long does it take to receive our photographs?",
    answer:
      "It takes at most 2 weeks to receive your pictures depending on the volume and work to be done on it., you’ll receive a link to your online gallery where you can download your images. If you purchased a USB, that will be mailed to you as well.",
  },
  {
    id: 2,
    questions:
      "What deposit is required? When is my final balance due? Do you accept credit cards?",
    answer:
      "A 40% retainer due upon signing. The final balance is due two weeks before your wedding date. We prefer a check for the balance and we DO NOT accept credit cards.",
  },
  {
    id: 3,
    questions: "Do you travel for weddings?",
    answer:
      "The majority of our weddings take place in the Pennsylvania Area. However, we do travel for weddings and apply mileage fees and travel expenses to the package.",
  },
  {
    id: 4,
    questions: "Do you offer Videography services?",
    answer: "Yes, we offer videography services.",
  },
  {
    id: 5,
    questions: "Is my deposit refundable?",
    answer:
      "Unfortunately, deposits are non-refundable because once you secure a photographer, they turn down work to keep the date for you. However, we have been known to get creative and allow clients to turn their deposit into a credit towards other sessions and products.",
  },
  {
    id: 6,
    questions: "Can we have the RAW images / RAW video?",
    answer:
      "We do not offer raw images or raw video. As we are ultimately judged by the product that we produce, we insist on having quality control over the finished product.",
  },
  {
    id: 7,
    questions: "How long does a portrait session last?",
    answer:
      "Typically, family portraits and engagement sessions are around 60 – 90 minutes in length.",
  },
];

export const testimonies: Testimony[] = [
  {
    id: 1,
    image: "/images/Rectangle 3712.png",
    title: "Mr & Mrs Cole",
    details:
      "The photography service was exceptional. They captured every moment perfectly!",
  },
  {
    id: 2,
    image: "/images/Rectangle 3712 (1).png",
    title: "Jennifer",
    details:
      "I was impressed by their creativity and attention to detail. Highly recommended!",
  },
  {
    id: 3,
    image: "/images/Rectangle 3712 (1).png",
    title: "Taylor",
    details:
      "I was impressed by their creativity and attention to detail. Highly recommended!",
  },

  {
    id: 4,
    image: "/images/Rectangle 3712.png",
    title: "Mr and Mrs Cole",
    details:
      "Thank you for making our day memorable, we love what the brnadd gave us!",
  },
  {
    id: 5,
    image: "/images/Rectangle 3712 (1).png",
    title: "Taylor",
    details:
      "I was impressed by their creativity and attention to detail. Highly recommended!",
  },
  {
    id: 6,
    image: "/images/Rectangle 3712 (1).png",
    title: "Taylor",
    details:
      "I was impressed by their creativity and attention to detail. Highly recommended!",
  },
];

export const aboutSwiper: aboutSwiper[] = [
  {
    id: 1,
    image: "/images/aboutSwiper.png",
    caption: "Weddings",
  },
  {
    id: 2,
    image: "/images/aboutSwiper1.png",
    caption: "Portraits",
  },
  {
    id: 3,
    image: "/images/aboutSwiper2.png",
    caption: "Birthdays",
  },
  {
    id: 4,
    image: "/images/aboutSwiper3.png",
    caption: "Editorials",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "/images/Rectangle 3712.png",
    imageWidth: 400,
    imageHeight: 400,
    title: "Amazing Experience",
    details:
      "The photography service was exceptional. They captured every moment perfectly!",
  },
  {
    id: 2,
    image: "/images/Rectangle 3712 (1).png",
    imageWidth: 400,
    imageHeight: 400,
    title: "Professional and Creative",
    details:
      "I was impressed by their creativity and attention to detail. Highly recommended!",
  },
  {
    id: 3,
    image: "/images/Rectangle 3712.png",
    imageWidth: 400,
    imageHeight: 400,
    title: "Exceeded Expectations",
    details:
      "The photos turned out even better than I imagined. A truly talented team!",
  },
];

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
    link: "/about-us",
  },
  {
    id: 4,
    name: "Testimonies",
    link: "/testimonial",
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

export const footerPix: footerPix[] = [
  {
    id: 1,
    image: "/images/footer-pix.png",
  },
  {
    id: 2,
    image: "/images/footer-pix1.png",
  },
];
