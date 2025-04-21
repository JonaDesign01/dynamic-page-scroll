"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SetStateAction, useState } from "react";

//Styles
import {
  Container,
  Drawer,
  IconButton,
  Collapse,
  Stack,
  Typography,
} from "@mui/material";
import { MobileHeaderStyles } from "@/components/layout/mobileHeaderStyles";
import { MobileCardStyles } from "@/components/layout/mobileCardStyles";

//Icons
import HamburgerIcon from "../../../public/assets/icons/hamburgerIcon";
import CloseIcon from "../../../public/assets/icons/closeIcon";
import ExpandIcon from "../../../public/assets/icons/expandIcon";
import CollapseIcon from "../../../public/assets/icons/collapseIcon";
import A24Logo from "../../../public/assets/icons/a24Logo";

export default function MobileHeader() {
  const pathname = usePathname();
  const darkPages = ["/aanbod/films", "/aanbod/series", "/contact"];
  const isBlack = darkPages.includes(pathname);

  const [open, setOpen] = useState<boolean | undefined>(false);

  return (
    <MobileHeaderStyles isBlack={isBlack}>
      <Container>
        <div className="headerbar">
          <Link aria-label="logo" href={"/"} onClick={() => setOpen(false)}>
            <div className="logo-wrapper">
              <A24Logo />
            </div>
          </Link>

          <IconButton aria-label="hamburger" onClick={() => setOpen(!open)}>
            <HamburgerIcon />
          </IconButton>

          <Drawer
            sx={{
              "& .MuiPaper-root": {
                height: "100vh",
                width: "100vw",
                padding: "20px",
                backgroundColor: "#000000",
              },
            }}
            anchor="right"
            hideBackdrop={false}
            open={open}
            onClose={() => setOpen(false)}
          >
            <MenuCard onClose={() => setOpen(false)} />
          </Drawer>
        </div>
      </Container>
    </MobileHeaderStyles>
  );
}

export function MenuCard({
  onClose,
}: {
  onClose: (value: SetStateAction<boolean | undefined>) => void;
}) {
  const [dropdownOpen, setDropdownOpen] = useState<boolean | undefined>();
  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <MobileCardStyles>
      <Container>
        <div className="headerbar">
          <Link
            aria-label="logo"
            className="mainlogo"
            href={"/"}
            onClick={() => onClose(false)}
          >
            <div className="logo">
              <A24Logo />
            </div>
          </Link>

          <div className="close">
            <IconButton
              variant="outlined"
              aria-label="sluiten"
              onClick={() => onClose(false)}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </div>

        <ul className="navigation">
          <li className="el" onClick={handleDropdown}>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography variant="navlink" as="p">
                AANBOD
              </Typography>
              {dropdownOpen ? <CollapseIcon /> : <ExpandIcon />}
            </Stack>
          </li>
          <Collapse
            className="dropdown"
            in={dropdownOpen}
            timeout="auto"
            unmountOnExit
          >
            <ul>
              <li>
                <Link href="/aanbod/films" onClick={() => onClose(false)}>
                  <Typography className="first" variant="body1" as="p">
                    FILMS
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="/aanbod/series" onClick={() => onClose(false)}>
                  <Typography variant="body1" as="p">
                    SERIES
                  </Typography>
                </Link>
              </li>
            </ul>
          </Collapse>

          <li className="el">
            <Link href="/studio" onClick={() => onClose(false)}>
              <Typography variant="navlink" as="p">
                STUDIO
              </Typography>
            </Link>
          </li>
          <li className="el">
            <Link href="/about" onClick={() => onClose(false)}>
              <Typography variant="navlink" as="p">
                ABOUT
              </Typography>
            </Link>
          </li>
          <li className="el">
            <Link href="/contact" onClick={() => onClose(false)}>
              <Typography variant="navlink" as="p">
                CONTACT
              </Typography>
            </Link>
          </li>
        </ul>
      </Container>
    </MobileCardStyles>
  );
}
