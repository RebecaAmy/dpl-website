import { Grid } from "@mui/material";
import PreviewSpeciality from "../previewSpeciality/index";

export default function SpecialitySection() {
  const specialities = {
    LOGOPEDIA: "Dando voz a tu mejor versión",
    PSICOLOGIA: "Cuidando tu bienestar emocional",
    FISIOTERAPIA: "Recuperando tu bienestar físico",
    NUTRICION: "Cuidando tu alimentación",
    asuidcuh: "Cuidando tu alimentación",
    aisdfo: "Cuidando tu alimentación",
  };

  return (
    <Grid
      container
      mt={9}
      mb={10}
      justifyContent="center"
      alignContent="center"
      sx={{ width: "100%" }}
    >
      {Object.entries(specialities).map(([key, value]) => (
        <Grid item margin={2} key={key} xs={12} sm={6} md={4} lg={3}>
          <PreviewSpeciality title={key} subtitle={value} />
        </Grid>
      ))}
    </Grid>
  );
}
