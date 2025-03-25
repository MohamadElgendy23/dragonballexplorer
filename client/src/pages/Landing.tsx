import React, { useState, useEffect, useRef } from "react";
import Character from "../components/Character";
import { CharacterProps } from "../props/dragonball";
import { getCharacters } from "../api/dragonball";
import Loading from "../components/Loading";

function Landing() {
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const pageRef = useRef<number>(0);
  const [charactersLoading, setCharactersLoading] = useState<boolean>(false);
  const maxPages = 15;

  useEffect(() => {
    // this function handles the scroll event using debounce
    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight - 200;
      const currPage = pageRef.current;
      if (!charactersLoading && bottom && currPage <= maxPages) {
        const nextPage = currPage + 1;
        if (nextPage > maxPages) {
          return;
        }
        pageRef.current = nextPage;
        setCharactersLoading(true);
        getCharacters(nextPage, 4).then((charactersData) => {
          setCharacters((prevCharacters) => [
            ...prevCharacters,
            ...charactersData,
          ]);
          setCharactersLoading(false);
        });
      }
    };
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
          Characters
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 gap-8 ml-auto mr-auto max-w-[1400px] content-center items-center">
        {characters.map((character, index) => {
          return <Character key={index} {...character} />;
        })}
      </div>
      {charactersLoading && <Loading type={"Characters"} />}
    </div>
  );
}

export default Landing;
