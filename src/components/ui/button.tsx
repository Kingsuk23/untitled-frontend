import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "px-4 py-2 rounded-lg text-base font-medium leading-5 outline-none cursor-pointer transition-all duration-300 focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-border-primary-focus relative flex gap-2 justify-center items-center",
  {
    variants: {
      variant: {
        default:
          "bg-button-primary-default text-text-primary-inverted hover:bg-button-primary-hover active:bg-button-primary-active focus-visible:bg-button-primary-focus",
        outline:
          "hover:before:bg-button-primary-hover border-border-primary-hover border text-text-primary-default overflow-hidden bg-white before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-button-primary-hover before:transition-all before:duration-300 hover:text-white hover:before:left-0 hover:before:w-full focus-visible:before:bg-button-primary-focus focus-visible:text-white focus-visible:shadow-button-primary-focus focus-visible:before:left-0 focus-visible:before:w-full",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Button = ({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
};

export default Button;
