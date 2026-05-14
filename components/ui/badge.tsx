"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest transition-colors border",
  {
    variants: {
      variant: {
        default:   "border-white/15 bg-white/6 text-white/60",
        active:    "border-white text-white bg-white/10",
        light:     "border-[#e5e5e5] bg-[#f5f5f3] text-[#737373]",
        outline:   "border-white/10 text-white/40",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
