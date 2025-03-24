import React from 'react'
import { PlanetProp } from '../props/dragonball'

function Planet({...planet}:PlanetProp) {
  return (
    <div className="flex flex-col w-[300px] bg-[#3c3e44] rounded-l-lg m-3 cursor-pointer shadow-md transform-none">
        <div className="w-full relative bg-[url(https://web.dragonball-api.com/images-compress/89980.webp)] bg-center bg-cover min-h-[350px] max-h-[350px] rounded-tl-lg rounded-tr-lg">
            <img src={`${planet.image}`} alt={`Image of ${planet.name}`} className="absolute top-[-20px] w-full h-full min-h-[400px] max-h-[400px] m-0 object-center object-contain z-0 transition-transform transform hover:scale-120 duration-600 ease-in-out" />
        </div>
        <div className="flex flex-col justify-center p-3 font-sans">
            <div className="flex flex-col justify-center">
                <h2 className="m-0 leading-[1.2] tracking-[-0.00833em] text-3xl text-white font-extrabold">{planet.name}</h2>
            </div>
            <div className="flex flex-col gap-2 m-0 tracking-[0.00938em] leading-[0.5]">
                <div className="flex flex-col">
                    <p className="font-bold text-[#F5F5F5] text-3xl]">Is Destroyed:</p>
                    <span className="font-semibold text-[#FBC02D] text-xl">{planet.isDestroyed}</span>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold text-[#F5F5F5] text-3xl]">Description:</p>
                    <span className="font-semibold text-[#FBC02D] text-xl">{planet.description}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Planet