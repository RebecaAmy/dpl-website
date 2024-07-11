import { buildTheme } from "@/infrastructure/theme/theme";
import {
  Divider,
  Grid,
  Rating,
  ThemeProvider,
  Typography,
} from "@mui/material";

export default function ReviewPreview({
  image,
  name,
  description,
  value,
  lineheight,
  linetop,
}) {
  return (
    <>
      <ThemeProvider theme={buildTheme()}>
        <Grid container spacing={0} pr={8} mb={0}>
          <Grid
            item
            xs={4}
            container
            justifyContent={"center"}
            alignItems={"center"}
            position="relative"
          >
            <Divider
              orientation="vertical"
              sx={{
                position: "absolute",
                left: "50%",
                top: linetop ? linetop : 1,
                height: lineheight ? lineheight : "130%",
                borderWidth: 2,
                borderColor: "#3E8E80",
                zIndex: -1,
              }}
            />
            <Grid
              item
              borderRadius={50}
              mb={4}
              style={{ width: "100px", height: "100px", overflow: "hidden" }}
            >
              <img
                src={image}
                alt="exploration"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={8}
            container
            mb={4}
            direction="column"
            justifyContent="center"
          >
            <Grid item mb={2}>
              <Typography variant="h2">{name}</Typography>
            </Grid>
            <Grid item mb={2}>
              <Typography variant="h4">{description}</Typography>
            </Grid>
            <Grid>
              <Rating value={value} readOnly />
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
