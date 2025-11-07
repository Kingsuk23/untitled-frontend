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
import Button from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

const PropertyDetails = () => {
  const router = useRouter();
  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 py-4 bg-bg-primary-default flex gap-2 px-2 border-t border-border-primary-default">
        <Button className="w-1/2">Schedule Tour</Button>
        <Button className="w-1/2" variant="outline">
          <span className="relative z-10">Schedule Tour</span>
        </Button>
      </div>
      <Container>
        <div className="mt-4 justify-between md:flex hidden items-center">
          <button
            className="inline-flex cursor-pointer"
            onClick={() => router.back()}
          >
            <BiChevronLeft className="text-icon-primary-default" size={24} />
            <Paragraph className="underline">Back</Paragraph>
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
            <Heading as="h5" size="5">
              Schedule tour
            </Heading>
            <Paragraph color="gray" className="pt-2">
              your tour in your preferred date
            </Paragraph>

            <div className="pt-6 flex flex-col gap-2">
              <Paragraph>Jane Cooper</Paragraph>
              <Paragraph>8558 Green Rd.</Paragraph>
            </div>

            <Button className="mt-6 w-full">Schedule Tour</Button>
            <hr className="mt-4 mb-2 rounded-lg border-border-primary-default" />
            <Heading as="h6" size="6">
              More about this property
            </Heading>
            <Button className="w-full mt-4" variant="outline">
              <span className="relative z-10"> Contact agent</span>
            </Button>
            <Paragraph size="8" color="gray" className="w-full pt-4">
              By proceeding, you consent to receive calls and texts at the
              number you provided, including marketing by autodialer and
              prerecorded and artificial voice, and email, from realtor.com and 
               about your inquiry and other home-related matters, but not as a
              condition of any purchase. 
            </Paragraph>
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
