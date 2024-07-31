import { buildTheme } from "@/infrastructure/theme/theme";
import { Grid, ThemeProvider, Typography } from "@mui/material";

export default function ColaborationsSection() {
  return (
    <>
      <ThemeProvider theme={buildTheme()}>
        <Grid container>
          <Grid container item xs={12} sm={12} justifyContent={"center"} mb={5}>
            <Grid container p={4} item xs={6} sm={6}>
              <Grid item xs={6} sm={4} p={2}>
                <img src="colaborations/glifing.svg" alt="colaboration1" />
              </Grid>
              <Grid item xs={6} sm={8}>
                <Typography variant="h4" align="center" textAlign={"justify"}>
                  Método de entrenamiento de la lectura basado en la evidencia
                  científica, diseñado por especialistas y utilizado por más de
                  200.000 niños y niñas de gabinetes, escuelas y familias.
                </Typography>
              </Grid>
            </Grid>
            <Grid container p={4} item xs={6} sm={6}>
              <Grid item xs={6} sm={4} p={2}>
                <img src="colaborations/UB.svg" alt="colaboration1" />
              </Grid>
              <Grid item xs={6} sm={8}>
                <Typography variant="h4" align="center" textAlign={"justify"}>
                  Metodología avalada científicamente para la detección,
                  prevención y tratamiento de las dificultades lectoras, o
                  dislexia, y para la mejora de las habilidades lectoras.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            item
            mb={10}
            p={4}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={3} sm={3} container justifyContent="center">
              <img src="colaborations/AEP.svg" alt="colaborations" />
            </Grid>
            <Grid item xs={3} sm={3} container justifyContent="center">
              <img src="colaborations/ACD.svg" alt="colaborations" />
            </Grid>
            <Grid item xs={3} sm={3} container justifyContent="center">
              <img src="colaborations/Pediatria.svg" alt="colaborations" />
            </Grid>
            <Grid item xs={3} sm={3} container justifyContent="center">
              <img src="colaborations/Logopedia.svg" alt="colaborations" />
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
