"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode } from "react";

type SmoothScrollWrapperProps = {
  children: ReactNode;
};

export default function SmoothScrollWrapper({
  children,
}: SmoothScrollWrapperProps) {
  // const lenis = useLenis(({ scroll }) => {
  //   // called every scroll
  // });

  return <ReactLenis root>{children}</ReactLenis>;
}
