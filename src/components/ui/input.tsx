import { cn } from "@/lib/utils";

const Input: React.FC<React.ComponentProps<"input">> = ({
  className,
  type,
  ...props
}) => {
  return (
    <input
      data-slot="input"
      className={cn(
        "py-2 rounded-lg border border-border-primary-default outline-none px-4 hover:border-border-primary-hover placeholder:text-text-primary-disable text-base font-normal text-text-primary-default",
        className
      )}
      type={type}
      {...props}
    />
  );
};

export default Input;
