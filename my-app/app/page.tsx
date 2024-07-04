"use client";
import { Grid, ThemeProvider, Typography, useTheme } from "@mui/material";
import { buildTheme } from "../infrastructure/theme/theme";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={buildTheme()}>
        <Grid container textAlign={"center"} spacing={1} mt={2}>
          <Grid item xs={4}>
            <Typography variant="h1" color="primary">
              Hola
            </Typography>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}