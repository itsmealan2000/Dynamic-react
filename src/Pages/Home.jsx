import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import './Home.css'

// img imports
import homeimg from '../assets/img/home.jpg'
import CoverHome from '../assets/cover/home.png'

function Home() {
  const ref = useRef(null);

  const options = {
    smooth: true,
    smoothMobile: true,
    touchMultiplier: 5,
    mobile: {
      breakpoint: 0,
      smooth: true,
      getDirection: true,
    },
    tablet: {
      breakpoint: 0,
      smooth: true,
      getDirection: true,
    },
  } 


  
  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <main data-scroll-container ref={ref}>
        <section className="first container-fluid">
        <div className="container first-inner">
        <img src={CoverHome} alt="" srcset=""  className="coverimghome"/>
              <h1 data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="5"
              className="text-light texthome">Parallax</h1>

        </div>
        </section>
        <section className="second container-fluid">
            <h2 data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="9">Second</h2>
        </section>
        <section className="third container-fluid">
            <h3>three</h3>
        </section>
      </main>
    </LocomotiveScrollProvider>
  );
}
export default Home;