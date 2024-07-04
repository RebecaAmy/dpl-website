import { buildTheme } from "@/infrastructure/theme/theme";
import { ThemeProvider } from "@emotion/react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const ImageComponent = () => {
  return (
    <ThemeProvider theme={buildTheme()}>
      <Grid container sx={{ position: "relative", textAlign: "center" }}>
        <Grid item xs={12}>
          <img
            src="/office.svg"
            alt="office"
            style={{
              width: "100%",
              height: "auto",
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
            <Grid item>
              <img
                src="/dpl-logo.svg"
                alt="left"
                style={{
                  maxWidth: "253px",
                  marginRight: "253px",
                }}
              />
            </Grid>
            <Grid item sx={{ maxWidth: "625px" }}>
              <Typography variant="quote" color="#fff">
                Tal como sabemos, la educación de nuestros hijos es nuestro
                mejor legado; entonces, ¿por qué no proporcionarles las mejores
                herramientas para potenciar su aprendizaje?
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ImageComponent;
