import Apartment from "@/components/svg/apartment";
import Billboard from "@/components/svg/billboard";
import Calculator from "@/components/svg/callculator";
import Cash from "@/components/svg/cash";
import Direction from "@/components/svg/direction";
import House from "@/components/svg/house";
import HouseValue from "@/components/svg/houseValue";
import MoneyBadge from "@/components/svg/moneyBadge";
import Offer from "@/components/svg/offer";
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

export const unreachable = (
  condition: never,
  message = `Entered unreachable code. Received '${
    typeof condition === "string" ? condition : JSON.stringify(condition)
  }'.`
): never => {
  throw new TypeError(message);
};

export const services = [
  {
    option: "buy",
    content: [
      {
        title: "Find out how much you can afford",
        subtitle:
          "We'll help you estimate your budget range. Save to your buyer profile to help in your search.",
        Icon: MoneyBadge,
      },
      {
        title: "Understand your monthly costs",
        subtitle:
          "Get an in-depth look at what your monthly and closing costs will look like based on your financial situation and goals.",
        Icon: Calculator,
      },
      {
        title: "Get help with your down payment",
        subtitle:
          "You may be able to buy a home with just 3.5% down. Saving for that can be challenging–down payment assistance programs can help.",
        Icon: Cash,
      },
    ],
  },
  {
    option: "sell",
    content: [
      {
        title: "Buy now, sell later",
        subtitle:
          "Skip the repairs and showings. Our partners can help you buy your new home first, then sell your old one.",
        Icon: Billboard,
      },
      {
        title: "Track your home value",
        subtitle:
          "See your RealEstimate℠ valuation information over time compared to homes in your area.",
        Icon: HouseValue,
      },
      {
        title: "Get offers for your home",
        subtitle:
          "Visit Seller’s Marketplace to find out how you can sell without listing or stay in your home while you finance the purchase of your next one.",
        Icon: Offer,
      },
    ],
  },
  {
    option: "rent",
    content: [
      {
        title: "Find out if it's better to rent or buy",
        subtitle:
          "Try our rent or buy calculator to determine if buying or renting a home makes more financial sense for your situation.",
        Icon: Direction,
      },
      {
        title: "Search For Nearby Opportunities",
        subtitle:
          "See apartments available in your area or a location you choose. Narrow your search by price, amenities, and more.",
        Icon: House,
      },
      {
        title: "Discover Your Dream Apartment",
        subtitle:
          "Explore thousands of apartment listings. Find the perfect place to call home.",
        Icon: Apartment,
      },
    ],
  },
];
