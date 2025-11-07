"use client";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import Container from "../container";
import Card from "../ui/card";
import { useCallback, useEffect, useRef, useState } from "react";
import { Heading } from "../ui/heading";

const Recommendation = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scroll = useCallback(
    (direction: "left" | "right") => {
      if (!scrollRef.current) return;
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.5;
      const newScroll =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    },
    [scrollRef]
  );

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    checkScroll();
    container.addEventListener("scroll", checkScroll);
    return () => container.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <Container>
      <div className="mt-16">
        <div className="flex justify-between items-center">
          <Heading as="h2" size="2">
            Recommended for you
          </Heading>
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-8 h-8 rounded-full bg-bg-primary-minimal md:flex justify-center items-center cursor-pointer hidden ${
                !canScrollLeft ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              <BiSolidChevronLeft
                size={24}
                className="text-icon-secondary-default"
              />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-8 h-8 rounded-full bg-bg-primary-minimal md:flex justify-center items-center cursor-pointer hidden ${
                !canScrollRight ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              <BiSolidChevronRight
                size={24}
                className="text-icon-secondary-default"
              />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="pt-8 flex gap-3 overflow-x-scroll recommendation scroll-smooth"
        >
          <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
        </div>
      </div>
    </Container>
  );
};

export default Recommendation;
