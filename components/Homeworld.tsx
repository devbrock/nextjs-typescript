import { useEffect, useState } from "react";

// descripe the type of our world response
type World = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

type worldProps = {
  worldUrl: string;
};

export default function Homeworld(url: worldProps) {
  const [world, setWorld] = useState("Loading...");

  async function fetchWorld(url: string) {
    let res = await fetch(url);
    let world: World = await res.json(); // type our response as a World
    setWorld(world.name);
  }

  useEffect(() => {
    fetchWorld(url.worldUrl);
  }, []);

  return <div>{world}</div>;
}
