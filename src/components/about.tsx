import Image from "next/image";
import Container from "./container";
import PrimaryButton from "./ui/primaryButton";

const About = () => {
  return (
    <Container>
      <div className="mt-16 w-full flex flex-col md:flex-row gap-6">
        <div className="md:w-[80%] h-[266px] p-6 w-full  bg-bg-secondary-default gap-4 text-text-primary-inverted rounded-xl">
          <div className="px-4 py-2 inline-flex justify-center items-center gap-2 border rounded-3xl">
            <div className="w-2 h-2 bg-bg-primary-default rounded-full"></div>
            <p className="text-base leading-6 font-normal">About us</p>
          </div>
          <p className="leading-6 text-base font-normal pt-4">
            Lorem ipsum dolor sit amet consectetur. At elementum tincidunt nulla
            justo donec ut. Rhoncus porta proin at lectus gravida id nisl ut.
            Orci pretium diam ultricies diam elit. Faucibus nunc mauris mattis
            morbi vitae purus. Suspendisse nunc nunc justo hendrerit aliquam.
            Sed arcu sed malesuada sed arcu enim eget commodo. Cum aliquam
            mollis tellus..
          </p>
        </div>

        <div className="flex gap-6">
          <div className="w-[188px] h-[266px] rounded-xl p-4 flex flex-col justify-between border border-border-primary-default grow shrink">
            <h6 className="text-xl leading-[26px] font-bold text-text-primary-default w-[85px]">
              300+ Property
            </h6>
            <PrimaryButton text="View" />
          </div>
          <div className="w-[188px] h-[266px] rounded-xl p-4 flex flex-col justify-between border border-border-primary-default grow shrink">
            <h6 className="text-xl leading-[26px] font-bold text-text-primary-default w-[85px]">
              200+ Closing
            </h6>
            <PrimaryButton text="Search" />
          </div>
        </div>
      </div>
      <div className="w-full flex gap-6 mt-6">
        <div className="w-full md:w-[83%] relative rounded-xl overflow-hidden aspect-74/19">
          <Image
            src="/images/jonathan-borba-DUrU_bZV8So-unsplash.jpg"
            alt="Happy Family"
            fill
            sizes="(min-width: 1360px) 998px, (min-width: 780px) calc(71.43vw + 41px), calc(100vw - 16px)"
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="w-[188px] h-[266px] rounded-xl p-4 md:flex flex-col justify-between border border-border-primary-default grow shrink hidden">
          <div className=" flex -gap-2">
            <div className="w-6 h-6 rounded-full bg-red-500"></div>
            <div className="w-6 h-6 rounded-full bg-green-500"></div>
          </div>
          <PrimaryButton text="View" />
        </div>
      </div>
    </Container>
  );
};

export default About;
