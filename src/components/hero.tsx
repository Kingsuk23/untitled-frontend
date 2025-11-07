import Container from "./container";
import Button from "./ui/button";
import Image from "next/image";
import { Heading } from "./ui/heading";
import { Paragraph } from "./ui/paragraph";

const Hero = () => {
  return (
    <Container>
      <div className="mt-16 ">
        <Heading className="text-center">
          Find Your <span className="text-text-primary-hover">Perfect </span>
          Home Today
        </Heading>
        <Paragraph
          color="gray"
          className="pt-8 max-w-[606px] text-center mx-auto "
        >
          Explore verified listings, transparent pricing, and expert
          guidance—everything you need to make your next move confidently.
        </Paragraph>

        <div className="flex gap-6 justify-center items-center pt-6">
          <Button>Search</Button>

          <Button variant="outline">
            <span className="relative z-10">Contact us</span>
          </Button>
        </div>

        <div className="mt-16 relative rounded-lg w-full flex overflow-hidden ">
          <div className="relative md:w-[80%] w-full aspect-41/21 md:rounded-tr-none md:rounded-br-none rounded-lg">
            <Image
              src="/images/building-4579244.jpg"
              alt="Exterior"
              fill
              priority
              sizes="(min-width: 1360px) 998px, (min-width: 780px) calc(71.43vw + 41px), calc(100vw - 16px)"
              className="object-cover"
            />
          </div>
          <div className="relative md:w-[20%] hidden md:block">
            <div className="relative  h-[40%] md:rounded-tr-lg">
              <Image
                src="/images/furniture-2660938.jpg"
                alt="Interior"
                fill
                priority
                sizes="(min-width: 1360px) 998px, (min-width: 780px) calc(71.43vw + 41px), calc(100vw - 16px)"
                className="object-cover"
              />
            </div>
            <div className="relative h-[60%] md:rounded-tr-lg">
              <Image
                src="/images/spacejoy-nEtpvJjnPVo-unsplash.jpg"
                alt="Interior"
                fill
                priority
                sizes="(min-width: 1360px) 998px, (min-width: 780px) calc(71.43vw + 41px), calc(100vw - 16px)"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
