import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import '../assets/locomotive.css'
import '../Styles/Home.css'

function Home() {
  const ref = useRef(null);

  const options = {
    smooth: true,
  } 

  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <main data-scroll-container ref={ref}>
        <section className="first container-fluid">
            <h1>Heading</h1>
        </section>
        <section className="second container-fluid">
            <h2>Second</h2>
        </section>
        <section className="third container-fluid">
            <h3>three</h3>
        </section>
      </main>
    </LocomotiveScrollProvider>
  );
}
export default Home;