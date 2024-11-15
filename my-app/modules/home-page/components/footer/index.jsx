import { ThemeProvider } from "@emotion/react";
import { Divider, Grid, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { buildTheme } from "@/infrastructure/theme/theme";
import DeviceUnknownIcon from "@mui/icons-material/DeviceUnknown";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ChatIcon from "@mui/icons-material/Chat";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <ThemeProvider theme={buildTheme()}>
        <Grid container sx={{ backgroundColor: "#F2FAF4" }}>
          <Grid container mt={7} mb={4}>
            <Grid
              item
              xs={12}
              sm={4}
              container
              direction={"column"}
              alignItems={"center"}
            >
              <Grid
                container
                direction={"column"}
                alignContent={"center"}
                alignItems={"center"}
              >
                <Grid item sx={{ mb: { xs: 3, sm: 1 }, mt: { xs: 2, sm: 0 } }}>
                  <Typography variant="h4Bold" color="primary">
                    CONTACTO
                  </Typography>
                </Grid>
                <Grid item sx={{ mb: { xs: 3, sm: 7 } }}>
                  {/* <Divider
                    orientation="horizontal"
                    position="relative"
                    height="50%"
                    width="200%"
                    sx={{
                      top: "75%",
                      borderWidth: 2,
                      borderColor: "#3E8E80",
                      zIndex: 0,
                    }}
                  /> */}
                  <DeviceUnknownIcon color="primary" fontSize="large" />
                </Grid>
              </Grid>

              <Grid item>
                <Grid container alignItems={"center"} spacing={2} mb={3} sx={{justifyContent:{xs:"center", sm:"left "}}}>
                  <Grid item>
                    <Link
                      href="mailto:info.dplbarcelona@gmail.com"
                      target="_blank"
                    >
                      <MailOutlineIcon color="primary" />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Typography variant="h5" color="#77808B">
                      info.dplbarcelona@gmail.com
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container alignItems={"center"} spacing={2} mb={3} sx={{justifyContent:{xs:"center", sm:"left "}}}>
                  <Grid item>
                    <Link
                      href="https://wa.me/34613462282?text=Hola!%20Me%20gustaría%20reservar%20una%20consulta."
                      target="_blank"
                    >
                      <WhatsAppIcon color="primary" />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Typography variant="h5" color="#77808B">
                      613 46 22 82
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container alignItems={"center"} spacing={2} sx={{justifyContent:{xs:"center", sm:"left "}}}>
                  <Grid item>
                    <LocalPhoneIcon color="primary" />
                  </Grid>
                  <Grid item>
                    <Typography variant="h5" color="#77808B">
                      93 130 63 39
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={4}
              container
              direction={"column"}
              alignItems={"center"}
            >
              <Grid item sx={{ mb: { xs: 3, sm: 1 }, mt: { xs: 2, sm: 0 } }}>
                <Typography variant="h4Bold" color="primary">
                  UBICACIÓN
                </Typography>
              </Grid>
              <Grid item sx={{ mb: { xs: 3, sm: 7 } }}>
                <Link
                  href="https://maps.app.goo.gl/BTt42ZBDPatfNSJP6"
                  target="_blank"
                >
                  <LocationOnIcon color="primary" fontSize="large" />
                </Link>
              </Grid>
              <Grid container justifyContent={"center"} textAlign={"center"}>
                <Grid item mb={1}>
                  <Typography
                    variant="h5"
                    color="#77808B"
                    sx={{ fontWeight: 600 }}
                  >
                    Corbera de Llobregat
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5" color="#77808B">
                    Carrer de la Pau 46, 08757 Corbera de Llobregat
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={4}
              container
              direction={"column"}
              alignItems={"center"}
              textAlign={"center"}
            >
              <Grid item sx={{ mb: { xs: 3, sm: 1 }, mt: { xs: 2, sm: 0 } }}>
                <Typography variant="h4Bold" color="primary">
                  REDES SOCIALES
                </Typography>
              </Grid>
              <Grid item sx={{ mb: { xs: 3, sm: 7 } }}>
                <ChatIcon color="primary" fontSize="large" />
              </Grid>
              <Grid container justifyContent={"center"} spacing={1}>
                <Grid item>
                  <Link
                    href="https://www.pinterest.es/dplbarcelona"
                    target="_blank"
                  >
                    <PinterestIcon sx={{ fontSize: 30 }} color="primary" />
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="https://www.linkedin.com/company/dplbarcelona/about/"
                    target="_blank"
                  >
                    <LinkedInIcon sx={{ fontSize: 30 }} color="primary" />
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="https://www.facebook.com/dplbarcelona/"
                    target="_blank"
                  >
                    <FacebookIcon sx={{ fontSize: 30 }} color="primary" />
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="https://www.instagram.com/dplbarcelona/?hl=es"
                    target="_blank"
                  >
                    <InstagramIcon sx={{ fontSize: 30 }} color="primary" />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
