import { cn, unreachable } from "@/lib/utils";

type ParagraphSize = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
type ParagraphColor = "white" | "black" | "gray";

interface ParagraphOwnProps {
  size?: ParagraphSize;
  color?: ParagraphColor;
}

type ParagraphAsP = ParagraphOwnProps &
  React.HTMLAttributes<HTMLParagraphElement> & {
    asSpan?: false;
  };

type ParagraphAsSpan = ParagraphOwnProps &
  React.HTMLAttributes<HTMLSpanElement> & {
    asSpan: true;
  };

type ParagraphProps = ParagraphAsP | ParagraphAsSpan;

export const Paragraph = ({
  asSpan = false,
  className,
  children,
  size = "6",
  color = "black",
  ...props
}: ParagraphProps) => {
  const Tag = asSpan ? "span" : "p";
  return (
    <Tag
      className={cn(
        className,
        getColorClassNames(color),
        getSizesClassNames(size)
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

const getSizesClassNames = (size: ParagraphSize) => {
  switch (size) {
    case "1":
      return "text-lg leading-6 font-medium";
    case "2":
      return "text-base leading-5 font-medium";
    case "3":
      return "text-sm leading-4 font-medium";
    case "4":
      return "text-xs leading-4 font-medium";
    case "5":
      return "text-lg leading-[1.75rem] font-normal";
    case "6":
      return "text-base leading-6 font-normal";
    case "7":
      return "text-sm leading-5 font-normal";
    case "8":
      return "text-xs leading-5 font-normal";
    default:
      return unreachable(size);
  }
};

const getColorClassNames = (color: ParagraphColor) => {
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
