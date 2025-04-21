"use client";
import { styled } from "@mui/material";

export const ErrorStyles = styled("section")(() => ({
  height: "93vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",

  "& h2, p": {
    color: "white",
    marginBottom: 16,
  },
}));
