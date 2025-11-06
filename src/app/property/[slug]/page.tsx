"use client";
import Container from "@/components/container";
import { BiChevronLeft, BiHeart, BiShareAlt } from "react-icons/bi";
import { useRouter } from "next/navigation";
import Showcase from "@/components/showcase";
import PropertyInfo from "@/components/propertyInfo";
import PropertyAdditionalInfo from "@/components/propertyAdditionalInfo";
import InquiryForm from "@/components/inquiryForm";
import Smiler from "@/components/smiler";
import Footer from "@/components/footer";
import PrimaryButton from "@/components/ui/primaryButton";
import SecondaryButton from "@/components/ui/secondaryButton";

const PropertyDetails = () => {
  const router = useRouter();
  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 py-4 bg-bg-primary-default flex gap-2 px-2 border-t border-border-primary-default">
        <PrimaryButton text="Schedule Tour" className="w-1/2" />
        <SecondaryButton text="contact agent" className="w-1/2" />
      </div>
      <Container>
        <div className="mt-4 justify-between md:flex hidden items-center">
          <button
            className="inline-flex cursor-pointer"
            onClick={() => router.back()}
          >
            <BiChevronLeft className="text-icon-primary-default" size={24} />
            <p className="underline text-base text-text-primary-default leading-6">
              Back
            </p>
          </button>
          <div className="md:inline-flex gap-4 hidden">
            <div className="h-9 w-9 border rounded-full border-border-primary-default justify-center flex items-center cursor-pointer hover:bg-bg-primary-minimal">
              <BiHeart size={20} className="text-icon-primary-default" />
            </div>
            <div className="h-9 w-9 border rounded-full border-border-primary-default justify-center flex items-center cursor-pointer hover:bg-bg-primary-minimal">
              <BiShareAlt size={20} className="text-icon-primary-default" />
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="md:w-[75%] w-full">
            <Showcase />
            <PropertyInfo />
            <PropertyAdditionalInfo />
          </div>
          <div className="sticky top-4 left-0 rounded-xl border border-border-primary-default p-4 hidden md:block mt-4 h-fit w-[25%]">
            <h5 className="text-[1.75rem] leading-9 text-text-primary-default font-bold">
              Schedule tour
            </h5>
            <p className="pt-2 leading-6 text-base text-text-secondary-default ">
              your tour in your preferred date
            </p>

            <div className="pt-6 flex flex-col gap-2">
              <p className="leading-6 text-base text-text-primary-default">
                Jane Cooper
              </p>
              <p className="leading-6 text-base text-text-primary-default">
                8558 Green Rd.
              </p>
            </div>

            <PrimaryButton text="Schedule tour" className="mt-6 w-full" />

            <hr className="mt-4 mb-2 rounded-lg border-border-primary-default" />
            <h6 className="text-xl leading-6.5 text-text-primary-default font-bold">
              More about this property
            </h6>
            <SecondaryButton text="Contact agent" className="w-full mt-4" />
            <p className="text-xs leading-5 font-normal text-text-secondary-default w-full pt-4">
              By proceeding, you consent to receive calls and texts at the
              number you provided, including marketing by autodialer and
              prerecorded and artificial voice, and email, from realtor.com and 
               about your inquiry and other home-related matters, but not as a
              condition of any purchase. 
            </p>
          </div>
        </div>
        <InquiryForm />
        <Smiler />
      </Container>
      <Footer />
    </>
  );
};

export default PropertyDetails;
