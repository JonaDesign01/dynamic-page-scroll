"use client";
import { styled } from "@mui/material";

export const HeroStyles = styled("div")(({ theme }) => ({

"& .img-wrapper":{
  position: 'relative',
  height: 500,

  img:{
    objectFit: 'cover',
  },
},

"& .project-nav":{
  position: 'fixed',
  top: 100,
  left: "50%",
  transform: 'translateX(-50%)',
  width: "50vw",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: "2em",
  zIndex: 2,
},

"& .link":{
  color: "black",
},

"& .project-page-scroll-progress":{
  position: 'relative',
  flex: 2,
  height: 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: "rgba(231, 231, 231, 0.5)",
  borderRadius: "20px",
  overflow: 'hidden',
  backdropFilter: "blur(10px)"
},

"& .project-page-scroll-progress-bar":{
  position: 'absolute',
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "lightgrey",
  transform: 'scaleX(0%)',
  transformOrigin: "center left",
  willChange: 'transform',
  zIndex: -1,
},

"& .project-hero":{
  position: 'relative',
  width: "100wv",
  height: "100svh",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},

"& .project-footer":{
  position: 'relative',
  width: "100wv",
  height: "100svh",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},

"& .project-description":{
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
},

"& .project-footer-copy":{
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
},

"& .next-project-progress":{
  position: 'absolute',
  bottom: "25%",
  width: "50%",
  height: 4,
  backgroundColor: "lightgrey",
},

"& .next-project-progress-bar":{
  position: 'absolute',
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "black",
  transform: 'scaleX(0%)',
  transformOrigin: "center left",
  willChange: 'transform',
  zIndex: 2,
},

  //BREAKPOINTS

  [theme.breakpoints.up("sm")]: {},

  [theme.breakpoints.up("ipad")]: {
  
  },

  [theme.breakpoints.up("lg")]: {},
}));
