import { buildTheme } from "@/infrastructure/theme/theme";
import { useTheme } from "@emotion/react";
import { Grid, ThemeProvider, Typography } from "@mui/material";

export default function ColaborationsSection() {
  const theme = useTheme();
  return (
    <>
      <ThemeProvider theme={buildTheme()}>
        <Grid container>
          <Grid
            container
            item
            xs={12}
            sm={12}
            justifyContent={"center"}
            sx={{
              pl: { xs: 2, sm: 0 },
              pr: { xs: 2, sm: 0 },
              mb: { xs: 1, sm: 10 },
            }}
          >
            <Grid
              container
              item
              xs={12}
              sm={4}
              borderRadius={10}
              border={1}
              borderColor={"#3E8E80"}
              boxShadow={5}
              sx={{ mr: { xs: 0, sm: 26 } }}
            >
              <Grid item container justifyContent={"center"} mt={4} mb={4}>
                <img src="colaborations/glifing.svg" alt="colaboration1" />
              </Grid>
              <Grid
                item
                padding={5}
                sx={{
                  borderRadius: "0 0 40px 40px",
                  backgroundColor: "#F2FAF4",
                }}
              >
                <Typography variant="h4" align="center" textAlign={"center"}>
                  Método de entrenamiento de la lectura basado en la evidencia
                  científica, diseñado por especialistas y utilizado por más de
                  200.000 niños y niñas de gabinetes, escuelas y familias.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={4}
              borderRadius={10}
              border={1}
              borderColor={"#3E8E80"}
              boxShadow={5}
              sx={{ mt: { xs: 5, sm: 0 } }}
            >
              <Grid item container justifyContent={"center"} mt={5} mb={5}>
                <img src="colaborations/UB.svg" alt="colaboration1" />
              </Grid>
              <Grid
                item
                padding={5}
                sx={{
                  borderRadius: "0 0 40px 40px",
                  backgroundColor: "#F2FAF4",
                }}
              >
                <Typography variant="h4" align="center" textAlign={"center"}>
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
            justifyContent="center"
            alignItems="center"
            sx={{ p: { xs: 2, sm: 4 }, mb: { xs: 1, sm: 10 } }}
          >
            <Grid
              item
              xs={6}
              sm={3}
              container
              justifyContent="center"
              sx={{ mb: { xs: 4, sm: 0 }, p: { xs: 2, sm: 0 } }}
            >
              <img src="colaborations/AEP.svg" alt="colaborations" />
            </Grid>
            <Grid
              item
              xs={6}
              sm={3}
              container
              justifyContent="center"
              sx={{ mb: { xs: 4, sm: 0 }, p: { xs: 2, sm: 0 } }}
            >
              <img src="colaborations/ACD.svg" alt="colaborations" />
            </Grid>
            <Grid
              item
              xs={6}
              sm={3}
              container
              justifyContent="center"
              sx={{ mb: { xs: 4, sm: 0 }, p: { xs: 2, sm: 0 } }}
            >
              <img src="colaborations/Pediatria.svg" alt="colaborations" />
            </Grid>
            <Grid
              item
              xs={6}
              sm={3}
              container
              justifyContent="center"
              sx={{ mb: { xs: 4, sm: 0 }, p: { xs: 2, sm: 0 } }}
            >
              <img src="colaborations/Logopedia.svg" alt="colaborations" />
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
