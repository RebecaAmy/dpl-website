import { Button, Grid, ThemeProvider, Typography } from "@mui/material";
import { buildTheme } from "@/infrastructure/theme/theme";
import { on } from "events";

export default function SchedulePreview() {
  const onClick = () => {
    window.open(
      "https://wa.me/34613462282?text=Hola!%20Me%20gustaría%20reservar%20una%20consulta.",
      "_blank"
    );
  };
  return (
    <>
      <ThemeProvider theme={buildTheme()}>
        <Grid
          item
          xs={11}
          container
          m={"auto"}
          border={2}
          borderColor={"#3E8E80"}
          borderRadius={5}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ backgroundColor: "#CAD7CD", ml: { xs: 2, sm: 5 } }}
        >
          <Grid item margin={4} mt={5} textAlign={"center"}>
            <Typography variant="h0Bold" color={"primary"}>
              HORARIO DE APERTURA
            </Typography>
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            mb={5}
          >
            <Grid item xs={4} container mr={7} direction={"column"}>
              <Grid item mb={3}>
                <Typography variant="h3Bold" color="primary">
                  Lunes a Viernes
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4Bold">8:00 am - 21:00 pm</Typography>
              </Grid>
            </Grid>

            <Grid item xs={4} container direction={"column"}>
              <Grid item mb={3}>
                <Typography variant="h3Bold" color="primary">
                  Sábado
                </Typography>
              </Grid>
              <Grid item sx={{ mt: { xs: 4, sm: 0 } }}>
                <Typography variant="h4Bold">9:00 am - 15:00 pm</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item mb={4}>
            <Button
              py={4}
              fullWidth
              size="large"
              sx={{
                borderRadius: "20px",
                paddingY: 1.5,
                fontWeight: "600",
              }}
              color="primary"
              onClick={onClick}
              variant="contained"
            >
              Contactar
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
