/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "@/lib/contentful";

export const getTopCarouselItems = async () => {
  try {
    const { items } = await client.getEntries({
      content_type: "topCarousel",
      order: ["sys.createdAt"],
    });
    return items[0] as any;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getTestimonials = async () => {
  try {
    const { items } = await client.getEntries({
      content_type: "testimonials",
      order: ["sys.createdAt"],
    });
    return items as any;
  } catch (error: any) {
    throw new Error(error);
  }
};

