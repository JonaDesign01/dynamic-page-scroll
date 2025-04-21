"use client";
import { styled } from "@mui/material";

export const HeaderStyles = styled("header")(({ theme }) => ({
   
  display: "none",

  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 999,
  backgroundColor: "white",

  "& .header": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    p: {
      color:  "black",
    },
  },

  "& .left-flex": {
    display: "flex",
    alignItems: "center",
    gap: 70,
  },

  "& .logo-wrapper": {
    "svg path": {
      fill: "black",
  },
},

  "& .mainnav": {
    display: "flex",
    alignItems: "center",
    gap: 50,
  },

  "nav >ul >li": {
    padding: "30px 0",

    a: {
      position: "relative",
      textDecoration: "none",

      "&::before": {
        content: "''",
        position: "absolute",
        display: "block",
        width: "100%",
        height: 1,
        bottom: -5,
        left: 0,
        backgroundColor:  "black",
        transform: "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.3s ease",
      },

      "&:hover": {
        "&::before": {
          transform: "scaleX(1)",
          transformOrigin: "left",
        },
      },

      // When the hover state is removed, the line animates out to the right
      "&:not(:hover)::before": {
        transform: "scaleX(0)",
        transformOrigin: "right",
      },
    },
  },

    "& .contactbtn": {
      color: "black",
    },
  

    //BREAKPOINTS

    [theme.breakpoints.up("sm")]: {},

    [theme.breakpoints.up("ipad")]: {
      display: "block",
    },

    [theme.breakpoints.up("lg")]: {},

    [theme.breakpoints.up("xl")]: {},
  })
);
