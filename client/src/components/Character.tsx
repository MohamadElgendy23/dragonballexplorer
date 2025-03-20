import React from 'react'

// defines the character prop
interface CharacterProp {
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    deletedAt: null;
}

function Character({character}:CharacterProp) {
  return (
    <div className="flex flex-col w-[280px] bg-[#3c3e44] rounded-l-lg m-3 cursor-pointer shadow-md opacity-1 transform-none">
        <div className="flex">
            <img src={`${character.image}`} alt={`Image of ${character.title}`} />
        </div>
    </div>
  )
}

export default Character