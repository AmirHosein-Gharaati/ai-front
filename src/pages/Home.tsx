import { Box, Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

function Home() {
  return (
    <>
      <Typography component="h1" variant="h5">
        Predict
      </Typography>
      <Box component="form" noValidate onSubmit={() => console.log("Hello")}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField id="outlined-basic" label="Age" variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField id="outlined-basic" label="BMI" variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Blood pressure"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Glucose Levels"
              variant="outlined"
            />
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Predict
          </Button>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
