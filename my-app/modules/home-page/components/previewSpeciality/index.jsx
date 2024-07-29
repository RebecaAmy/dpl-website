import { buildTheme } from "@/infrastructure/theme/theme";
import { Grid, ThemeProvider, Typography } from "@mui/material";

export default function PreviewSpeciality({ title, subtitle, image }) {
  return (
    <>
      <ThemeProvider theme={buildTheme()}>
        <Grid
          container
          justifyContent="center"
          sx={{ position: "relative", textAlign: "center" }}
        >
          <Grid
            item
            borderRadius={5}
            boxShadow={5}
            style={{
              maxWidth: "400px",
              position: "relative",
            }}
          >
            <img
              src={image}
              alt="im1"
              style={{
                width: "100%",
                height: "auto",
                filter: "brightness(65%)",
              }}
            />
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Grid item mb={2}>
              <Typography variant="h0" color="#fff">
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h2" color="#fff">
                {subtitle}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
