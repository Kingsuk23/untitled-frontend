import Image from "next/image";
import PrimaryButton from "./ui/primaryButton";

const MagnetLinks = () => {
  return (
    <div className=" md:flex mt-16 relative mx-auto hidden flex-col justify-between md:max-w-7xl">
      <div className="inline-flex h-fit gap-6">
        <div className="relative w-[61%] aspect-square">
          <Image src="/images/image.png" alt="offer" fill loading="lazy" />
        </div>
        <div className="inline-flex flex-col justify-center  gap-4 pr-4">
          <h2 className="text-[2.5rem] leading-12 text-text-primary-default font-bold">
            Need a home loan? Get pre-approved
          </h2>
          <p className="text-base font-normal leading-6 text-text-secondary-default">
            Find a lender who can offer competitive mortgage rates and help you
            with pre-approval.
          </p>
          <PrimaryButton text="Get Pre-approved" />
        </div>
      </div>
      <div className="inline-flex h-fit gap-6">
        <div className="inline-flex flex-col justify-center  gap-4 pr-4">
          <h2 className="text-[2.5rem] leading-12 text-text-primary-default font-bold">
            Get Local Info
          </h2>
          <p className="text-base font-normal leading-6 text-text-secondary-default">
            Does it have pet-friendly rentals? How are the schools? Get
            important local information on the area you're most interested in.
          </p>
          // TODO Input filed
        </div>
        <div className="relative w-[61%] aspect-square">
          <Image src="/images/image.png" alt="offer" fill loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default MagnetLinks;
