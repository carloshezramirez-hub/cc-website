"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] disabled:pointer-events-none disabled:opacity-40 uppercase tracking-widest text-[11px]",
  {
    variants: {
      variant: {
        default:   "bg-white text-[#050505] hover:bg-white/90",
        outline:   "border border-white/20 text-white/70 hover:border-white/50 hover:text-white",
        ghost:     "text-white/50 hover:text-white hover:bg-white/5",
        dark:      "bg-[#111111] text-white/80 hover:bg-[#1a1a1a] border border-white/8",
        invert:    "bg-[#050505] text-white border border-white/15 hover:bg-[#111111]",
        secondary: "bg-[#f5f5f3] text-[#111111] hover:bg-white border border-[#e5e5e5]",
        "outline-dark": "border border-[#e5e5e5] text-[#111111] hover:border-[#111111]",
      },
      size: {
        sm:      "h-8  px-4   text-[10px]",
        default: "h-10 px-5   text-[11px]",
        lg:      "h-12 px-7   text-[11px]",
        xl:      "h-13 px-9   text-xs",
        icon:    "h-9  w-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
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
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
