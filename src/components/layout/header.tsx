"use client";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";

import { Container, Typography, Button } from "@mui/material";
import { HeaderStyles } from "@/components/layout/headerStyles";
import A24Logo from "../../../public/assets/icons/a24Logo";

export default function Header() {
  //Page transition effect
  const router = useTransitionRouter();

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0)",
        },
        {
          opactity: 0.2,
          transform: "translateY(-35%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

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
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/projects", {
                        onTransitionReady: slideInOut,
                      });
                    }}
                    href="/projects"
                  >
                    <Typography variant="navlink" as="p">
                      PROJECTS
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/about", {
                        onTransitionReady: slideInOut,
                      });
                    }}
                    href="/about"
                  >
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
