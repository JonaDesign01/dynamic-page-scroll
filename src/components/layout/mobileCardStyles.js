"use client";
import { styled } from "@mui/material";

export const MobileCardStyles = styled("div")(({ theme }) => ({
  "& .headerbar": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  p: {
    fontSize: "clamp(1.5rem, 1.0625rem + 1.4vw, 2.375rem)", //min: 24px max: 38px,
  },

  "& .navigation": {
    margin: "50px 0",
    display: "flex",
    flexDirection: "column",
    gap: 20,

    svg: {
      color: theme.palette.white.main,
      height: 20,
    },
  },

  "& .dropdown": {
    p: {
      margin: "15px 0 10px",
      color: "white",
    },

    "& .first": {
      marginTop: 0,
    },

    "& .MuiCollapse-wrapperInner": {
      li: {
        marginBottom: 10,
        marginLeft: 15,
      },
    },
  },

  "& .contactbtn": {
    marginTop: 20,
  },

  "& .close": {
    svg: {
      stroke: theme.palette.white.main,
    },
  },

  //BREAKPOINTS

  [theme.breakpoints.up("sm")]: {},

  [theme.breakpoints.up("ipad")]: {},

  [theme.breakpoints.up("lg")]: {},
}));
