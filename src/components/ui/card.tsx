import { cn } from "@/lib/utils";
import Image from "next/image";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Heading } from "./heading";
import { Paragraph } from "./paragraph";

interface CardProps {
  className?: string;
}

const Card: React.FC<CardProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "w-[320px] h-fit rounded-xl border border-border-primary-default shadow-small shrink-0 cursor-pointer pb-4 overflow-hidden",
        className
      )}
    >
      <div className="w-full h-[225px] relative rounded-tr-xl rounded-tl-xl">
        <Image
          src="/images/furniture-2660938.jpg"
          alt="Interior"
          loading="lazy"
          fill
          className=" object-cover"
        />
      </div>

      <div className="pt-2 flex px-4 justify-between items-center">
        <Heading as="h6" size="6">
          $912,00
        </Heading>
        <BiDotsHorizontalRounded
          size={24}
          className="text-icon-primary-default"
        />
      </div>

      <Paragraph className="py-2 px-4" size="3" color="gray">
        2 bed | 1 baths | 1,000 ft
      </Paragraph>
      <Paragraph className="px-4" size="4" color="gray">
        4140 Parker Rd. Allentown, New Mexico 31134
      </Paragraph>
    </div>
  );
};

export default Card;
