import Image from "next/image";
import { Paragraph } from "./paragraph";
import { Heading } from "./heading";

interface serviceCardProps {
  Heading: string;
  Paragraph: string;
  icon: string;
}

const ServiceCard: React.FC<serviceCardProps> = ({
  Heading: HeadingText,
  Paragraph: ParagraphText,
  icon,
}) => {
  return (
    <div className="w-[400px] md:h-[180px] p-4 border border-border-primary-default rounded-xl flex flex-col gap-2 hover:border-border-primary-hover cursor-pointer shrink grow h-fit">
      <div className="flex justify-between  items-center">
        <Heading as="h6" size="6" className="text-lg w-[255px]">
          {HeadingText}
        </Heading>
        <Image alt="icon" src={icon} width={48} height={48} loading="lazy" />
      </div>
      <Paragraph color="gray">{ParagraphText}</Paragraph>
    </div>
  );
};

export default ServiceCard;
