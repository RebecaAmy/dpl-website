"use client";
import { Grid, ThemeProvider, Typography, useTheme } from "@mui/material";
import { buildTheme } from "../infrastructure/theme/theme";

export default function Home() {
  return (
    <>
      <Grid container>
        <Grid item>
          <Typography>Hola</Typography>
        </Grid>
        <Grid item >
          <img src="public/dpl-logo.svg" alt="sdgs" />
        </Grid>
      </Grid>
    </>
  );
}