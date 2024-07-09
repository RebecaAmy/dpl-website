import { buildTheme } from "@/infrastructure/theme/theme";
import { Grid, ThemeProvider, Typography } from "@mui/material";

export default function InformationPreview({image, title, description}) {
  return (
    <>
      <ThemeProvider theme={buildTheme()}>
        <Grid
          container
          justifyContent="center"
          direction={"column"}
          alignItems="center"
          textAlign={"center"}
        >
          <Grid
            item
            borderRadius={5}
            boxShadow={5}
            border={1}
            mb={4}
            style={{
              width: "400px",
              height: "300px",
              overflow: "hidden",
            }}
          >
            <img
              src= {image}
              alt="exploration"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", 
                objectPosition: "center", 
              }}
            />
          </Grid>
          <Grid
            container
            alignItems="center"
            direction={"column"}
            sx={{ maxWidth: "300px" }}
          >
            <Grid item mb={2}>
              <Typography variant="h0Bold" color="primary">
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" >
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
