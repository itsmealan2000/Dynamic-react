import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import React,{ useRef,useState, useEffect } from "react"; 
import './Home.css'
import Modal from '../Components/Modal.jsx'

// img imports
import homeimg from '../assets/img/home.jpg'
import CoverHome from '../assets/cover/home.png'

function Home() {
  const ref = useRef(null);

  const [showModal, setShowModal] = useState(true);
  const [savedName, setSavedName] = useState('');
  useEffect(() => {
    // Show the modal on component mount
    setShowModal(true);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveChanges = (name) => {
    // Add your logic here for saving changes or handling the name
    console.log(`Name saved: ${name}`);
    setShowModal(false);
    setSavedName(name);
  };

  const options = {
    smooth: true,
    smartphone: {
      lerp:0,
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
        <img src={CoverHome} alt="" srcset=""  className="coverimghome" data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="1"/>
              <h1 data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="5"
              className="text-light texthome text-center">Dynamic</h1>
        </div>
        </section>
        <section className="second container-fluid">
            <h2 data-scroll
            data-scroll-direction="vetical"
            data-scroll-speed="12">HI</h2>
                        <h2 data-scroll
            data-scroll-direction="vetical"
            data-scroll-speed="11">How are you !</h2>
                        <h2 data-scroll
            data-scroll-direction="vetical"
            data-scroll-speed="10"> {savedName}</h2>
        </section>
        <section className="third container-fluid">
            <h3 data-scroll
            data-scroll-direction="vetical"
            data-scroll-speed="3"
            className="end">THE END</h3>
        </section>
        <div>
      {/* Modal component */}
      <Modal showModal={showModal} onClose={handleCloseModal} onSave={handleSaveChanges} />
    </div>
      </main>
    </LocomotiveScrollProvider>
  );
}
export default Home;