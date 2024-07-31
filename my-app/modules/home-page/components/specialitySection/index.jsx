import { Grid } from "@mui/material";
import PreviewSpeciality from "../previewSpeciality/index";

export default function SpecialitySection() {
  const specialities = {
    LOGOPEDIA: {
      description: "Dando voz a tu mejor versión",
      image: "speciality/logopedia.svg",
    },
    PSICOPEDAGOGÍA: {
      description: "Educación personalizada, éxito garantizado",
      image: "speciality/psicopedagogia.svg",
    },
    "ASESORAMIENTO/ PSICOEDUCACIÓN FAMILIAR": {
      description: "Guiando pasos hacia el éxito",
      image: "speciality/asesoramiento_psicoeducacion_familiar.svg",
    },
    INGLÉS: {
      description: "Explora el mundo a través del Inglés",
      image: "speciality/ingles.svg",
    },
    PSICOLOGÍA: {
      description: "Sanando mentes, transformando vidas",
      image: "speciality/psicologia.svg",
    },
    NEUROPSICOLOGÍA: {
      description: "Conexiones que potencian tu mente",
      image: "speciality/neuropsicologia.svg",
    },
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
          <PreviewSpeciality
            title={key}
            subtitle={value.description}
            image={value.image}
          />
        </Grid>
      ))}
    </Grid>
  );
}
