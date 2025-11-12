import Image from "next/image";
import Container from "../container";
import Button from "../ui/button";
import { Heading } from "../ui/heading";
import { Paragraph } from "../ui/paragraph";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";

const About = () => {
  return (
    <Container>
      <div className="mt-16 w-full flex flex-col md:flex-row gap-6">
        <div className="md:w-[80%] h-[266px] p-6 flex flex-col w-full  bg-bg-secondary-default gap-4 rounded-xl">
          <div className="px-4 py-2 inline-flex justify-center items-center gap-2 border rounded-3xl border-border-primary-inverted w-fit">
            <div className="w-2 h-2 bg-bg-primary-default rounded-full" />
            <Paragraph color="white">About us</Paragraph>
          </div>

          <Paragraph
            color="white"
            className="overflow-hidden text-ellipsis line-clamp-6"
          >
            We are a trusted real estate agency dedicated to helping people find
            their dream homes. Our mission is to make property buying, selling,
            and renting simple and transparent. With years of industry
            experience, we bring expertise and local market knowledge to every
            deal. We work closely with clients to understand their goals and
            deliver personalized solutions. From luxury apartments to commercial
            spaces, we cover a wide range of real estate needs. Our commitment
            to honesty, trust, and quality service sets us apart. Your journey
            to the perfect property begins with us — reliable, professional, and
            client-focused.
          </Paragraph>
        </div>

        <div className="flex gap-6">
          <div className="w-[188px] h-[266px] rounded-xl p-4 flex flex-col justify-between border border-border-primary-default grow shrink">
            <Heading as="h6" size="6" className="w-[85px]">
              300+ Property
            </Heading>
            <Button asChild>
              <Link href="/property">
                Search <BiRightArrowAlt size={24} />
              </Link>
            </Button>
          </div>
          <div className="w-[188px] h-[266px] rounded-xl p-4 flex flex-col justify-between border border-border-primary-default grow shrink">
            <Heading as="h6" size="6" className="w-[85px]">
              200+ Closing
            </Heading>
            <Button asChild>
              <Link href="#testimonial">
                View <BiRightArrowAlt size={24} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-6 mt-6">
        <div className="w-full md:w-[83%] relative rounded-xl overflow-hidden md:aspect-74/19 aspect-193/133">
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
          <div className=" flex ">
            <div className="relative w-6 h-6 rounded-full">
              <Image
                src="/images/rachel.jpg"
                alt="profile pic"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="relative w-6 h-6 rounded-full -ml-2.5">
              <Image
                src="/images/taylor.jpg"
                alt="profile pic"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="relative w-6 h-6 rounded-full -ml-2.5">
              <Image
                src="/images/the-connected.jpg"
                alt="profile pic"
                fill
                className="rounded-full object-cover"
              />
            </div>{" "}
            <div className="relative w-6 h-6 rounded-full -ml-2.5">
              <Image
                src="/images/usman.jpg"
                alt="profile pic"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="relative w-6 h-6 rounded-full -ml-2.5">
              <Image
                src="/images/wellington.jpg"
                alt="profile pic"
                fill
                className="rounded-full object-cover"
              />
            </div>{" "}
            <div className="relative w-6 h-6 rounded-full -ml-2.5">
              <Image
                src="/images/mathilde.jpg"
                alt="profile pic"
                fill
                className="rounded-full object-cover"
              />
            </div>
          </div>
          <Button asChild>
            <Link href="#testimonial">
              View <BiRightArrowAlt size={24} />
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default About;
