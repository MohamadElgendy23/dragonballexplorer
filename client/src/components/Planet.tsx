import React from 'react'

// defines the planet prop
interface PlanetProp {
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
    deletedAt: null;
}

function Planet({planet}:PlanetProp) {
  return (
    <div>Planet</div>
  )
}

export default Planet