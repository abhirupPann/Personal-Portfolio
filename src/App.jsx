import "./App.css"
import ArrowDown from "./assets/arrow-down.svg"
import { useState,useEffect } from "react"
import {Navbar, Footer, Intro, Projects, Skills, Tech,Aboutme} from "./components";
import Testimonials from "./components/Testimonials";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if(window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])
  return (
    <div>
     <Navbar/>
     <Intro/>
     <Projects/>
     <Tech/>
     <Skills/>
     <Aboutme/>
     <Testimonials/>
     <Footer/>
     {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24 z-20" onClick={() => {
            window.scrollTo(0,0);
          }}>
            <img src={ArrowDown} />
          </button>
        )
      }
    </div>
  )
}

export default App
