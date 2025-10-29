import Image from "next/image";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Card = () => {
  return (
    <div className="w-[320px] h-[328px] rounded-xl border border-border-primary-default shadow-small shrink-0">
      <Image
        src="/images/furniture-2660938.jpg"
        alt="Interior"
        loading="lazy"
        width={320}
        height={225}
        className="rounded-tr-xl rounded-tl-xl"
      />

      <div className="pt-2 flex px-4 justify-between items-center">
        <h6 className="text-xl leading-[26px] font-bold text-text-primary-default">
          $912,00
        </h6>
        <BiDotsHorizontalRounded
          size={24}
          className="text-icon-primary-default"
        />
      </div>

      <p className="text-sm leading-4 text-text-secondary-default font-medium py-2 px-4">
        2 bed | 1 baths | 1,000 ft
      </p>
      <p className="text-xs leading-4 text-text-secondary-default font-medium px-4">
        4140 Parker Rd. Allentown, New Mexico 31134
      </p>
    </div>
  );
};

export default Card;
