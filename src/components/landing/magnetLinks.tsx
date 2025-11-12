import Image from "next/image";
import Button from "../ui/button";
import { Heading } from "../ui/heading";
import { Paragraph } from "../ui/paragraph";
import Input from "../ui/input";
import { BiSearch } from "react-icons/bi";

const MagnetLinks = () => {
  return (
    <div className="mt-16 relative mx-auto md:max-w-7xl">
      <div className="inline-flex h-fit gap-6  w-full">
        <div className="relative w-[50%] aspect-631/430">
          <Image
            src="/images/client-metting.jpg"
            alt="offer"
            fill
            loading="lazy"
            className="object-cover"
          />
        </div>
        <div className="w-[50%] inline-flex flex-col justify-center  gap-4 pr-4">
          <Heading as="h2" size="2">
            Need a home loan? Get pre-approved
          </Heading>
          <Paragraph color="gray">
            Find a lender who can offer competitive mortgage rates and help you
            with pre-approval.
          </Paragraph>

          <Button className="w-fit">Get Pre-approved</Button>
        </div>
      </div>
      <div className="inline-flex h-fit gap-6  w-full">
        <div className="w-[50%] inline-flex flex-col justify-center  gap-4 pl-4">
          <Heading as="h2" size="2">
            Get Local Info
          </Heading>
          <Paragraph color="gray">
            Does it have pet-friendly rentals? How are the schools? Get
            important local information on the area you&apos;re most interested
            in.
          </Paragraph>
          <div className="relative w-[60%]">
            <Input
              placeholder="Address, City, Zip or Neighborhood"
              type="text"
              className="w-full pr-10"
            />
            <BiSearch
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-primary-disable pointer-events-none"
              size={24}
            />
          </div>
        </div>
        <div className="relative w-[50%] aspect-631/430">
          <Image
            src="/images/image.png"
            alt="offer"
            fill
            loading="lazy"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MagnetLinks;
