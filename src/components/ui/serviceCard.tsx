import Image from "next/image";

interface serviceCardProps {
  Heading: string;
  Paragraph: string;
  icon: string;
}

const ServiceCard: React.FC<serviceCardProps> = ({
  Heading,
  Paragraph,
  icon,
}) => {
  return (
    <div className="w-[400px] md:h-[180px] p-4 border border-border-primary-default rounded-xl flex flex-col gap-2 hover:border-border-primary-hover cursor-pointer shrink grow h-fit">
      <div className="flex justify-between  items-center">
        <p className="leading-6 text-text-primary-default font-medium text-lg w-[255px]">
          {Heading}
        </p>
        <Image alt="icon" src={icon} width={48} height={48} loading="lazy" />
      </div>
      <p className="leading-6 text-base font-normal text-text-secondary-default">
        {Paragraph}
      </p>
    </div>
  );
};

export default ServiceCard;
