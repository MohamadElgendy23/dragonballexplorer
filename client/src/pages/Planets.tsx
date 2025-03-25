import React, { useState, useEffect } from "react";
import Planet from "../components/Planet";
import { PlanetProps } from "../props/dragonball";
import { getPlanets } from "../api/dragonball";
import Loading from "../components/Loading";
import { debounce } from "../helper/debounce";

function Planets() {
  const [planets, setPlanets] = useState<PlanetProps[]>([]);
  const [page, setPage] = useState<number>(0);
  const [planetsLoading, setPlanetsLoading] = useState<boolean>(false);
  const maxPages = 5;

  // this function handles the scroll event
  const handleScroll = debounce(() => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight - 200;
    if (!planetsLoading && bottom && page <= maxPages) {
      setPage((prevPage) => {
        const nextPage = prevPage + 1;
        if (nextPage > maxPages) {
          return prevPage;
        }
        setPlanetsLoading(true);
        getPlanets(nextPage, 4).then((planetsData) => {
          setPlanets((prevPlanets) => [...prevPlanets, ...planetsData]);
          setPlanetsLoading(false);
        });
        return nextPage;
      });
    }
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#272b33] min-w-full min-h-screen">
      <div className="flex flex-col items-center justify-center pt-4 pl-4 pr-4 sm:pt-16 sm:pb-8 gap-5">
        <img
          src="https://images.justwatch.com/poster/178627048/s332/dragon-ball"
          alt="dragon ball image"
          className="w-150 h-150"
        />
        <h1 className="text-5xl text-amber-300 font-black font-[tahoma]">
          Dragon Ball Explorer
        </h1>
        <h2 className="text-4xl text-amber-200 font-bold font-serif m-0 mt-15">
          Planets
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 gap-8 ml-auto mr-auto max-w-[1400px] content-center items-center">
        {planets.map((planet, index) => {
          return <Planet key={index} {...planet} />;
        })}
      </div>
      {planetsLoading && <Loading type={"Planets"} />}
    </div>
  );
}

export default Planets;
