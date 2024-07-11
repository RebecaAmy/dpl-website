import MapPreview from "@/modules/home-page/components/mapPreview";
import ReviewPreview from "@/modules/home-page/components/reviewPreview";
import SchedulePreview from "@/modules/home-page/components/schedulePreview";
import { Grid } from "@mui/material";

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
      "reviews/partickRuiz.svg",
      "Patrick Ruiz",
      "Sin duda, de los mejores profesionales en corbera, me dedicaron el tiempo y la paciencia para entender mi caso y posteriormente me acompañaron en el proceso. Los recomiendo",
      5,
      "100%",
      false,
    ],
  };

  return (
    <>
      <Grid container mb={10}>
        <Grid item xs={5} container direction={"column"} alignItems={"center"}>
          <MapPreview></MapPreview>
          <Grid item mt={4}>
            <SchedulePreview></SchedulePreview>
          </Grid>
        </Grid>
        <Grid item xs={7} container direction={"column"} alignItems={"center"}>
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
