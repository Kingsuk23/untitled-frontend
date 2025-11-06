import Image from "next/image";
import {
  BiChevronLeft,
  BiChevronRight,
  BiHeart,
  BiShareAlt,
} from "react-icons/bi";

const Showcase = () => {
  return (
    <div className="md:mt-4 flex  w-full cursor-pointer">
      <div className="w-full flex gap-1">
        <div className="relative rounded-tl-lg  rounded-bl-lg overflow-hidden md:w-[80%] aspect-201/118 w-full max-md:rounded-lg">
          <Image
            src="/images/salman-saqib-F1q1V0TOuYE-unsplash.jpg"
            alt="interior"
            fill
            priority
            className="object-cover"
          />
          <div className="inline-flex gap-4 md:hidden absolute top-2 right-2">
            <div className="h-9 w-9 rounded-full justify-center flex items-center cursor-pointer bg-bg-primary-default">
              <BiHeart size={20} className="text-icon-primary-default" />
            </div>
            <div className="h-9 w-9 rounded-full justify-center flex items-center cursor-pointer bg-bg-primary-default">
              <BiShareAlt size={20} className="text-icon-primary-default" />
            </div>
          </div>
          <div className="px-4 py-2 bg-bg-primary-inverted opacity-70 rounded-4xl absolute bottom-2 right-2">
            <p className="text-text-primary-inverted  text-xs leading-5">
              1/10
            </p>
          </div>
          <div className="px-4 py-2 bg-bg-primary-inverted opacity-70 rounded-4xl absolute bottom-2 left-2 md:hidden">
            <p className="text-text-primary-inverted  text-xs leading-5">
              3D View
            </p>
          </div>
          <div className="px-2 py-2 bg-bg-primary-inverted opacity-70 rounded-full absolute top-1/2 -translate-y-1/2 left-2 hidden md:block">
            <BiChevronLeft className="text-icon-primary-inverted" size={24} />
          </div>
          <div className="px-2 py-2 bg-bg-primary-inverted opacity-70 rounded-full absolute top-1/2 -translate-y-1/2 right-2 hidden md:block">
            <BiChevronRight className="text-icon-primary-inverted" size={24} />
          </div>
        </div>
        <div className="w-[20%] md:flex  hidden flex-col gap-1  ">
          <div className="relative aspect-92/71 rounded-tr-lg overflow-hidden w-full">
            <Image
              src="/images/spacejoy-9M66C_w_ToM-unsplash.jpg"
              alt="Interior"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute left-2 bottom-2 px-4 py-2 bg-bg-primary-inverted opacity-70 rounded-4xl">
              <p className="text-text-primary-inverted  text-xs leading-5">
                Interior
              </p>
            </div>
          </div>
          <div className="relative aspect-92/71 overflow-hidden w-full">
            <Image
              src="/images/spacejoy-nEtpvJjnPVo-unsplash.jpg"
              alt="Interior"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute left-2 bottom-2 px-4 py-2 bg-bg-primary-inverted opacity-70 rounded-4xl">
              <p className="text-text-primary-inverted  text-xs leading-5">
                Bedroom
              </p>
            </div>
          </div>
          <div className="relative aspect-92/71 rounded-br-lg overflow-hidden w-full">
            <Image
              src="/images/backbone-L4iRkKL5dng-unsplash.jpg"
              alt="Interior"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute left-2 bottom-2 px-4 py-2 bg-bg-primary-inverted opacity-70 rounded-4xl">
              <p className="text-text-primary-inverted  text-xs leading-5">
                3D
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
