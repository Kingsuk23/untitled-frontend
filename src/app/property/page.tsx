import Container from "@/components/container";
import Footer from "@/components/footer";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import {
  BiChevronDown,
  BiChevronLeft,
  BiChevronRight,
  BiSearch,
} from "react-icons/bi";

const Property = () => {
  return (
    <>
      <Container>
        <div className="mt-2 flex gap-4">
          <div className="relative md:w-[390px] w-[80%]">
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

          <div className="md:flex hidden justify-center items-center gap-2 rounded-lg border border-border-primary-default px-4 py-2 cursor-pointer">
            <p className="text-base leading-5 font-medium text-text-primary-default">
              For Sale
            </p>
            <BiChevronDown size={24} className="text-icon-primary-default" />
          </div>

          <div className="md:flex hidden justify-center items-center gap-2 rounded-lg border border-border-primary-default px-4 py-2 cursor-pointer">
            <p className="text-base leading-5 font-medium text-text-primary-default">
              Price
            </p>
            <BiChevronDown size={24} className="text-icon-primary-default" />
          </div>

          <div className="md:flex hidden justify-center items-center gap-2 rounded-lg border border-border-primary-default px-4 py-2 cursor-pointer">
            <p className="text-base leading-5 font-medium text-text-primary-default">
              Beds & Baths
            </p>
            <BiChevronDown size={24} className="text-icon-primary-default" />
          </div>

          <div className="md:flex hidden justify-center items-center gap-2 rounded-lg border border-border-primary-default px-4 py-2 cursor-pointer">
            <p className="text-base leading-5 font-medium text-text-primary-default">
              Home Type
            </p>
            <BiChevronDown size={24} className="text-icon-primary-default" />
          </div>

          <div className="flex justify-center items-center gap-2 rounded-lg border border-border-primary-default px-4 py-2 cursor-pointer">
            <p className="text-base leading-5 font-medium text-text-primary-default">
              More
            </p>
            <BiChevronDown size={24} className="text-icon-primary-default" />
          </div>
        </div>
        <div className="w-full flex gap-4 pt-10">
          <div className="w-[47%] sticky top-0 left-0 h-screen md:block hidden ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d236269.57132992896!2d88.3917268!3d22.2888949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1761889877195!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="md:w-[53%] w-full">
            <h5 className="text-2xl font-bold text-text-primary-default">
              Real Estate & Homes For Sale
            </h5>
            <div className=" flex justify-between items-center pt-4">
              <p className="text-text-secondary-default leading-6 text-base font-normal">
                520 Result
              </p>
              <div className="flex gap-2 justify-between items-center">
                <p className="text-text-primary-default leading-6 text-base font-normal">
                  Sort: Home for you
                </p>
                <BiChevronDown
                  size={24}
                  className="text-icon-primary-default"
                />
              </div>
            </div>
            <div className="pt-8 flex flex-wrap gap-2">
              <Card className="shrink grow " />
              <Card className="shrink grow " />{" "}
              <Card className="shrink grow " />{" "}
              <Card className="shrink grow " />{" "}
              <Card className="shrink grow " />{" "}
              <Card className="shrink grow " />{" "}
              <Card className="shrink grow " />{" "}
              <Card className="shrink grow " />{" "}
              <Card className="shrink grow " />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 gap-4">
          <div className="bg-bg-primary-minimal w-12 h-12 rounded-full flex justify-center items-center cursor-pointer">
            <BiChevronLeft size={24} className="text-icon-primary-default" />
          </div>
          <div className="bg-bg-primary-minimal w-12 h-12 rounded-full flex justify-center items-center cursor-pointer">
            <p className="text-base leading-5 font-medium text-text-primary-default">
              1
            </p>
          </div>
          <div className="bg-bg-secondary-default w-12 h-12 rounded-full flex justify-center items-center cursor-pointer">
            <p className="text-base leading-5 font-medium text-text-primary-inverted">
              2
            </p>
          </div>
          <div className="bg-bg-primary-minimal w-12 h-12 rounded-full flex justify-center items-center cursor-pointer">
            <p className="text-base leading-5 font-medium text-text-primary-default">
              3
            </p>
          </div>
          <div className="bg-bg-primary-minimal w-12 h-12 rounded-full flex justify-center items-center cursor-pointer">
            <BiChevronRight size={24} className="text-icon-primary-default" />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Property;
