import { Paragraph } from "./paragraph";
import { Heading } from "./heading";
import { FC, SVGProps } from "react";
import { Card, CardContent, CardHeader } from "./card";

interface serviceCardProps {
  title: string;
  subtitle: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
}

const ServiceCard: React.FC<serviceCardProps> = ({ title, subtitle, Icon }) => {
  return (
    <Card className="w-[400px] md:h-[180px] p-4 flex flex-col gap-2 hover:border-border-primary-hover cursor-pointer shrink grow h-fit">
      <CardHeader className="flex justify-between items-center">
        <Heading as="h6" size="6">
          {title}
        </Heading>
        <Icon />
      </CardHeader>
      <CardContent>
        <Paragraph color="gray">{subtitle}</Paragraph>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
