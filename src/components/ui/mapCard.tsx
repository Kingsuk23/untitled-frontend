import Link from "next/link";
import { BiCar } from "react-icons/bi";

const MapCard = () => {
  return (
    <div className="w-[294px] h-[230px]  md:flex border border-border-primary-default overflow-hidden rounded-xl hidden flex-col">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d236269.57132992896!2d88.3917268!3d22.2888949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1761889877195!5m2!1sen!2sin"
        className="border-b border-border-primary-default"
        width={294}
        height={190}
        loading="lazy"
      ></iframe>

      <div className="h-10 flex items-center gap-2">
        <BiCar size={24} className="text-icon-primary-default ml-4" />
        <Link
          href="/"
          className="text-text-primary-default leading-6 text-base font-normal underline"
        >
          Add a commute
        </Link>
      </div>
    </div>
  );
};

export default MapCard;
