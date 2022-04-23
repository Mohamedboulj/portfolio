import "../about/about.style.css";
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";
import { useEffect } from "react";
import pic from "../../img/mypic.jpg";
import { Link } from "react-router-dom";

export function About() {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <>
    <div id="about" className="about position-relative mt-5 px-4" data-aos="fade-up" >
     
      <div className="row mb-3">
        <div className="col position-relative">
          <div className="position-absolute top-50 start-50 translate-middle w-100 p-3">
            <p className="h1 fw-800">
              Welcome to my portfolio ,my name is Mohamed Bouljihel ,  I am 29 y.o and I am
              a <span className="text-span">Fullstack web developer.</span> 
            </p>
            <button  className="btn btn-lg bg-persian rounded-pill mt-3"><Link to="/contact" >LET'S TALK</Link></button>
          </div>
        </div>
        <div className="col text-center">
            <img
              src={pic}
              className="img-fluid  "
              alt="mohamed bouljihel"
            />
          </div>
      </div>
    </div>
   </>
  );
}
