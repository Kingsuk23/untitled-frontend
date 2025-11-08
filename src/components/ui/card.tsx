import { cn } from "@/lib/utils";

const Card = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card"
      className={cn(
        "rounded-lg border border-border-primary-default bg-bg-primary-default",
        className
      )}
      {...props}
    />
  );
};

const CardHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div data-slot="card-header" className={cn("", className)} {...props} />
  );
};

const CardTitle = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
};

const CardDescription = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
};

const CardAction = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
};

const CardContent = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div data-slot="card-content" className={cn("", className)} {...props} />
  );
};

const CardFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
};

export {
  Card,
  CardTitle,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
};
