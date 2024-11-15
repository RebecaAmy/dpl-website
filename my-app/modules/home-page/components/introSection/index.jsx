import { buildTheme } from "@/infrastructure/theme/theme";
import { ThemeProvider } from "@emotion/react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const IntroSection = () => {
  console.log(buildTheme());
  return (
    <ThemeProvider theme={buildTheme()}>
      <Grid
        container
        sx={{
          position: "relative",
          textAlign: "center",
        }}
      >
        <Grid item xs={12}>
          <img
            src="/office.svg"
            alt="office"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <Grid
            item
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",

              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%,    \
                                            rgba(0, 0, 0, 0.5) 22%, \
                                            rgba(0, 0, 0, 0.5) 82%, \
                                            rgba(0, 0, 0, 0) 100%)",
              pointerEvents: "none",
              pointerEvents: "none",
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
            <Grid
              item
              sm={3}
              sx={{
                display: { xs: "none", sm: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="/DPL-white-bg.svg"
                alt="left"
                style={{
                  maxWidth: "253px",
                }}
              />
            </Grid>
            <Grid item sm={9} paddingLeft={3} paddingRight={5}>
              <Typography variant="subtitle1" color="#fff">
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

export default IntroSection;
