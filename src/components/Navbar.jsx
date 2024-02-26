import React from 'react'
import { useRef, useState } from 'react'
import {IonIcon} from "@ionic/react"
import { MenuOutline, closeOutline } from 'react-ionicons';
function Navbar() {
  const myTagRef = useRef(null);
  const [menuState, setMenuState] = useState('menu');
  function onToggleMenu() {
    setMenuState((prev) => (prev === 'menu' ? 'close' : 'menu'));
    navLinksRef.current.classList.toggle('top-[9%]');
  }
  return (
    <>
      <header>
      <div className="flex w-full fixed justify-between items-center px-[5vw] py-[4vh] z-20 " style={{backgroundColor: "rgb(41, 37, 36)"}}>
          <div>
            <h1 className=" font-bold text-xl"> Abhirup Portfolio</h1>
          </div>
          <div ref={myTagRef} className='duration-500 md:static absolute bg-[#292524] md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5'>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <a href="#" className=" text-gray-400 hover:text-white cursor-pointer">Projects</a>
              </li>
              <li>
                <a href="#" className=" text-gray-400 hover:text-white cursor-pointer">Technologies</a>
              </li>
              <li>
                <a href="#" className=" text-gray-400 hover:text-white cursor-pointer">About Me</a>
              </li>                            
            </ul>
          </div>
          <div><IonIcon onClick={onToggleMenu} name={menuState === 'menu' ? 'menu' : 'close'} className="text-3xl cursor-pointer md:hidden" icon={menuState === 'menu' ? MenuOutline : closeOutline} /></div>
      </div>
     </header> 
    </>
  )
}

export default Navbar
