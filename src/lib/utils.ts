import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const NavLinks = [
  { name: "Sell", href: "/sell" },
  { name: "Buy", href: "/buy" },
  { name: "Service", href: "/service" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact us", href: "/contact" },
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
