import React from 'react'
import { CharacterProp } from '../props/dragonball'

function Character({...character}:CharacterProp) {
  return (
    <div className="flex flex-col w-[280px] bg-[#3c3e44] rounded-l-lg m-3 cursor-pointer shadow-md opacity-1 transform-none">
        <div className="flex">
            <img src={`${character.image}`} alt={`Image of ${character.name}`} />
        </div>
        <div className="flex flex-col justify-center p-3 font-sans">
            <div className="flex flex-col justify-center items-center">
                <h2 className="m-0 leading-[1.2] tracking-[-0.00833em] text-2xl font-extrabold">${character.name}</h2>
                <p className="m-0 mb-4 text-lg leading-[1.8] tracking-[0.00938em] text-[#FBC02D] font-bold whitespace-nowrap text-ellipsis overflow-hidden">${character.race} - ${character.gender}</p>
            </div>
            <div className="flex flex-col gap-2 m-0 tracking-[0.00938em] leading-[0.5]">
                <div className="flex flex-col">
                    <p className="font-semibold text-[#F5F5F5] text-base]">Base KI:</p>
                    <span className="font-bold text-[#FBC02D] text-lg">${character.ki}</span>
                </div>
                <div className="flex flex-col">
                    <p className="font-semibold text-[#F5F5F5] text-base]">Total KI:</p>
                    <span className="font-bold text-[#FBC02D] text-lg">${character.maxKi}</span>
                </div>
                <div className="flex flex-col">
                    <p className="font-semibold text-[#F5F5F5] text-base]">Affiliation:</p>
                    <span className="font-bold text-[#FBC02D] text-lg">${character.affiliation}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Character