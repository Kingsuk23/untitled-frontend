import { As } from "@/lib/as";
import { cn, unreachable } from "@/lib/utils";

type HeadingSize = "1" | "2" | "3" | "4" | "5" | "6";
type HeadingColor = "white" | "black" | "gray";

interface HeadingOwnProps {
  size?: HeadingSize;
  color?: HeadingColor;
}

type HeadingProps = As<"h1", "h2", "h3", "h4", "h5", "h6"> & HeadingOwnProps;

export const Heading = ({
  as: Tag = "h1",
  size = "1",
  className,
  children,
  color = "black",
  ...props
}: HeadingProps) => {
  return (
    <Tag
      className={cn(
        "font-bold",
        className,
        getSizesClassNames(size),
        getColorClassNames(color)
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

const getSizesClassNames = (size: HeadingSize) => {
  switch (size) {
    case "1":
      return "text-5xl leading-[3.7rem]";
    case "2":
      return "text-[2.5rem] leading-12";
    case "3":
      return "text-4xl leading-[3rem]";
    case "4":
      return "text-[2rem] leading-[2.7rem]";
    case "5":
      return "text-[1.8rem] leading-9";
    case "6":
      return "text-xl leading-[1.6rem]";
    default:
      return unreachable(size);
  }
};

const getColorClassNames = (color: HeadingColor) => {
  switch (color) {
    case "black":
      return "text-text-primary-default";
    case "white":
      return "text-text-primary-inverted";
    case "gray":
      return "text-text-secondary-default";
    default:
      return unreachable(color);
  }
};
