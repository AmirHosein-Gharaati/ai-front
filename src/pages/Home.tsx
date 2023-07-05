import { Box, Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";

function Home() {
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState("");

  const fieldsNames: string[] = [
    "pregnancies",
    "glucose",
    "bloodPressure",
    "skinThickness",
    "insulin",
    "BMI",
    "diabetesPedigreeFunction",
    "age",
  ];

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: Number(value) }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const res = await axios.post("http://localhost:8000/predict", formData);

    setResult(res.data.message);
  };

  return (
    <>
      <Typography
        component="h1"
        variant="h5"
        style={{
          margin: "20px 0px",
        }}
      >
        AI Diabetics Predction
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {fieldsNames.map((name) => (
            <Grid item sm={6} key={name}>
              <TextField
                id="outlined-basic"
                label={name}
                variant="outlined"
                name={name}
                onChange={handleChange}
              />
            </Grid>
          ))}

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

      {result && (
        <Typography
          component="h3"
          variant="h5"
          style={{
            margin: "20px 0px",
          }}
        >
          The person is {result}
        </Typography>
      )}
    </>
  );
}

export default Home;
