import { Grid } from "@mui/material";
import SessionTypePreview from "../sessionTypePreview/index";

export default function SessionTypeSection() {
  const sesionTypes = {
    Office: [
      "sessionType/office.svg",
      "sessionType/office-icon.svg",
      "Despacho",
      "Terapia en un entorno clínico especializado, donde se fomenta la confianza y la comodidad.",
    ],
    School: [
      "sessionType/school.svg",
      "sessionType/school-icon.svg",
      "Escuela",
      "Sesiones dentro del entorno escolar, coordinándonos con los tutores y el equipo psicopedagógico.",
    ],
    Online: [
      "sessionType/online.svg",
      "sessionType/online-icon.svg",
      "Online",
      "Intervenciones terapéuticas a través de plataformas digitales, ofreciendo flexibilidad y accesibilidad desde cualquier lugar.",
    ],
    Home: [
      "sessionType/home.svg",
      "sessionType/home-icon.svg",
      "Domicilio",
      "Servicio personalizado que lleva la terapia directamente al hogar, proporcionando comodidad y privacidad.",
    ],
  };
  return (
    <>
      <Grid
        container
        mt={9}
        mb={10}
        justifyContent="center"
        alignContent="center"
        sx={{ width: "100%" }}
      >
        {Object.entries(sesionTypes).map(([key, value]) => (
          <Grid item mb={2} ml={4} mr={4} key={key}>
            <SessionTypePreview
              image={value[0]}
              icon={value[1]}
              title={value[2]}
              description={value[3]}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
