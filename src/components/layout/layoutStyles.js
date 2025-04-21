"use client";
import { styled } from "@mui/material";

export const SectionWrapper = styled("section")(({ theme }) => ({
  padding: "100px 0px",
  position: "relative",

  //BREAKPOINTS
  [theme.breakpoints.up("ipad")]: {
    padding: "150px 0px",
  },
}));

export const SectionWrapperBottom = styled("section")(({ theme }) => ({
  padding: "0px 0px 100px",
  position: "relative",

  //BREAKPOINTS
  [theme.breakpoints.up("ipad")]: {
    padding: "0px 0px 150px",
  },
}));

export const SectionWrapperTop = styled("section")(({ theme }) => ({
  padding: "100px 0px 0px ",
  position: "relative",

  //BREAKPOINTS
  [theme.breakpoints.up("ipad")]: {
    padding: "150px 0px 0px",
  },
}));

export const SectionWrapperHero = styled("section")(({ theme }) => ({
  padding: "90px 0px 100px",
  position: "relative",

  //BREAKPOINTS
  [theme.breakpoints.up("ipad")]: {
    padding: "90px 0px 150px",
  },
}));
