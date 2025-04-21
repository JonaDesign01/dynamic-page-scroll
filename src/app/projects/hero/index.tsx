"use client";

// styles
import { Container, Typography } from "@mui/material";
import { HeroStyles } from "./heroStyles";
import { SectionWrapper } from "@/components/layout/layoutStyles";
import { mediaItems } from "@/utils/mediaItems";
import Link from "next/link";

export default function Hero() {
  return (
    <SectionWrapper>
      <HeroStyles>
        <Container>
          <Typography className="title" variant="h1">
            Projects
          </Typography>
          <ul>
            {mediaItems.map((item, index) => (
              <li key={item.id}>
                <Link href={`/projects/${item.slug}`}>
                  <Typography variant="body1">{item.title}</Typography>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </HeroStyles>
    </SectionWrapper>
  );
}
