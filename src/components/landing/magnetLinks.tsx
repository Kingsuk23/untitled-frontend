import Image from "next/image";
import Button from "../ui/button";
import { Heading } from "../ui/heading";
import { Paragraph } from "../ui/paragraph";

const MagnetLinks = () => {
  return (
    <div className=" md:flex mt-16 relative mx-auto hidden flex-col justify-between md:max-w-7xl">
      <div className="inline-flex h-fit gap-6">
        <div className="relative w-[61%] aspect-square">
          <Image src="/images/image.png" alt="offer" fill loading="lazy" />
        </div>
        <div className="inline-flex flex-col justify-center  gap-4 pr-4">
          <Heading as="h2" size="2">
            Need a home loan? Get pre-approved
          </Heading>
          <Paragraph color="gray">
            Find a lender who can offer competitive mortgage rates and help you
            with pre-approval.
          </Paragraph>

          <Button>Get Pre-approved</Button>
        </div>
      </div>
      <div className="inline-flex h-fit gap-6">
        <div className="inline-flex flex-col justify-center  gap-4 pr-4">
          <Heading as="h2" size="2">
            Get Local Info
          </Heading>
          <Paragraph color="gray">
            Does it have pet-friendly rentals? How are the schools? Get
            important local information on the area you&apos;re most interested
            in.
          </Paragraph>
          {/* Todo */}
        </div>
        <div className="relative w-[61%] aspect-square">
          <Image src="/images/image.png" alt="offer" fill loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default MagnetLinks;
