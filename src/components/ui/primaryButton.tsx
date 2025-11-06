import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
  onClick?: () => void;
  text: string;
  className?: string;
  type?: "submit" | "button" | "reset";
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClick,
  className,
  type,
}) => {
  return (
    <button
      className={cn(
        "px-4 py-2 bg-button-primary-default rounded-lg text-base font-medium text-text-primary-inverted leading-5 hover:bg-button-primary-hover active:bg-button-primary-active focus-visible:bg-button-primary-focus focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-border-primary-hover outline-none cursor-pointer transition-all duration-300",
        className
      )}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
