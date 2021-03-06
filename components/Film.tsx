import { useEffect, useState } from "react";

type Film = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};

type filmProps = {
  url: string;
};

export default function Film({ url }: filmProps, key: number) {
  const [filmTitle, setFilmTitle] = useState("Loading...");
  async function fetchMovieTitle(url: string) {
    let res = await fetch(url);
    let data: Film = await res.json();
    let { title } = data;
    setFilmTitle(title);
  }

  useEffect(() => {
    setFilmTitle("Loading...")
    fetchMovieTitle(url);
  }, [url]);

  return <p key={key}>{filmTitle}</p>;
}
