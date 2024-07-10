import { Grid } from "@mui/material";
import InformationPreview from "../informationPreview/index";

export default function InformationSection() {
  const information = {
    Exploration: [
      "information/exploration.svg",
      "Exploraciones y diagnósticos",
      "Diagnósticos diferenciales basados en exploraciones neuropsicológicas o psicopedagógicas.",
    ],
    Intervention: [
      "information/intervention.svg",
      "Intervenciones individualizadas",
      "Tratamientos e intervenciones personalizadas según cada necesidad.",
    ],
    Psicoeducation: [
      "information/group.svg",
      "Psicoeducación familiar",
      "Asesorías con los padres o tutores, enfocadas en la orientación y establecimientos de pautas personalizadas.",
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
        {Object.entries(information).map(([key, value]) => (
          <Grid item mb={2} ml={4} mr={4} key={key}>
            <InformationPreview
              image={value[0]}
              title={value[1]}
              description={value[2]}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
