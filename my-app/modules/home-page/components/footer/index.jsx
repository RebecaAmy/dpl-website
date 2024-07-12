import { ThemeProvider } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
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

export default function Footer() {
  return (
    <>
      <ThemeProvider theme={buildTheme()}>
        <Grid container sx={{ backgroundColor: "#F2FAF4" }}>
          <Grid container mt={7} mb={4}>
            <Grid
              item
              xs={4}
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
                <Grid item mb={1}>
                  <Typography variant="h4Bold" color="primary">
                    CONTACTO
                  </Typography>
                </Grid>
                <Grid item mb={7}>
                  <DeviceUnknownIcon color="primary" />
                </Grid>
              </Grid>

              <Grid item>
                <Grid container spacing={2} mb={3}>
                  <Grid item>
                    <MailOutlineIcon color="primary" />
                  </Grid>
                  <Grid item>
                    <Typography variant="h5" color="#77808B">
                      dpl-info@gmail.com
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2} mb={3}>
                  <Grid item>
                    <WhatsAppIcon color="primary" />
                  </Grid>
                  <Grid item>
                    <Typography variant="h5" color="#77808B">
                      55 1234 5678
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2} mb={3}>
                  <Grid item>
                    <LocalPhoneIcon color="primary" />
                  </Grid>
                  <Grid item>
                    <Typography variant="h5" color="#77808B">
                      55 1234 5678
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={4}
              container
              direction={"column"}
              alignItems={"center"}
            >
              <Grid item mb={1}>
                <Typography variant="h4Bold" color="primary">
                  UBICACIÓN
                </Typography>
              </Grid>
              <Grid item mb={7}>
                <LocationOnIcon color="primary" />
              </Grid>
              <Grid container justifyContent={"center"} textAlign={"center"}>
                <Grid item mb={1}>
                  <Typography variant="h5" color="#77808B" sx={{fontWeight: 600}}>
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
              xs={4}
              container
              direction={"column"}
              alignItems={"center"}
              textAlign={"center"}
            >
              <Grid item mb={1}>
                <Typography variant="h4Bold" color="primary">
                  REDES SOCIALES
                </Typography>
              </Grid>
              <Grid item mb={7}>
                <ChatIcon color="primary" />
              </Grid>
              <Grid container justifyContent={"center"} spacing={1}>
                <Grid item>
                  <PinterestIcon color="primary" />
                </Grid>
                <Grid item>
                  <LinkedInIcon color="primary" />
                </Grid>
                <Grid item>
                  <FacebookIcon color="primary" />
                </Grid>
                <Grid item>
                  <InstagramIcon color="primary" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
