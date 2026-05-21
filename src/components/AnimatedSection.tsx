"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedSection({ children, className }: Props) {
  return <div className={className}>{children}</div>;
}
