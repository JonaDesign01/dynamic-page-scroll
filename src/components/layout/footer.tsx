"use client";
import Link from "next/link";
import { Container, Divider, Grid, Typography } from "@mui/material";
import { FooterStyles } from "@/components/layout/footerStyles";
import A24Logo from "../../../public/assets/icons/a24Logo";
import TiffLogo from "../../../public/assets/icons/tiffLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterStyles>
      <Container>
        <Grid container spacing="30px">
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Link aria-label="logo" href={"/"}>
              <div className="logo-wrapper">
                <A24Logo />
              </div>
            </Link>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/?locale=nl_BE"
                  aria-label="facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Typography variant="navlink" as="p">
                    FACEBOOK
                  </Typography>
                </a>
              </li>
              <li>
                <a
                  href="https://nl.linkedin.com/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Typography variant="navlink" as="p">
                    LINKEDIN
                  </Typography>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Typography variant="navlink" as="p">
                    INSTAGRAM
                  </Typography>
                </a>
              </li>
            </ul>
            <div className="tiff">
              <a
                href="https://www.tiff.net/"
                aria-label="Tiff"
                target="_blank"
                rel="noreferrer"
              >
                <TiffLogo />
              </a>
            </div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <ul>
              <li>
                <Link href="/aanbod/films">
                  <Typography variant="navlink" as="p">
                    Films
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="/aanbod/series">
                  <Typography variant="navlink" as="p">
                    Series
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="/studio">
                  <Typography variant="navlink" as="p">
                    Studio
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <Typography variant="navlink" as="p">
                    About
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <Typography variant="navlink" as="p">
                    Contact
                  </Typography>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Typography className="contact" variant="body1">
              Contact Us
            </Typography>
            <ul>
              <li>
                <a href={"mailto:welkom@A24Studio.be"}>
                  <Typography variant="navlink" as="p">
                    welkom@A24Studio.be
                  </Typography>
                </a>
              </li>
              <li>
                <Link href={"tel:04445555"}>
                  <Typography variant="navlink" as="p">
                    04 444 5555
                  </Typography>
                </Link>
              </li>
              <li>
                <a href="/">
                  <Typography variant="navlink" as="p">
                    Ocean Boulevard, <br />
                    2900 Los Angeles
                  </Typography>
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>

        <Divider />

        <div className="legal-block">
          <Typography className="foot-legal" variant="body1">
            Onderworpen aan de deontologische code BIV Toezichthoudende
            autoriteit: Beroepsinstituut van Vastgoedmakelaars (BIV),
            Luxemburgstraat 16B, 1000 Brussel. Lid van de Confederatie van
            Immobiliënberoepen Vlaanderen Erkend vastgoedmakelaar-bemiddelaar
            Stefan Bastiaensen - BIV 504.187 - België Erkend schatter-expert
            voor VLABEL met identificatienummer: 005276038144 Nathalie Kockx -
            BIV 514.292 - België Erkend schatter-expert voor VLABEL met
            identificatienummer: 005275110479 Katia Leemans - BIV Vennootschap:
            Sensum Vastgoed BV Maatschappelijke zetel: Nerviërslei 6 - 2900
            SCHOTEN BTW nr: 0553.612.949 Ondernemingsnr.: 0553.612.949 Polisnr.
            verzekering: BA en borgstelling via NV AXA Belgium (polisnr.
            730.390.160) Derdenrekening: BE46 1431 0859 4736
          </Typography>
        </div>
      </Container>

      <div className="bottom-color">
        <Container>
          <div className="bottom-footer">
            <div className="foot-flex">
              <Typography className="foot-bottom legal" variant="body1">
                © {currentYear} Supersonic
              </Typography>
            </div>
            <div className="foot-flex">
              <Link href="/privacy">
                <Typography className="foot-bottom legal" variant="body1">
                  Privacy
                </Typography>
              </Link>
              <Typography className="foot-bottom" variant="body1">
                •
              </Typography>
              <Link href="/disclaimer">
                <Typography className="foot-bottom legal" variant="body1">
                  Disclaimer
                </Typography>
              </Link>
              <Typography className="foot-bottom" variant="body1">
                •
              </Typography>
              <Link href="/cookies">
                <Typography className="foot-bottom legal" variant="body1">
                  Cookies
                </Typography>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </FooterStyles>
  );
}
