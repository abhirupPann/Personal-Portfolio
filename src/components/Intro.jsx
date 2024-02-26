import React from 'react'
import profile from "../assets/Photo2.png"
import profilebg from "../assets/imgbg.png"
import {useTypewriter, Cursor} from "react-simple-typewriter"

function Intro() {
  const [text] = useTypewriter({
    words: ['a Front-end developer', 'a UI/UX designer', 'a Software Engineer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <>
      <main>
        <section>
         <div className="container m-auto px-10 py-10 flex gap-6">
             <div className=' mt-20'>
                 <h1 className=' font-bold text-4xl'>Hello, I'm Abhirup,</h1>
                 <h1 className=' font-bold text-4xl mt-1 gradient-text'>{text}<span><Cursor cursorStyle="|" cursorColor='white'/></span></h1>
                 <p className='mt-4 text-gray-400'>Former digital-marketing specialist, seeking to apply competent development skills with focus on collaboration, communication, and passion</p>
                 <h1 className='link w-32 flex justify-center mt-10 cursor-pointer'><a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fnovoresume.com%2Fresume-templates&psig=AOvVaw13PDZ0oQ47Cdg3mcB0-7p0&ust=1707808222578000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLDS8r-fpYQDFQAAAAAdAAAAABAE">Resume</a></h1>
                 
             </div>
             <div className=' relative mt-20'>
                <img src={profile} width={220} className='relative z-10'/>
                <img src={profilebg} width={160} className=" absolute top-10 left-20 z-0 "/>
             </div>
         </div>
         </section>
      </main>
    </>
  )
}

export default Intro
