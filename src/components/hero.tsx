import Container from "./container";
import PrimaryButton from "./ui/primaryButton";
import SecondaryButton from "./ui/secondaryButton";
import Image from "next/image";

const Hero = () => {
  return (
    <Container>
      <div className="mt-16 ">
        <h1 className="font-bold text-text-primary-default text-5xl leading-[58px] text-center">
          Find Your <span className="text-text-primary-hover">Perfect </span>
          Home Today
        </h1>
        <p className="max-w-[606px] text-center text-base font-normal text-text-secondary-default pt-8 leading-6 mx-auto">
          Explore verified listings, transparent pricing, and expert
          guidance—everything you need to make your next move confidently.
        </p>

        <div className="flex gap-6 justify-center items-center pt-6">
          <PrimaryButton text="Search" /> <SecondaryButton text="Contact us" />
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
