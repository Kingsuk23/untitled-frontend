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
import Button from "./ui/button";
import { Heading } from "./ui/heading";
import { Paragraph } from "./ui/paragraph";

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
            <Heading as="h4" size="4">
              $600,00
            </Heading>
            <Paragraph>
              <Paragraph asSpan size="2" className="pr-1">
                2
              </Paragraph>
              bed |
              <Paragraph asSpan size="2" className="px-1">
                1
              </Paragraph>
              bath |
              <Paragraph asSpan size="2" className="px-1">
                620
              </Paragraph>
              sqft
            </Paragraph>
            <Paragraph className="text-text-primary-default leading-6 text-base font-normal">
              3730 103rd St Unit 2, Flushing, NY 11368
            </Paragraph>
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

              <Button variant="outline">
                <span className="relative z-10">Get pre-approved</span>
              </Button>
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
            <Paragraph asSpan size="8">
              Tennis
            </Paragraph>
          </div>
          <div className="p-2 bg-bg-primary-minimal rounded-3xl">
            <Paragraph asSpan size="8">
              Pet Allowed
            </Paragraph>
          </div>
        </div>

        <div className="md:w-[80%] w-full flex flex-wrap md:gap-x-32 gap-x-28 gap-y-6 pt-6">
          <div className="inline-flex gap-2 items-center justify-center">
            <BiHome className="text-icon-primary-default" size={24} />
            <div className="flex flex-col">
              <Paragraph asSpan size="2">
                Condo
              </Paragraph>
              <Paragraph size="8" asSpan color="gray">
                Property type
              </Paragraph>
            </div>
          </div>
          <div className="inline-flex gap-2 items-center justify-center">
            <BiCalendar className="text-icon-primary-default" size={24} />
            <div className="flex flex-col">
              <Paragraph asSpan size="2">
                49 days
              </Paragraph>

              <Paragraph size="8" asSpan color="gray">
                On Market
              </Paragraph>
            </div>
          </div>
          <div className="inline-flex gap-2 items-center justify-center">
            <BiMoneyWithdraw className="text-icon-primary-default" size={24} />
            <div className="flex flex-col">
              <Paragraph asSpan size="2">
                $374/mo
              </Paragraph>
              <Paragraph size="8" asSpan color="gray">
                HOA Fee
              </Paragraph>
            </div>
          </div>
          <div className="inline-flex gap-2 items-center justify-center">
            <BiRuler className="text-icon-primary-default" size={24} />
            <div className="flex flex-col">
              <Paragraph asSpan size="2">
                $581
              </Paragraph>
              <Paragraph size="8" asSpan color="gray">
                Price Per Sqft
              </Paragraph>
            </div>
          </div>
          <div className="inline-flex gap-2 items-center justify-center">
            <BiBuilding className="text-icon-primary-default" size={24} />
            <div className="flex flex-col">
              <Paragraph asSpan size="2">
                1988
              </Paragraph>
              <Paragraph size="8" asSpan color="gray">
                Year Build
              </Paragraph>
            </div>
          </div>
        </div>

        <div className="flex gap-6 pt-8">
          <Button className="max-md:hidden">Contact agent</Button>
          <Button variant="outline">
            <span className="relative z-10">Share this home</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;
