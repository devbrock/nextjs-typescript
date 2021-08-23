import { useEffect, useState } from "react";
import Link from "next/link";
type vehicleProps = {
  vehicleUrls: string[];
};

type Vehicle = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export default function Vehicles({ vehicleUrls }: vehicleProps) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  async function getVehicleName(url: string) {
    let response = await fetch(url);
    let data = await response.json();
    setVehicles((old) => [...old, data]);
  }

  useEffect(() => {
    vehicleUrls.map((url) => {
      getVehicleName(url);
    });
  }, []);

  return (
    <div>
      <ul>
        {vehicles.length > 0 ? (
          vehicles.map((vehicle, index) => (
            <li key={index}>
              <Link href={vehicle.url}>{vehicle.name}</Link>
            </li>
          ))
        ) : (
          <li>Fetching vehicles...</li>
        )}
      </ul>
    </div>
  );
}
