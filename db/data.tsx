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

export interface GalleryImage {
  id: number;
  url: string;
  height: number;
  category: string;
  alt: string;
}

export interface aboutSwiper {
  id: number;
  image: string;
  caption: string;
  galleryImages: GalleryImage[];
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
    galleryImages: [
      {
        id: 101,
        url: "/images/wedding9.png",
        height: 100,
        category: "Weddings",
        alt: "Bride and groom ceremony",
      },
      {
        id: 102,
        url: "/images/wedding1.png",
        height: 600,
        category: "Weddings",
        alt: "Wedding reception",
      },
      {
        id: 103,
        url: "/images/wedding10.png",
        height: 200,
        category: "Weddings",
        alt: "Wedding decorations",
      },

      {
        id: 104,
        url: "/images/wedding11.png",
        height: 300,
        category: "Weddings",
        alt: "Wedding decorations",
      },

      {
        id: 105,
        url: "/images/wedding8.png",
        height: 300,
        category: "Weddings",
        alt: "Wedding decorations",
      },

      {
        id: 106,
        url: "/images/wedding7.png",
        height: 300,
        category: "Weddings",
        alt: "Wedding decorations",
      },
      {
        id: 107,
        url: "/images/wedding5.png",
        height: 300,
        category: "Weddings",
        alt: "Wedding decorations",
      },

      {
        id: 108,
        url: "/images/wedding14.png",
        height: 300,
        category: "Weddings",
        alt: "Wedding decorations",
      },
      {
        id: 109,
        url: "/images/wedding12.png",
        height: 300,
        category: "Weddings",
        alt: "Wedding decorations",
      },
      {
        id: 110,
        url: "/images/wedding3.png",
        height: 300,
        category: "Weddings",
        alt: "Wedding decorations",
      },
      {
        id: 111,
        url: "/images/wedding11.png",
        height: 300,
        category: "Weddings",
        alt: "Wedding decorations",
      },
      {
        id: 112,
        url: "/images/wedding6.png",
        height: 300,
        category: "Weddings",
        alt: "Wedding decorations",
      },
      {
        id: 113,
        url: "/images/wedding.png",
        height: 300,
        category: "Weddings",
        alt: "Wedding decorations",
      },
    ],
  },
  {
    id: 2,
    image: "/images/aboutSwiper1.png",
    caption: "Portraits",
    galleryImages: [
      {
        id: 201,
        url: "/images/portrait1.jpg",
        height: 500,
        category: "Portraits",
        alt: "Professional headshot",
      },
      {
        id: 202,
        url: "/images/portrait2.jpg",
        height: 350,
        category: "Portraits",
        alt: "Family portrait",
      },
      {
        id: 203,
        url: "/images/portrait.jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
      {
        id: 204,
        url: "/images/portrait3.jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
      {
        id: 205,
        url: "/images/portrait10.jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
      {
        id: 206,
        url: "/images/portrait4.jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
      {
        id: 207,
        url: "/images/portrait5.jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
      {
        id: 208,
        url: "/images/portrait6.jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
      {
        id: 209,
        url: "/images/portrait7.jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
      {
        id: 210,
        url: "/images/portrait9.jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
      {
        id: 211,
        url: "/images/portrait11.jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
    ],
  },
  {
    id: 3,
    image: "/images/aboutSwiper2.png",
    caption: "Birthdays",
    galleryImages: [
      {
        id: 301,
        url: "/images/birthday.jpg",
        height: 500,
        category: "Portraits",
        alt: "Professional headshot",
      },
      {
        id: 302,
        url: "/images/birthday (1).jpg",
        height: 350,
        category: "Portraits",
        alt: "Family portrait",
      },
      {
        id: 303,
        url: "/images/birthday (2).jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
      {
        id: 304,
        url: "/images/birthday (3).jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
      {
        id: 305,
        url: "/images/birthday (4).jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
      {
        id: 306,
        url: "/images/birthday (5).jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
      {
        id: 307,
        url: "/images/birthday (7).jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
      {
        id: 308,
        url: "/images/birthday (6).jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
      {
        id: 309,
        url: "/images/portrait3.jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
      {
        id: 310,
        url: "/images/portrait.jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
    ],
  },
  {
    id: 4,
    image: "/images/aboutSwiper3.png",
    caption: "Editorials",
    galleryImages: [
      {
        id: 401,
        url: "/images/portrait1.jpg",
        height: 500,
        category: "Portraits",
        alt: "Professional headshot",
      },
      {
        id: 402,
        url: "/images/portrait2.jpg",
        height: 350,
        category: "Portraits",
        alt: "Family portrait",
      },
      {
        id: 403,
        url: "/images/portrait3.jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
      {
        id: 404,
        url: "/images/portrait11.jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
      {
        id: 405,
        url: "/images/portrait.jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
      {
        id: 406,
        url: "/images/portrait10.jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
      {
        id: 407,
        url: "/images/portrait3.jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
      {
        id: 408,
        url: "/images/portrait8.jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
      {
        id: 409,
        url: "/images/portrait9.jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
      {
        id: 410,
        url: "/images/portrait4.jpg",
        height: 450,
        category: "Portraits",
        alt: "Artistic portrait",
      },
    ],
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
    link: "#",
  },
  {
    id: 8,
    name: "Read Reviews",
    link: "/read-reviews",
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
