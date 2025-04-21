"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

//gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef, useState } from "react";

// styles
import { Button, Container, Typography } from "@mui/material";
import { HeroStyles } from "./heroStyles";
import ArrowLeftIcon from "../../../../../public/assets/icons/arrowLeftIcon";
import ArrowRightIcon from "../../../../../public/assets/icons/arrowRightIcon";

gsap.registerPlugin(useGSAP);

interface HeroProps {
  project: any;
  nextProject: any;
  prevProject: any;
}

export default function Hero({ project, nextProject, prevProject }: HeroProps) {
  const container = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const projectNavRef = useRef<HTMLDivElement | null>(null);
  const projectFooterRef = useRef<HTMLDivElement | null>(null);

  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const nextProjectProgressBarRef = useRef<HTMLDivElement | null>(null);

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [shouldUpdateProgress, setShouldUpdateProgress] = useState(true);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(".project-nav", {
        opacity: 0,
        y: -100,
      });
      gsap.to(".project-nav", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.25,
        ease: "power3.out",
      });

      gsap.set(".description-text", {
        opacity: 0,
      });
      gsap.to(".description-text", {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });

      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          if (shouldUpdateProgress && progressBarRef.current) {
            gsap.set(progressBarRef.current, { scaleX: self.progress });
          }
        },
      });

      ScrollTrigger.create({
        trigger: projectFooterRef.current,
        start: "top top",
        end: `+=${window.innerHeight * 3}px`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,

        onEnter: () => {
          if (projectNavRef.current && !isTransitioning) {
            gsap.to(projectNavRef.current, {
              y: -100,
              duration: 0.5,
              ease: "power2.inOut",
            });
          }
        },

        onLeaveBack: () => {
          if (projectNavRef.current && !isTransitioning) {
            gsap.to(projectNavRef.current, {
              y: 0,
              duration: 0.5,
              ease: "power2.inOut",
            });
          }
        },

        onUpdate: (self) => {
          if (nextProjectProgressBarRef.current && shouldUpdateProgress) {
            gsap.set(nextProjectProgressBarRef.current, {
              scaleX: self.progress,
            });
          }

          if (self.progress >= 1 && !isTransitioning) {
            setShouldUpdateProgress(false);
            setIsTransitioning(true);

            gsap
              .timeline()
              .to([".footer-text", ".next-project-progress"], {
                opacity: 0,
                duration: 0.3,
                ease: "power2.inOut",
              })
              .call(() => router.push(`/projects/${nextProject.slug}`));
          }
        },
      });

      return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    },
    {
      scope: container,
      dependencies: [nextProject.slug, isTransitioning, shouldUpdateProgress],
    }
  );

  return (
    <HeroStyles>
      <Container>
        <div ref={container}>
          <div ref={projectNavRef} className="project-nav">
            <Button startIcon={<ArrowLeftIcon />} className="link">
              <Link href={`/projects/${prevProject.slug}`}>Previous</Link>
            </Button>
            <div className="project-page-scroll-progress">
              <Typography variant="body1">{project.title}</Typography>
              <div
                ref={progressBarRef}
                className="project-page-scroll-progress-bar"
              />
            </div>
            <Button endIcon={<ArrowRightIcon />} className="link">
              <Link href={`/projects/${nextProject.slug}`}>Next</Link>
            </Button>
          </div>

          <div className="project-hero">
            <div className="project-description">
              <Typography variant="h1">{project.title}</Typography>
              <Typography className="description-text" variant="body1">
                {project.director}
              </Typography>
            </div>
          </div>

          <div className="project-images">
            <div className="img-wrapper">
              <Image src={project.image} alt="" fill sizes="100vw"></Image>
            </div>
          </div>

          <div ref={projectFooterRef} className="project-footer">
            <div className="project-footer-copy">
              <Typography component="h3" variant="h1">
                {nextProject.title}
              </Typography>
              <Typography className="footer-text" variant="body1">
                Next project
              </Typography>
            </div>

            <div className="next-project-progress">
              <div
                ref={nextProjectProgressBarRef}
                className="next-project-progress-bar"
              />
            </div>
          </div>
        </div>
      </Container>
    </HeroStyles>
  );
}
