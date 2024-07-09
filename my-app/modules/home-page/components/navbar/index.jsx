"use client";
import { buildTheme } from "@/infrastructure/theme/theme";
import { Grid, ThemeProvider } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const NavBar = () => {
  return (
    <ThemeProvider theme={buildTheme()}>
      <AppBar position="static" color="white" sx={{boxShadow: "none"}}>
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <img
                style={{ maxWidth: "50px", transform: "translateX(50px)" }}
                src="DPL-logo-black.svg"
                alt="logo"
              />
            </Grid>

            <Grid item xs />
            <Grid item>
              <Grid container justifyContent="center" spacing={6}>
                <Grid item>
                  <Typography variant="h4Bold" color="primary">
                    Inicio
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h4Bold" color="primary">
                    Especialidades
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h4Bold" color="primary">
                    Contacto
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs />
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
