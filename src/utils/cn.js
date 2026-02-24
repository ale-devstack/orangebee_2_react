import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina condicionalmente clases CSS y resuelve colisiones de Tailwind
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}