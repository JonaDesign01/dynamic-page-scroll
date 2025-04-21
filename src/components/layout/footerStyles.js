"use client";
import { styled } from "@mui/material";

export const FooterStyles = styled("footer")(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  backgroundColor: "#000000",
  paddingTop: 50,

  "& .tiff": {
    marginTop: 20,
  },

  "& .socials": {
    marginTop: 20,

    "svg path": {
      fill: "white",
    },
  },

  "& .contact": {
    color: "white",
    textTransform: "uppercase",
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 5,
  },

  ul: {
    li: {
      maxWidth: "fit-content",
    },
    p: {
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },

  hr: {
    marginTop: 30,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },

  "& .legal-block": {
    padding: "25px 0",
  },

  "& .foot-bottom": {
    fontSize: 14,
    opacity: "80%",
  },

  "& .foot-legal": {
    fontSize: 12,
    color: "#ACACAC",
  },

  "& .bottom-color": {
    backgroundColor: "#000000",
    p: {
      color: "white",
    },
  },

  "& .bottom-footer": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 10,
    padding: "20px 0",
  },

  "& .foot-flex": {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
  },

  "& .legal": {
    "&:hover": {
      textDecoration: "underline",
    },
  },

  //BREAKPOINTS

  [theme.breakpoints.up("sm")]: {},

  [theme.breakpoints.up("ipad")]: {},

  [theme.breakpoints.up("lg")]: {},

  [theme.breakpoints.up("xxl")]: {},
}));
