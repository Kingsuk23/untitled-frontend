import Link from "next/link";
import {
  BiBuilding,
  BiCalendar,
  BiCar,
  BiHome,
  BiMap,
  BiMoneyWithdraw,
  BiPencil,
  BiRuler,
} from "react-icons/bi";
import MapCard from "./ui/mapCard";
import SecondaryButton from "./ui/secondaryButton";
import PrimaryButton from "./ui/primaryButton";

const PropertyInfo = () => {
  return (
    <div className="mt-2 md:pt-6">
      <div className=" flex justify-between w-full">
        <div className="w-full">
          <div className="gap-1 md:flex hidden">
            <Link href="/" className="text-text-primary-hover">
              South Caroline
            </Link>
            <span>/</span>
            <Link href="/" className="text-text-primary-hover">
              South Caroline
            </Link>
            <span>/</span>
            <Link href="/" className="text-text-primary-hover">
              South Caroline
            </Link>
            <span>/</span>
            <span>The Caroline</span>
          </div>

          <div className="md:pt-6 flex flex-col gap-4 w-full">
            <h4 className="text-[2rem] leading-10.5 text-text-primary-default font-bold">
              $600,00
            </h4>
            <p className="text-text-primary-default leading-6 text-base font-normal">
              2 bed | 1 bath | 620 sqft
            </p>
            <p className="text-text-primary-default leading-6 text-base font-normal">
              3730 103rd St Unit 2, Flushing, NY 11368
            </p>
            <div className="flex gap-2 md:hidden">
              <Link
                href="/"
                className="text-text-primary-default leading-6 text-base font-normal underline "
              >
                View on Map
              </Link>
              <BiMap size={24} className="text-icon-primary-default" />
            </div>
            <div className=" flex gap-4 items-center">
              <div className="flex gap-2">
                <Link
                  href="/"
                  className="text-text-primary-default leading-6 text-base font-normal underline"
                >
                  Est.$256,/mo
                </Link>
                <BiPencil size={24} className="text-icon-primary-default" />
              </div>
              <SecondaryButton text="Get pre-approved" />
            </div>
            <div className="h-10 flex items-center gap-2 px-4 py-2 border border-border-primary-default rounded-xl md:hidden">
              <BiCar size={24} className="text-icon-primary-default" />
              <Link
                href="/"
                className="text-text-primary-default leading-6 text-base font-normal underline"
              >
                Add a commute
              </Link>
            </div>
          </div>
        </div>
        <MapCard />
      </div>

      <div className="pt-6">
        <div className="flex gap-4">
          <div className="p-2 bg-bg-primary-minimal rounded-3xl">
            <p className="text-text-primary-default text-xs leading-5 font-normal">
              Tennis
            </p>
          </div>
          <div className="p-2 bg-bg-primary-minimal rounded-3xl">
            <p className="text-text-primary-default text-xs leading-5 font-normal">
              Pet Allowed
            </p>
          </div>
        </div>

        <div className="md:w-[80%] w-full flex flex-wrap md:gap-x-32 gap-x-28 gap-y-6 pt-6">
          <div className="inline-flex gap-2 items-center justify-center">
            <BiHome className="text-icon-primary-default" size={24} />
            <div className="flex flex-col">
              <p className="text-base font-medium leading-5 text-text-primary-default">
                Condo
              </p>
              <p className="text-xs font-normal leading-5 text-text-secondary-default">
                Property type
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2 items-center justify-center">
            <BiCalendar className="text-icon-primary-default" size={24} />
            <div className="flex flex-col">
              <p className="text-base font-medium leading-5 text-text-primary-default">
                49 days
              </p>
              <p className="text-xs font-normal leading-5 text-text-secondary-default">
                On Market
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2 items-center justify-center">
            <BiMoneyWithdraw className="text-icon-primary-default" size={24} />
            <div className="flex flex-col">
              <p className="text-base font-medium leading-5 text-text-primary-default">
                $374/mo
              </p>
              <p className="text-xs font-normal leading-5 text-text-secondary-default">
                HOA Fee
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2 items-center justify-center">
            <BiRuler className="text-icon-primary-default" size={24} />
            <div className="flex flex-col">
              <p className="text-base font-medium leading-5 text-text-primary-default">
                $581
              </p>
              <p className="text-xs font-normal leading-5 text-text-secondary-default">
                Price Per Sqft
              </p>
            </div>
          </div>
          <div className="inline-flex gap-2 items-center justify-center">
            <BiBuilding className="text-icon-primary-default" size={24} />
            <div className="flex flex-col">
              <p className="text-base font-medium leading-5 text-text-primary-default">
                1988
              </p>
              <p className="text-xs font-normal leading-5 text-text-secondary-default">
                Year Build
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-6 pt-8">
          <PrimaryButton text="Contact agent" className="max-md:hidden" />
          <SecondaryButton text="Share this home" />
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;
