import { useQuery } from "@tanstack/react-query";
import {
  getTopCarouselItems,
  getTestimonials,
  getPortfolioItems,
  getJournals,
} from "./service";
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

export function useGetPortfolioItems() {
  return useQuery({
    queryKey: [queries.getPortfolioItemsQuery],
    queryFn: () => getPortfolioItems(),
  });
}

export function useGetJournals() {
  return useQuery({
    queryKey: [queries.getJournalsQuery],
    queryFn: () => getJournals(),
  });
}
