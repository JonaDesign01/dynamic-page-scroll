"use client";
import { styled } from "@mui/material";

interface HeaderStylesProps {
  isBlack: boolean;
}

export const MobileHeaderStyles = styled("header")<HeaderStylesProps>(
  ({ theme, isBlack }) => ({
    position: "fixed",
    top: 0,
    width: "100vw",
    zIndex: 999,

    backgroundColor: isBlack ? "white" : "transparent",

    "& .headerbar": {
      padding: "20px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },

    "& .logo-wrapper": {
      display: "flex",
      alignItems: "center",
      gap: 10,

      height: 25,
      "svg path": {
        fill: isBlack ? "black" : "white",
      },
    },

    button: {
      "svg path": {
        height: 25,
        width: 25,
        fill: isBlack ? "black" : "white",
      },
    },

    //BREAKPOINTS

    [theme.breakpoints.up("sm")]: {},

    [theme.breakpoints.up("ipad")]: {
      display: "none",
    },

    [theme.breakpoints.up("lg")]: {},
  })
);
