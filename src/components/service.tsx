"use client";
import { useState } from "react";
import Container from "./container";
import ServiceCard from "./ui/serviceCard";

const Service = () => {
  const [selectOption, setSelectOption] = useState<"buy" | "sell" | "rent">(
    "buy"
  );
  const handleClicks = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const option = e.currentTarget.getAttribute("data-option") as
      | "buy"
      | "sell"
      | "rent";
    setSelectOption(option);
  };
  return (
    <Container>
      <div className="mt-16">
        <h1 className="leading-12 font-bold text-[2.5rem] text-text-primary-default">
          Discover how we can help
        </h1>

        <div className="pt-6 flex gap-2">
          <button
            className={` ${
              selectOption === "buy"
                ? "bg-button-primary-default text-text-primary-inverted"
                : "bg-transparent border hover:border-border-primary-hover border-border-primary-default text-text-primary-default"
            } rounded-3xl font-normal text-base leading-6 px-4 py-2 cursor-pointer`}
            data-option="buy"
            onClick={(e) => handleClicks(e)}
          >
            Buying
          </button>
          <button
            className={` ${
              selectOption === "rent"
                ? "bg-button-primary-default text-text-primary-inverted"
                : "bg-transparent border hover:border-border-primary-hover border-border-primary-default text-text-primary-default"
            } rounded-3xl font-normal text-base leading-6 px-4 py-2 cursor-pointer`}
            data-option="rent"
            onClick={(e) => handleClicks(e)}
          >
            Renting
          </button>
          <button
            className={` ${
              selectOption === "sell"
                ? "bg-button-primary-default text-text-primary-inverted"
                : "bg-transparent border hover:border-border-primary-hover border-border-primary-default text-text-primary-default"
            } rounded-3xl font-normal text-base leading-6 px-4 py-2 cursor-pointer`}
            data-option="sell"
            onClick={(e) => handleClicks(e)}
          >
            Selling
          </button>
        </div>

        <div className=" mt-8 flex gap-6 flex-wrap">
          {selectOption === "buy" && (
            <>
              <ServiceCard
                Heading="Find out how much you can afford"
                Paragraph="We'll help you estimate your budget range. Save to your buyer profile to help in your search."
                icon="/svg/Money.svg"
              />
              <ServiceCard
                Heading="Understand your monthly costs"
                Paragraph="Get an in-depth look at what your monthly and closing costs will look like based on your financial situation and goals."
                icon="/svg/callculator.svg"
              />
              <ServiceCard
                Heading="Get help with your down payment"
                Paragraph="You may be able to buy a home with just 3.5% down. Saving for that can be challenging–down payment assistance programs can help."
                icon="/svg/cash.svg"
              />
            </>
          )}
          {selectOption === "rent" && (
            <>
              <ServiceCard
                Heading="Find out if it's better to rent or buy"
                Paragraph="Try our rent or buy calculator to determine if buying or renting a home makes more financial sense for your situation."
                icon="/svg/arrow.svg"
              />
              <ServiceCard
                Heading="Search For Nearby Opportunities"
                Paragraph="See apartments available in your area or a location you choose. Narrow your search by price, amenities, and more."
                icon="/svg/home.svg"
              />
              <ServiceCard
                Heading="Discover Your Dream Apartment  "
                Paragraph="Explore thousands of apartment listings. Find the perfect place to call home."
                icon="/svg/aperment.svg"
              />
            </>
          )}
          {selectOption === "sell" && (
            <>
              <ServiceCard
                Heading="Buy now, sell later"
                Paragraph="Skip the repairs and showings. Our partners can help you buy your new home first, then sell your old one."
                icon="/svg/handboard.svg"
              />
              <ServiceCard
                Heading="Track your home value"
                Paragraph="See your RealEstimate℠ valuation information over time compared to homes in your area."
                icon="/svg/HouseMoney.svg"
              />
              <ServiceCard
                Heading="Get offers for your home"
                Paragraph="Visit Seller’s Marketplace to find out how you can sell without listing or stay in your home while you finance the purchase of your next one."
                icon="/svg/offer.svg"
              />
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Service;
