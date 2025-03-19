import React from 'react'

function NavBar() {
  return (
    <nav className="flex justify-between bg-white items-center">
        <a href="/" className="cursor p-2 pl-7">
            <img src="https://m.media-amazon.com/images/I/81Z-WeVM-sS.jpg" alt="dragon ball logo" className="rounded-[50%] w-20 h-20"/>
        </a>
        <a href="https://web.dragonball-api.com/documentation" target="_blank" className="font-sans min-w-40 bg-amber-300 shadow-none text-white pt-1.5 pb-1.5 pl-4 pr-4 mr-10 rounded-sm text-2xl text-center leading-6 tracking-wide cursor-pointer hover:bg-amber-400">Docs</a>
    </nav>
  )
}

export default NavBar