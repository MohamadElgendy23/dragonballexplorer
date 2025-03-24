import React, {useState, useEffect} from 'react'
import Planet from '../components/Planet';
import { PlanetProp } from '../props/dragonball';
import {getPlanets} from "../api/dragonball";
import Loading from '../components/Loading';

function Planets() {
  const [planets, setPlanets] = useState<PlanetProp[]>([]);
  const [planetsLoading, setPlanetsLoading] = useState<boolean>(false);

  useEffect(() => {
    getPlanets().then(planetsData => {
        console.log(planetsData);
        setPlanets(planetsData);
    });
}, [])

  return (
    <div className="flex flex-col items-center bg-[#272b33] min-w-full min-h-screen">
        <div className="flex flex-col items-center justify-center pt-4 pl-4 pr-4 sm:pt-16 sm:pb-8 gap-5">
            <img src="https://images.justwatch.com/poster/178627048/s332/dragon-ball" alt="dragon ball image" className="w-150 h-150" />
            <h1 className="text-5xl text-amber-300 font-black font-[tahoma]">Dragon Ball Explorer</h1>
            <h2 className="text-4xl text-amber-200 font-bold font-serif m-0 mt-15">Planets</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 gap-8 ml-auto mr-auto max-w-[1400px] content-center items-center">
            {planets.map((planet, index) => {
                return <Planet key={index} {...planet} />
            })}
        </div>
        {planetsLoading && <Loading type={"Planets"} />}
    </div>
  )
}

export default Planets