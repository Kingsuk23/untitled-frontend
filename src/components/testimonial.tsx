"use client";
import Image from "next/image";
import Container from "./container";
import { useEffect } from "react";

const Testimonial = () => {
  useEffect(() => {
    document.querySelectorAll(".scroller").forEach((scroller) => {
      const inner = scroller as HTMLDivElement;
      const items = Array.from(inner.children);
      items.forEach((item) => {
        const clone = item.cloneNode(true) as HTMLElement;
        clone.setAttribute("aria-hidden", "true");
        inner.appendChild(clone);
      });
    });
  }, []);

  return (
    <Container>
      <div className="mt-16">
        <h1 className="font-bold text-[2.5rem] text-center text-text-primary-default">
          What others say
        </h1>

        <div className="pt-8 flex flex-col gap-3 testimonial-container overflow-x-hidden">
          {/* Left-scrolling row */}
          <div className=" scroller" data-direction="left">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          {/* Right-scrolling row */}
          <div className="scroller" data-direction="right">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Card = () => (
  <div className="w-[400px] h-48 border border-border-primary-default rounded-xl p-4 flex flex-col gap-4 shrink-0">
    <div className="inline-flex gap-2 items-center">
      <div className="w-8 h-8 rounded-full relative shrink-0">
        <Image
          src="/images/building-4579244.jpg"
          alt="profile pic"
          fill
          sizes="48px"
          loading="lazy"
          className="rounded-full object-cover"
        />
      </div>
      <p className="text-base font-medium">Josh</p>
    </div>
    <p className="text-base text-text-secondary-default">
      Prompt delivery and top-notch quality. Impressed with the speed and
      accuracy. The efficiency and speed at which they delivered the product
      were impressive.
    </p>
  </div>
);

export default Testimonial;
