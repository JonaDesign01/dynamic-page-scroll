"use client";
import { styled } from "@mui/material";

export const HeroStyles = styled("div")(({ theme }) => ({
  "& .img-wrapper":{
    position: 'relative',
    height: 800,
 
    img:{
     objectFit: 'cover',
    }
  },

  h1:{
    marginBottom: 50
  },

  "& .title":{
    lineHeight: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
  },

  ".title .char": {
    position: 'relative',
    willChange: 'transform',
  },
  
  //BREAKPOINTS

  [theme.breakpoints.up("sm")]: {},

  [theme.breakpoints.up("ipad")]: {
  
  },

  [theme.breakpoints.up("lg")]: {},
}));
