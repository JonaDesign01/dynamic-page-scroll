"use client";
import Image from "next/image";

// styles
import { Container, Grid, Typography } from "@mui/material";
import { HeroStyles } from "./heroStyles";
import { SectionWrapper } from "@/components/layout/layoutStyles";

//gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const heroText = new SplitType(".title", { types: "chars" });
      gsap.set(heroText.chars, {
        y: 400,
      });

      gsap.to(heroText.chars, {
        y: 0,
        duration: 1,
        stagger: 0.075,
        ease: "power4.out",
        delay: 1,
      });
    },
    { scope: container }
  );

  return (
    <SectionWrapper>
      <HeroStyles>
        <Container>
          <div ref={container}>
            <Typography className="title" variant="h1">
              About
            </Typography>
            <Grid container spacing="30px">
              <Grid size={12}>
                <div className="img-wrapper">
                  <Image
                    src="/assets/images/CW.jpg"
                    alt="CW"
                    fill
                    sizes="100vw"
                  ></Image>
                </div>
              </Grid>
              <Grid size={12}>
                <div className="img-wrapper">
                  <Image
                    src="/assets/images/SingSing.jpg"
                    alt="SingSing"
                    fill
                    sizes="100vw"
                  ></Image>
                </div>
              </Grid>
              <Grid size={12}>
                <div className="img-wrapper">
                  <Image
                    src="/assets/images/DS.jpg"
                    alt="DS"
                    fill
                    sizes="100vw"
                  ></Image>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </HeroStyles>
    </SectionWrapper>
  );
}
