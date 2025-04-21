import { ErrorStyles } from "@/components/error/errorStyles";
import { Button, Typography, Container } from "@mui/material";
import Link from "next/link";

export default async function NotFound() {
  return (
    <ErrorStyles>
      <Container>
        <div className="content">
          <Typography variant="h3">404 - Not Found</Typography>
          <Typography variant="body1">
            DE OPGEVRAAGDE PAGINA WERD NIET GEVONDEN.
          </Typography>
          <Link href="/" passHref>
            <Button variant="primary">Homepagina</Button>
          </Link>
        </div>
      </Container>
    </ErrorStyles>
  );
}
