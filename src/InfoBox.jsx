import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

//icon
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ sampleData }) {
  if (!sampleData) {
    return <></>;
  }
  let HOT_URL =
    "https://images.unsplash.com/photo-1580646541207-9e2faa118a0b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let COLD_URL =
    "https://images.unsplash.com/photo-1516715094483-75da7dee9758?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let RAIN_URL =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <Card
      sx={{ maxWidth: 350 }}
      style={{ margin: "1rem 0 1rem 0", borderRadius: "0.75rem" }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={
          sampleData.humidity >= 80
            ? RAIN_URL
            : sampleData.temp > 20
            ? HOT_URL
            : COLD_URL
        }
        title="green iguana"
      />
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

            <div style={{ margin: "5px 0 0 5px" }}>
              {sampleData.humidity >= 80 ? (
                <ThunderstormIcon fontSize="small" />
              ) : sampleData.temp > 20 ? (
                <WbSunnyIcon fontSize="small" />
              ) : (
                <AcUnitIcon fontSize="small" />
              )}
            </div>
          </div>
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature : {sampleData.temp}&deg;C</p>
          <p>Min_temp : {sampleData.temp_min}&deg;C</p>
          <p>Max_temp : {sampleData.temp_max}&deg;C</p>
          <p>The Wheather Feels Like : {sampleData.feels_like}&deg;C</p>
          <p>Humidity : {sampleData.humidity}&deg;C</p>
          <p>Wheather : {sampleData.weather}</p>
          <p>Wheather Main : {sampleData.weather_main}</p>
        </Typography>
      </CardContent>
    </Card>
  );
}
