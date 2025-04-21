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
  marginBottom: 50,
 },

  //BREAKPOINTS

  [theme.breakpoints.up("sm")]: {},

  [theme.breakpoints.up("ipad")]: {
  
  },

  [theme.breakpoints.up("lg")]: {},
}));
