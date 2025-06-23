import { IconSmokingNo } from "@tabler/icons-react";
import {
  PlaneLanding,
  Wifi,
  ParkingCircle,
  Clock,
  AirVentIcon,
  Flower,
  RockingChair,
  BrushCleaning,
  ForkKnifeCrossed,
} from "lucide-react";

const facilities = [
  {
    icon: <Wifi />,
    name: "Free Wifi",
  },
  {
    icon: <PlaneLanding />,
    name: "Airport Shuttle",
  },
  {
    icon: <ParkingCircle />,
    name: "Free Parking",
  },
  {
    icon: <IconSmokingNo />,
    name: "Non-Smoking Rooms",
  },
  {
    icon: <Clock />,
    name: "24 hour Front Desk",
  },
  {
    icon: <AirVentIcon />,
    name: "Air Conditioning",
  },
  {
    icon: <Flower />,
    name: "Garden",
  },
  {
    icon: <RockingChair />,
    name: "Terrace",
  },
  {
    icon: <BrushCleaning />,
    name: "Daily Housekeeping",
  },
  {
    icon: <ForkKnifeCrossed />,
    name: "Breakfast",
  },
];

export default function FacilitiesSection() {
  return (
    <div
      id="facilities"
      className="flex flex-col items-center justify-center w-full gap-4 p-8 text-white md:flex-row md:justify-between md:px-16 bg-emerald-800"
    >
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl md:text-6xl">Our Facilities</h1>
        <span className="text-center md:text-left">
          Experience comfort and convenience with our facilities
        </span>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-4 max-w-600">
        {facilities.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 p-4 transition-colors border border-white rounded-md select-none transition-color bg-neutral-200 hover:bg-transparent text-foreground hover:text-white"
          >
            <div>{item.icon}</div>
            <div>
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
