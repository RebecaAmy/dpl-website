"use client";
import { buildTheme } from "@/infrastructure/theme/theme";
import { Grid, styled, ThemeProvider } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Link from "next/link";

const NavBar = () => {
  const StyledLink = styled(Link)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  }));

  return (
    <ThemeProvider theme={buildTheme()}>
      <AppBar position="static" color="white" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <Grid
            container
            alignItems="center"
            sx={{
              marginBottom: { xs: "0.5rem", sm: 0 },
              marginTop: { xs: "0.5rem", sm: 0 },
            }}
          >
            <Grid item sm={2} xs={2} container justifyContent={"center"}>
              <img
                style={{ maxWidth: "40px" }}
                src="DPL-logo-black.svg"
                alt="logo"
              />
            </Grid>

            <Grid item container lm={10} sm={10} xs={10} spacing={2}>
              <Grid item sm={4} xs={4} container justifyContent={"center"}>
                <StyledLink
                  href="mailto:info.dplbarcelona@gmail.com"
                  target="_blank"
                >
                  <Grid item mr={1}>
                    <MailOutlineIcon
                      color="primary"
                      sx={{ fontSize: { xs: 30, sm: 30 } }}
                    />
                  </Grid>
                  <Grid item sx={{ display: { xs: "none", sm: "block" } }}>
                    <Typography variant="h4Bold" color="primary">
                      info.dplbarcelona@gmail.com
                    </Typography>
                  </Grid>
                </StyledLink>
              </Grid>
              <Grid item sm={4} xs={4} container justifyContent={"center"}>
                <StyledLink
                  href="https://wa.me/34613462282?text=Hola!%20Me%20gustaría%20reservar%20una%20consulta."
                  target="_blank"
                >
                  <Grid item mr={1}>
                    <WhatsAppIcon
                      color="primary"
                      sx={{ fontSize: { xs: 30, sm: 30 } }}
                    />
                  </Grid>
                  <Grid item sx={{ display: { xs: "none", sm: "block" } }}>
                    <Typography variant="h4Bold" color="primary">
                      613 46 22 82
                    </Typography>
                  </Grid>
                </StyledLink>
              </Grid>
              <Grid item container sm={4} xs={4} justifyContent={"center"}>
                <Grid item mr={1}>
                  <LocalPhoneIcon
                    color="primary"
                    sx={{ fontSize: { xs: 30, sm: 30 } }}
                  />
                </Grid>
                <Grid item sx={{ display: { xs: "none", sm: "block" } }}>
                  <Typography variant="h4Bold" color="primary">
                    93 130 63 39
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
