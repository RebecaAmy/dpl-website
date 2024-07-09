import { buildTheme } from "@/infrastructure/theme/theme";
import { Grid, ThemeProvider, Typography } from "@mui/material";

export default function SessionTypePreview({ image, icon, title, description }) {
  return (
    <>
      <ThemeProvider theme={buildTheme()}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Grid
            container
            mb={4}
            sx={{
              width: "250px",
              position: "relative",
            }}
          >
            <Grid
              item
              borderRadius={200}
              sx={{
                width: "250px",
                height: "250px",
                overflow: "hidden",
                position: "relative",
                borderRadius: "50%",
              }}
            >
              <img
                src={image}
                alt={image}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 2.5,
                  left: 2.5,
                  borderRadius: "50%",
                  width: "98%",
                  height: "98%",
                  backgroundColor: "rgb(221, 242, 226, 0.5)", // Gray color with opacity
                }}
              />
            </Grid>
            <Grid
              item
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)", // Centers the icon
              }}
            >
              <img src={icon} alt={icon} />
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
            textAlign={"center"}
          >
            <Grid item mb={4}>
              <Typography variant="titleSession">{title}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" sx={{ maxWidth: "170px" }}>
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
