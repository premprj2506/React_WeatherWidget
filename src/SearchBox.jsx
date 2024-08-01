import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ upadateInfo }) {
  let [formData, setFormData] = useState({
    city: "",
  });
  let [error, setError] = useState(false);
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "76c39a09e10b7e145f691215e869b116";

  let getWheatherInfo = async () => {
    try {
      let res = await fetch(
        `${API_URL}?q=${formData.city}&appid=${API_KEY}&units=metric`
      );
      let jsonRes = await res.json();
      // console.log(jsonRes);
      let result = {
        city: formData.city,
        temp: jsonRes.main.temp,
        temp_min: jsonRes.main.temp_min,
        temp_max: jsonRes.main.temp_max,
        feels_like: jsonRes.main.feels_like,
        humidity: jsonRes.main.humidity,
        weather: jsonRes.weather[0].description,
        weather_main: jsonRes.weather[0].main,
      };
      // console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value.trim() };
    });
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      let newInfo = await getWheatherInfo();
      upadateInfo(newInfo);
      setFormData({ city: "" });
      if (error) {
        setError(false);
      }
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div>
      <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
        Weather Widget:
      </h3>
      <form onSubmit={handleSubmit}>
        <TextField
          name="city"
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          value={formData.city}
          onChange={handleInputChange}
          style={{ marginBottom: "1rem", width: "100%" }}
          required
        />
        <br />
        <Button variant="contained" type="submit" style={{ width: "100%" }}>
          SEARCH
        </Button>
      </form>
      <h5 style={{ color: "red", marginTop: "1rem" }}>
        {error && "No such place exists"}
      </h5>
    </div>
  );
}
