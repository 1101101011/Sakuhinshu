import { cn } from "@/lib/utils";

export function SubContainer({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="sub-container"
      className={cn(
        "border border-neutral-400 relative",
        className,
      )}
      {...props}
    />
  );
}
