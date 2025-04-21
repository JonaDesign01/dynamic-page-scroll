"use client";

// styles
import { Container, Grid, Typography } from "@mui/material";
import { HeroStyles } from "./heroStyles";
import Image from "next/image";
import { SectionWrapper } from "@/components/layout/layoutStyles";

export default function Hero() {
  return (
    <SectionWrapper>
      <HeroStyles>
        <Container>
          <Typography className="title" variant="h1">
            Home
          </Typography>
          <Grid container spacing="30px">
            <Grid size={12}>
              <div className="img-wrapper">
                <Image
                  src="/assets/images/brutalist.jpg"
                  alt="brutalist"
                  fill
                  sizes="100vw"
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </HeroStyles>
    </SectionWrapper>
  );
}
