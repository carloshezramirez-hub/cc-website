"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A3B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest text-xs",
  {
    variants: {
      variant: {
        default:
          "bg-[#C99A3B] text-[#050505] hover:bg-[#9A6A2F] shadow-[0_0_20px_rgba(201,154,59,0.25)]",
        outline:
          "border border-[#C99A3B] text-[#C99A3B] hover:bg-[#C99A3B] hover:text-[#050505]",
        ghost:
          "text-[#F5F2EA] hover:text-[#C99A3B] hover:bg-white/5",
        secondary:
          "bg-[#2A2A2A] text-[#F5F2EA] hover:bg-[#3A3A3A] border border-[#3A3A3A]",
        destructive:
          "bg-red-900 text-red-100 hover:bg-red-800",
        link:
          "text-[#C99A3B] underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-13 px-8 py-3 text-sm",
        xl: "h-14 px-10 py-4 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
