"use client";
import Link from "next/link";

import { Container, Typography, Button } from "@mui/material";
import { HeaderStyles } from "@/components/layout/headerStyles";
import A24Logo from "../../../public/assets/icons/a24Logo";

export default function Header() {
  return (
    <HeaderStyles>
      <Container variant="big">
        <div className="header">
          <div className="left-flex">
            <Link aria-label="logo" href={"/"}>
              <div className="logo-wrapper">
                <A24Logo />
              </div>
            </Link>
            <nav>
              <ul className="mainnav">
                <li>
                  <Link href="/projects">
                    <Typography variant="navlink" as="p">
                      PROJECTS
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <Typography variant="navlink" as="p">
                      ABOUT
                    </Typography>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <Link href="/" passHref>
              <Button className="contactbtn" variant="outlined" color="black">
                CONTACT
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </HeaderStyles>
  );
}
