import {
  BiChevronDown,
  BiDoorOpen,
  BiGridAlt,
  BiHistory,
  BiLeaf,
  BiMapPin,
  BiTrendingUp,
} from "react-icons/bi";
import { Heading } from "./ui/heading";

const PropertyAdditionalInfo = () => {
  return (
    <div className="mt-16 w-full">
      <div className="flex flex-col gap-6">
        <hr className="border-border-primary-default rounded-xl" />
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <BiDoorOpen size={24} className="text-icon-primary-default" />
            <Heading as="h6" size="6">
              Open House
            </Heading>
          </div>
          <BiChevronDown
            size={24}
            className="text-icon-primary-default cursor-pointer"
          />
        </div>

        <hr className="border-border-primary-default rounded-xl" />
      </div>
      <div className="flex flex-col gap-6 pt-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <BiGridAlt size={24} className="text-icon-primary-default" />
            <Heading as="h6" size="6">
              Property Details
            </Heading>
          </div>
          <BiChevronDown
            size={24}
            className="text-icon-primary-default cursor-pointer"
          />
        </div>

        <hr className="border-border-primary-default rounded-xl" />
      </div>
      <div className="flex flex-col gap-6 pt-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <BiHistory size={24} className="text-icon-primary-default" />
            <Heading as="h6" size="6">
              Property History
            </Heading>
          </div>
          <BiChevronDown
            size={24}
            className="text-icon-primary-default cursor-pointer"
          />
        </div>

        <hr className="border-border-primary-default rounded-xl" />
      </div>
      <div className="flex flex-col gap-6 pt-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <BiMapPin size={24} className="text-icon-primary-default" />
            <Heading as="h6" size="6">
              Neighborhood & School
            </Heading>
          </div>
          <BiChevronDown
            size={24}
            className="text-icon-primary-default cursor-pointer"
          />
        </div>

        <hr className="border-border-primary-default rounded-xl" />
      </div>
      <div className="flex flex-col gap-6 pt-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <BiLeaf size={24} className="text-icon-primary-default" />
            <Heading as="h6" size="6">
              Environment risk
            </Heading>
          </div>
          <BiChevronDown
            size={24}
            className="text-icon-primary-default cursor-pointer"
          />
        </div>

        <hr className="border-border-primary-default rounded-xl" />
      </div>
      <div className="flex flex-col gap-6 pt-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <BiTrendingUp size={24} className="text-icon-primary-default" />
            <Heading as="h6" size="6">
              Home Value
            </Heading>
          </div>
          <BiChevronDown
            size={24}
            className="text-icon-primary-default cursor-pointer"
          />
        </div>

        <hr className="border-border-primary-default rounded-xl" />
      </div>
    </div>
  );
};

export default PropertyAdditionalInfo;
