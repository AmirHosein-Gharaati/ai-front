import { Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState } from "react";
import axios from "axios";

function DataSetter() {
  const [value, setValue] = useState(1);
  const [accuracy, setAccuracy] = useState<number | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number((event.target as HTMLInputElement).value));
  };

  useEffect(() => {
    setAccuracy(null);
    axios
      .post(`http://localhost:8000/dataset/${value}`)
      .then((res) => {
        setAccuracy(res.data.accuracy);
      })
      .catch((err) => {
        console.log("Error on setting dataset" + err);
      });
  }, [value]);

  return (
    <>
      <Typography
        variant="h6"
        style={{
          marginBottom: "5px",
        }}
      >
        Please select your dataset
      </Typography>

      <FormControl
        style={{
          margin: "20px 0px",
        }}
      >
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value={1} control={<Radio />} label="Dataset 1" />
          <FormControlLabel value={2} control={<Radio />} label="Dataset 2" />
        </RadioGroup>
      </FormControl>

      {accuracy && (
        <Typography variant="h6" style={{
            marginBottom: "10px"
          }}>
          Accuracy of dataset is: {accuracy.toFixed(2)}
        </Typography>
      )}
    </>
  );
}

export default DataSetter;
