import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import "@/styles/globals.css";
import localFont from "next/font/local";
import MobileHeader from "@/components/layout/mobileHeader";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const cabinetGrotesk = localFont({
  src: "fonts/CabinetGrotesk-Variable.woff2",
  variable: "--font-cabinet-grotesk",
  display: "swap",
});

const melodrama = localFont({
  src: "fonts/Melodrama-Variable.woff2",
  variable: "--font-melodrama",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "A24 | %s",
    default: "A24",
  },
  description: "hier komt een uitleg over je site",
  // metadataBase: new URL("https://amai.immo.be"),

  // icons: {
  //   icon: '/favicon.ico',
  //   shortcut: '/shortcut-icon.png',
  //   apple: '/apple-icon.png',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        suppressHydrationWarning
        className={`${cabinetGrotesk.variable} ${melodrama.variable}`}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <MobileHeader />
            <Header />
            {children}
            <Footer />
            <CssBaseline />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
