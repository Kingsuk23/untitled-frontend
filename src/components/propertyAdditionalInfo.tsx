import {
  BiChevronDown,
  BiDoorOpen,
  BiGridAlt,
  BiHistory,
  BiLeaf,
  BiMapPin,
  BiTrendingUp,
} from "react-icons/bi";

const PropertyAdditionalInfo = () => {
  return (
    <div className="mt-16 w-full">
      <div className="flex flex-col gap-6">
        <hr className="border-border-primary-default rounded-xl" />
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <BiDoorOpen size={24} className="text-icon-primary-default" />
            <h6 className="text-xl leading-6.5 text-text-primary-default font-bold">
              Open House
            </h6>
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
            <h6 className="text-xl leading-6.5 text-text-primary-default font-bold">
              Property Details
            </h6>
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
            <h6 className="text-xl leading-6.5 text-text-primary-default font-bold">
              Property History
            </h6>
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
            <h6 className="text-xl leading-6.5 text-text-primary-default font-bold">
              Neighborhood & School
            </h6>
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
            <h6 className="text-xl leading-6.5 text-text-primary-default font-bold">
              Environment risk
            </h6>
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
            <h6 className="text-xl leading-6.5 text-text-primary-default font-bold">
              Home Value
            </h6>
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
