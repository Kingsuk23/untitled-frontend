"use client";
import Image from "next/image";
import Container from "../container";
import { useEffect } from "react";
import { Heading } from "../ui/heading";
import { Paragraph } from "../ui/paragraph";
import { Card, CardContent, CardHeader } from "../ui/card";

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
      <div className="mt-16" id="testimonial">
        <Heading as="h2" size="2" className="text-center">
          What others say
        </Heading>

        <div className="pt-8 flex flex-col gap-3 testimonial-container overflow-x-hidden">
          {/* Left-scrolling row */}
          <div className=" scroller" data-direction="left">
            <TestimonialCard
              src="/images/ben.jpg"
              name="ben"
              testimonialText="The team made buying our first home stress-free and exciting. Every detail was handled with care."
            />
            <TestimonialCard
              src="/images/christina.jpg"
              name="christina"
              testimonialText="Professional, transparent, and reliable — they found us the perfect property within our budget."
            />
            <TestimonialCard
              src="/images/jake.jpg"
              name="jake"
              testimonialText="I sold my apartment in record time thanks to their smart marketing and constant communication."
            />
            <TestimonialCard
              src="/images/mathilde.jpg"
              name="mathilde"
              testimonialText="They truly understand the real estate market and guided me through every step with confidence."
            />
            <TestimonialCard
              src="/images/rachel.jpg"
              name="rachel"
              testimonialText="From viewing to closing, the process was seamless. Highly recommend their service!"
            />
          </div>

          {/* Right-scrolling row */}
          <div className="scroller" data-direction="right">
            <TestimonialCard
              src="/images/ben.jpg"
              name="ben"
              testimonialText="Outstanding service! They went above and beyond to make sure I was satisfied with my purchase."
            />
            <TestimonialCard
              src="/images/taylor.jpg"
              name="Taylor"
              testimonialText="They helped me find the ideal rental property — fast, easy, and exactly what I was looking for."
            />
            <TestimonialCard
              src="/images/the-connected.jpg"
              name="Void"
              testimonialText="I’ve worked with several agents before, but this team stands out for their honesty and professionalism."
            />
            <TestimonialCard
              src="/images/usman.jpg"
              name="usman"
              testimonialText="Their advice on pricing and staging helped us attract serious buyers quickly."
            />
            <TestimonialCard
              src="/images/wellington.jpg"
              name="wellington"
              testimonialText="Excellent experience — the staff was friendly, responsive, and always available to answer questions."
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

const TestimonialCard = ({
  name,
  src,
  testimonialText,
}: {
  src: string;
  name: string;
  testimonialText: string;
}) => (
  <Card className="w-[400px] h-48 p-4 flex flex-col gap-4 shrink-0">
    <CardHeader className="inline-flex gap-2 items-center">
      <Image
        src={src}
        alt="profile pic"
        width={32}
        height={32}
        loading="lazy"
        className="rounded-full w-8 h-8 object-cover"
      />
      <Paragraph asSpan size="2" className="capitalize">
        {name}
      </Paragraph>
    </CardHeader>
    <CardContent>
      <Paragraph
        color="gray"
        className="overflow-hidden text-ellipsis line-clamp-6"
      >
        {testimonialText}
      </Paragraph>
    </CardContent>
  </Card>
);

export default Testimonial;
