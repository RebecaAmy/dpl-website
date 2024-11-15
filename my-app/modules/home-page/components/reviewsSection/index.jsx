// import MapPreview from "@/modules/home-page/components/mapPreview";
import ReviewPreview from "@/modules/home-page/components/reviewPreview";
import SchedulePreview from "@/modules/home-page/components/schedulePreview";
import { Grid } from "@mui/material";
import dynamic from "next/dynamic";
const MapPreview = dynamic(
  () => import("@/modules/home-page/components/mapPreview"),
  { ssr: false }
);

export default function ReveiwSection() {
  const reviews = {
    1: [
      "reviews/xavierMen.svg",
      "xavier men",
      "Desde el primer momento sabes que estás en buenas manos. Nuestro hijo va encantado a las sesiones.Recomendable 100%",
      5,
      "180%",
      -30,
    ],
    2: [
      "reviews/alexMartinez.svg",
      "Álex Martínez",
      "Sin duda de las mejores experiencias con esta rama. Estábamos muy perdidos y Rebeca nos orientó y ayudo en todos los aspectos. También contacto con el colegio para trabajar de manera unilateral. Lo recomendamos",
      5,
      "140%",
      false,
    ],
    3: [
      "reviews/aleixSanchez.png",
      "Aleix Sánchez",
      "¡Qué gran servicio y gran labor! Muy buen trato con los pacientes y sobre todo, lo que te transmiten. Lo recomiendo 100%.",
      5,
      "120%",
      false,
    ],
  };

  return (
    <>
      <Grid container mb={10}>
        <Grid
          item
          xs={12}
          sm={5}
          container
          direction={"column"}
          alignItems={"center"}
        >
          <MapPreview></MapPreview>
          <Grid item mt={4}>
            <SchedulePreview></SchedulePreview>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          container
          direction={"column"}
          alignItems={"center"}
          sx={{ mt: { xs: 2
          , sm: 0 } }}
        >
          {Object.keys(reviews).map(([key]) => (
            <Grid item mt={4} key={key}>
              <ReviewPreview
                image={reviews[key][0]}
                name={reviews[key][1]}
                description={reviews[key][2]}
                value={reviews[key][3]}
                lineheight={reviews[key][4]}
                linetop={reviews[key][5]}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
