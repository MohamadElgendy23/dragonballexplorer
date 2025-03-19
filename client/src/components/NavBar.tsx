import React from 'react'

function NavBar() {
  return (
    <nav className="flex p-4 bg-white items-center">
        <a href="/" className="w-15 h-15 cursor">
            <img src="https://m.media-amazon.com/images/I/81Z-WeVM-sS.jpg" alt="dragon ball logo" />
        </a>
        <button className="font-[Roboto Helvetica] min-w-16 bg-">Docs</button>
    </nav>
  )
}

export default NavBar