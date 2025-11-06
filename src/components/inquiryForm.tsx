import Image from "next/image";
import Input from "./ui/input";
import PrimaryButton from "./ui/primaryButton";

const InquiryForm = () => {
  return (
    <div className="flex justify-center mt-16 w-full">
      <form
        action=""
        className="border border-border-primary-default max-md:rounded-xl rounded-tl-xl rounded-bl-xl p-6 max-md:w-full "
      >
        <h6 className="text-text-primary-default font-bold text-xl leading-6.5 pb-6">
          More about this property
        </h6>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="fullname"
              className="text-text-primary-default text-base font-medium leading-5"
            >
              Full Name
            </label>
            <Input
              className="md:w-[320px] w-full"
              name="fullname"
              type="text"
              id="fullname"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-text-primary-default text-base font-medium leading-5"
            >
              Email
            </label>
            <Input
              name="email"
              type="text"
              id="email"
              className="md:w-[320px] w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phon"
              className="text-text-primary-default text-base font-medium leading-5"
            >
              Phone
            </label>
            <Input
              name="phon"
              type="tel"
              id="phon"
              className="md:w-[320px] w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="help"
              className="text-text-primary-default text-base font-medium leading-5"
            >
              How can an agent help?
            </label>
            <Input
              name="help"
              type="text"
              id="help"
              className="md:w-[320px] w-full"
            />
          </div>

          <PrimaryButton text="Contact agent" type="submit" className="mt-2" />

          <p className="text-xs leading-5 font-normal text-text-secondary-default md:w-[320px] w-full">
            By proceeding, you consent to receive calls and texts at the number
            you provided, including marketing by autodialer and prerecorded and
            artificial voice, and email, from realtor.com and   about your
            inquiry and other home-related matters, but not as a condition of
            any purchase. 
          </p>
        </div>
      </form>
      <div className=" relative w-[37%] aspect-20/19 md:block hidden rounded-tr-xl rounded-br-xl overflow-hidden">
        <Image
          src="/images/backbone-L4iRkKL5dng-unsplash.jpg"
          alt="thumbnail "
          loading="lazy"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default InquiryForm;
