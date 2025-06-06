
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-wine-700 text-white hover:bg-wine-800", // Primary color (60%)
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-wine-300 bg-background hover:bg-wine-50 hover:text-wine-700", // Secondary color (30%)
        secondary:
          "bg-wine-100 text-wine-700 hover:bg-wine-200", // Secondary color (30%)
        ghost: "hover:bg-wine-50 hover:text-wine-700", // Secondary interaction
        link: "text-wine-700 underline-offset-4 hover:underline", // Accent color (10%)
        wine: "bg-wine-600 text-white hover:bg-wine-700", // Primary variant
        outlineWine: "border border-wine-600 text-wine-600 hover:bg-wine-50", // Secondary variant
        contrast: "bg-amber-600 text-white hover:bg-amber-700", // Contrast color (10%)
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  // We don't need the as prop anymore since we're using a different approach
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
