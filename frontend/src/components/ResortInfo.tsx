import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import { ResortType } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type Props = {
  resort: ResortType;
};

const ResortInfo = ({ resort }: Props) => {
  return (
    <Card className="border-sla">
      <CardHeader>
        <CardTitle className="text-3xl font-bold tracking-tight">
          {resort.resortName}
        </CardTitle>
        <CardDescription>
          {resort.city}, {resort.country}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex font-mono">
        <span className="mr-2">Sıcaklık :</span>
        {resort.temperature}
        <span className="ml-2 mr-2 text-red-500 ">
          <div className="inline">C°</div>
          <ThermostatIcon /> 
        </span>
      </CardContent>
      <CardContent className="flex font-mono">
        <span className="mr-2">Nem :</span>
        {resort.moisture}
        <span className="ml-2 mr-2 text-cyan-500">
          <div className="inline">%</div>
          <WaterDropIcon />
        </span>
      </CardContent>
      <CardContent className="flex font-mono">
        <span className="mr-2">Rüzgar :</span>
        {resort.wind}
        <span className="ml-2 mr-2 text-blue-500">
        <div className="inline">km/s</div>
          <AirIcon />
        </span>
      </CardContent>
    </Card>
  );
};

export default ResortInfo;
