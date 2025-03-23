import React, {useState, useEffect} from 'react'
import Character from '../components/Character';
import { CharacterProp } from '../props/dragonball';
import {getCharacters} from "../api/dragonball";
import Loading from '../components/Loading';
function Landing() {
  const [characters, setCharacters] = useState<CharacterProp[]>([]);
  const [charactersLoading, setCharactersLoading] = useState<boolean>(false);

  useEffect(() => {
    getCharacters().then(charactersData => {
        setCharacters(charactersData);
    });
}, [])

  return (
    <div className="flex flex-col items-center bg-[#272b33] min-w-full min-h-screen">
        <div className="flex flex-col items-center justify-center pt-4 pb-4 pl-4 pr-4 sm:pt-16 sm:pb-16 gap-5">
            <img src="https://images.justwatch.com/poster/178627048/s332/dragon-ball" alt="dragon ball image" className="w-150 h-150" />
            <h1 className="text-5xl text-amber-300 font-black font-[tahoma]">Dragon Ball Explorer</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 gap-8 ml-auto mr-auto max-w-[1400px] content-center items-center">
            {characters.length && characters.map((character, index) => {
                if (index > 0 && index % 4 === 0)
                {
                    setCharactersLoading(true);
                    return;
                }
                return <Character key={index} {...character} />
            })}
        </div>
        {charactersLoading && <Loading />}
    </div>
  )
}

export default Landing