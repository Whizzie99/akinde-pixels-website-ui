import { useQuery } from "@tanstack/react-query";
import { getTopCarouselItems, getTestimonials } from "./service";
import { keys } from "@/utils/keys";

const { queries } = keys;

export function useGetTopCarouselItems() {
  return useQuery({
    queryKey: [queries.getTopCarouselQuery],
    queryFn: () => getTopCarouselItems(),
  });
}

export function useGetTestimonials() {
  return useQuery({
    queryKey: [queries.getTestimonialsQuery],
    queryFn: () => getTestimonials(),
  });
}
