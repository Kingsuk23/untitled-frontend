import {
  BiHeart,
  BiHomeHeart,
  BiSolidChevronLeft,
  BiSolidChevronRight,
} from "react-icons/bi";
import { useCallback, useEffect, useRef, useState } from "react";
import { Heading } from "./ui/heading";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { Paragraph } from "./ui/paragraph";

const Smiler = () => {
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
    <div className="mt-16">
      <div className="flex justify-between items-center">
        <div className="inline-flex gap-2 items-center justify-center">
          <BiHomeHeart size={24} className="text-icon-primary-default" />
          <Heading as="h6" size="6">
            Smiler houses
          </Heading>
        </div>

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
        <Card className="w-[250px] h-fit cursor-pointer shadow-small overflow-hidden shrink-0 grow-0">
          <CardHeader className="relative">
            <Image
              src="/images/furniture-2660938.jpg"
              alt="Interior"
              width={250}
              height={100}
              loading="lazy"
            />
            <div className="flex absolute top-2 left-2 gap-2">
              <Paragraph
                asSpan
                size="3"
                color="white"
                className="bg-bg-secondary-default p-2 rounded-2xl inline"
              >
                New
              </Paragraph>
            </div>
            <div className="p-2 bg-bg-primary-default rounded-full absolute bottom-2 right-2 hover:opacity-75 transition-all duration-300 focus-visible:opacity-75">
              <BiHeart size={20} />
            </div>
          </CardHeader>
          <CardContent className="p-2 flex flex-col gap-2">
            <Heading as="h5" size="5">
              $912,00
            </Heading>
            <Paragraph size="7" color="gray">
              <span className="text-sm font-extrabold text-text-primary-default pr-1">
                2
              </span>
              bed |
              <span className="text-sm font-extrabold text-text-primary-default px-1">
                1
              </span>
              baths |
              <span className="text-sm font-extrabold text-text-primary-default px-1">
                1,000
              </span>
              ft
            </Paragraph>
            <Paragraph size="7" color="gray">
              4140 Parker Rd. Allentown, New Mexico 31134
            </Paragraph>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Smiler;
