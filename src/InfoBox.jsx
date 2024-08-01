import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// Icons
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ sampleData }) {
  if (!sampleData) {
    return null;
  }

  const HOT_URL =
    "https://images.unsplash.com/photo-1580646541207-9e2faa118a0b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1516715094483-75da7dee9758?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const imageUrl =
    sampleData.humidity >= 80
      ? RAIN_URL
      : sampleData.temp > 20
      ? HOT_URL
      : COLD_URL;

  const weatherIcon =
    sampleData.humidity >= 80 ? (
      <ThunderstormIcon fontSize="small" />
    ) : sampleData.temp > 20 ? (
      <WbSunnyIcon fontSize="small" />
    ) : (
      <AcUnitIcon fontSize="small" />
    );

  return (
    <Card
      sx={{
        maxWidth: 400,
        minWidth: 300, // Set the minimum width
        margin: "1rem auto",
        borderRadius: "0.75rem",
      }}
    >
      <CardMedia sx={{ height: 180 }} image={imageUrl} title="Weather image" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>{sampleData.city}</div>
            <div style={{ marginLeft: 5 }}>{weatherIcon}</div>
          </div>
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <p>Temperature: {sampleData.temp}&deg;C</p>
          <p>Min Temp: {sampleData.temp_min}&deg;C</p>
          <p>Max Temp: {sampleData.temp_max}&deg;C</p>
          <p>Feels Like: {sampleData.feels_like}&deg;C</p>
          <p>Humidity: {sampleData.humidity}%</p>
          <p>Weather: {sampleData.weather}</p>
          <p>Main: {sampleData.weather_main}</p>
        </Typography>
      </CardContent>
    </Card>
  );
}
