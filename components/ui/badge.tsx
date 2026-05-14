"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm border px-2.5 py-0.5 text-xs font-medium uppercase tracking-widest transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-[#C99A3B]/40 bg-[#C99A3B]/10 text-[#C99A3B]",
        secondary:
          "border-[#2A2A2A] bg-[#2A2A2A] text-[#F5F2EA]/70",
        outline:
          "border-[#F5F2EA]/20 text-[#F5F2EA]/70",
        active:
          "border-[#C99A3B] bg-[#C99A3B] text-[#050505]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
