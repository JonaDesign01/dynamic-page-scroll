import "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    black: {
      main: string;
    };

    white: {
      main: string;
    };
  }
  interface PaletteOptions {
    black: {
      main?: string;
    };

    white: {
      main?: string;
    };
  }

  interface TypographyVariants {
    navlink: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    navlink?: React.CSSProperties;
  }
}

declare module "@mui/material" {
  interface BreakpointOverrides {
    ipad: true;
    xxl: true;
  }

  interface ButtonPropsColorOverrides {
    black: true;
    white: true;
  }

  interface TypographyPropsVariantOverrides {
    navlink: true;
  }

  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    outlined: true;
    text: true;
  }

  interface IconButtonOwnProps {
    variant?: "primary" | "outlined" | "arrow" | "default";
  }

  interface ContainerOwnProps {
    variant?: "big" | "default";
  }

  interface TypographyOwnProps {
    as?: string;
  }

  interface ButtonOwnProps {
    linkAs?: string | null;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  }
}
