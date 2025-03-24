import React from 'react'

function Loading({type}:String) {
  return (
    <div className="flex flex-col justify-center items-center gap-3 z-1">
      <h2>{`Scroll down for more ${type}`}</h2>
      <i className="fa-solid fa-down-long text-white"></i>
      <i className="fa-solid fa-spinner text-white"></i>
    </div>
  )
}

export default Loading