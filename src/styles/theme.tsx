"use client";

import { createTheme } from "@mui/material/styles";

let theme = createTheme({});

theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#2A2B2C",
    },
    black: {
      main: "#000000",
    },
    white: {
      main: "#FFFFFF",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        // disableFocusRipple: true,
        // disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "inherit",
          lineHeight: 1,
        },
      },
      variants: [
        {
          props: { variant: "primary" },

          style: {
            backgroundColor: "white",
            border: "1px solid white",
            color: "#000000",
            fontWeight: 600,
            borderRadius: 0,
            padding: "15px 30px",

            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            },
          },
        },
        {
          props: { variant: "secondary" },

          style: {
            backgroundColor: "#000000",
            border: "1px solid #000000",
            color: "white",
            fontWeight: 600,
            borderRadius: 0,
            padding: "15px 30px",

            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            },
          },
        },
        {
          props: { variant: "outlined" },

          style: {
            color: "white",
            fontWeight: 600,
            borderRadius: 0,
            padding: "15px 30px",
          },
        },
        {
          props: { variant: "text" },

          style: {
            color: "white",
          },
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: {},
      },
      variants: [
        {
          props: { variant: "primary" },

          style: {},
        },
        {
          props: { variant: "outlined" },

          style: {},
        },
        {
          props: { variant: "arrow" },

          style: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {},
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderRadius: 0,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "24px",
          paddingRight: "24px",

          maxWidth: "2000px !important",

          // Use @media query for ipad and up
          "@media (min-width: 992px)": {
            paddingLeft: "48px",
            paddingRight: "48px",
          },
        },
      },
      variants: [
        {
          props: { variant: "big" },
          style: {
            maxWidth: "1520px !important",
          },
        },
      ],
    },

    MuiAccordion: {
      styleOverrides: {
        root: {},
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {},
        expandIconWrapper: {
          flexShrink: 0,
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {},
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {},
      },
    },
    MuiAutocomplete: {
      defaultProps: {},
      styleOverrides: {
        root: {},
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {},
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {},
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: "100%",
          overflowX: "hidden",
          backgroundImage: "none",
        },
      },
    },
  },
  typography: {
    fontFamily: "var(--font-cabinet-grotesk), sans-serif",
    h1: {
      fontFamily: "var(--font-cabinet-grotesk), sans-serif",
      fontSize: "clamp(2.375rem, 1.25rem + 3.6vw, 4.625rem)", //min: 34px max: 78px
      letterSpacing: "-0.03em",
      lineHeight: 1,
      fontWeight: 700,
    },
    h2: {
      fontFamily: "var(--font-cabinet-grotesk), sans-serif",
      fontSize: "clamp(2.625rem, 0.1875rem + 7.8vw, 7.5rem)", //min: 42px max: 120px
      fontWeight: 700,
      color: "#000000",
    },
    h3: {
      fontFamily: "var(--font-cabinet-grotesk), sans-serif",
      fontSize: "clamp(1.5rem, 1.0625rem + 1.4vw, 2.375rem)", //min: 24px max: 38px
      letterSpacing: "-0.025em",
      lineHeight: 1,
      fontWeight: 700,
    },
    h6: {
      fontFamily: "var(--font-cabinet-grotesk), sans-serif",
      fontSize: 14,
      lineHeight: 1,
      fontWeight: 500,
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: 14,
      textTransform: "uppercase",
      fontWeight: 600,
      lineHeight: 1.5,
      color: "#D4AF37",
    },
    navlink: {
      fontFamily: "var(--font-cabinet-grotesk), sans-serif",
      fontSize: 15,
      color: "white",
    },
  },
  spacing: [4, 8, 16, 24, 48, 64, 80, 128],
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      ipad: 992,
      lg: 1200,
      xl: 1536,
      xxl: 1700,
    },
  },
});

// theme = responsiveFontSizes(theme);

export default theme;
