import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Program Details | Youth Business Loan Program",
  description: "Interest-free, educational micro-loans for youth ages 8-18.",
};

export default function BusinessLoanProgramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
