import React from 'react'
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"

function Projects() {

  return (
    <>
      <section>
        <div className='container m-auto px-10'>
            <h2 className='text-2xl font-semibold'>Projects</h2>
            <div className='flex gap-10 mt-11 flex-wrap justify-center'>
              <div className='flex'>
              <div className='border rounded-md p-4 mr-2'> 
                <img src={project1}/>
                <h3 className='text-2xl font-semibold mt-8'>Furniture Store Landing Page</h3>
                <p className=' text-gray-400 text-sm mt-1'>Responsive HTML/CSS layout for online furniture store. HTML5, CSS3 (SCSS)</p>
                <div className='flex  mt-5 justify-around'>
                   <button className='p-5 gradient-text hover:from-blue-700 hover:to-white'>Live preview</button>
                   <button className='p-5 border rounded-2xl hover:border-blue-700 hover:shadow'>Checkout github</button>
                </div>
              </div>
              <div className='border rounded-md p-4 w-80 ml-2'> 
                <img src={project2}/>
                <h3 className='text-2xl font-semibold mt-8'>Furniture Store Landing Page</h3>
                <p className=' text-gray-400 text-sm mt-1'>Responsive HTML/CSS layout for online furniture store. HTML5, CSS3 (SCSS)</p>
                <div className='flex mt-16 pt-2 justify-around'>
                   <button className='p-5 gradient-text hover:from-blue-700 hover:to-white'>Live preview</button>
                   <button className='p-5 border rounded-2xl hover:border-blue-700 hover:shadow'>Checkout github</button>
                </div>
              </div>
              </div>
              <div className='flex'>
              <div className='border rounded-md p-4 w-80 mr-2'> 
                <img src={project3}/>
                <h3 className='text-2xl font-semibold mt-8'>Furniture Store Landing Page</h3>
                <p className=' text-gray-400 text-sm mt-1'>Responsive HTML/CSS layout for online furniture store. HTML5, CSS3 (SCSS)</p>
                <div className='flex mt-16 pt-2 justify-around'>
                   <button className='p-5 gradient-text hover:from-blue-700 hover:to-white'>Live preview</button>
                   <button className='p-5 border rounded-2xl hover:border-blue-700 hover:shadow'>Checkout github</button>
                </div>
              </div>                
              <div className='border rounded-md p-4 ml-2'> 
                <img src={project4}/>
                <h3 className='text-2xl font-semibold mt-8'>Furniture Store Landing Page</h3>
                <p className=' text-gray-400 text-sm mt-1'>Responsive HTML/CSS layout for online furniture store. HTML5, CSS3 (SCSS)</p>
                <div className='flex  mt-5 justify-around'>
                   <button className='p-5 gradient-text hover:from-blue-700 hover:to-white'>Live preview</button>
                   <button className='p-5 border rounded-2xl hover:border-blue-700 hover:shadow'>Checkout github</button>
                </div>
              </div>
              </div>
            </div>
            
        </div>
      </section>
    </>
  )
}

export default Projects
