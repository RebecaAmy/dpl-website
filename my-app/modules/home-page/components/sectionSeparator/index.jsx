import { buildTheme } from "@/infrastructure/theme/theme";
import { Grid, ThemeProvider, Typography } from "@mui/material";

export default function SectionSeparator({ image, subtitle, height }) {
  return (
    <>
      <ThemeProvider theme={buildTheme()}>
        <Grid
          mb={10}
          container
          sx={{ position: "relative", textAlign: "center" }}
        >
          <Grid item xs={12}>
            <img
              src={image}
              alt={subtitle}
              style={{
                width: "100%",
                height: height ? height : "400px",
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(65%)",
              }}
            />
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100%",
              }}
            >
              <Grid item sx={{ maxWidth: "625px" }}>
                <Typography variant="h0" color="#fff">
                  {subtitle}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
