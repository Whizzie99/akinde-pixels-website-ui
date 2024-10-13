import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// tailwind merge util class
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
