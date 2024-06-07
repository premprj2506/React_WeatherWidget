import "./WheatherBox.css";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function WheatherBox() {
  const [wheatherInfo, setWheatherInfo] = useState();

  let upadteInfo = (newInfo) => {
    return setWheatherInfo(newInfo);
  };

  return (
    <div className="WheatherBox">
      <SearchBox upadateInfo={upadteInfo} />
      <InfoBox sampleData={wheatherInfo} />
    </div>
  );
}
