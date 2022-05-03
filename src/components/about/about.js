import "../about/about.style.css";
import "../../../node_modules/aos/dist/aos.css";
import { useEffect } from "react";
import pic from "../../img/mypic.png";

export function About() {
  useEffect(() => {}, []);
  return (
    <>
      <div id="about" className="about   ">
        {/* <div className="row mx-4 ">
        <div className="col position-relative">
          <div className="my-div position-absolute top-50 start-50 translate-middle p-3" style={{height: "81vh"}}>
            <p className="para text-light ">
              Welcome to my portfolio,<br/> my name is Mohamed Bouljihel,<br />  I am 28 y.o and I am
              a <span className="text-span"><em>Fullstack web developer.</em> </span> 
            </p>
          </div>
        </div>
        <div className="col text-center">
            <img
              src={pic}
              className="perso img-fluid  "
              alt="mohamed bouljihel"
            />
        </div>
      </div> */}
        <div className="row m-0 px-4">
          <div className="col  px-5 d-flex align-items-center">
            
            <p className="lh-lg">
              Welcome to my portfolio !<br/> my name is Mohamed Bouljihel.<br/> I am 28 years old
              and I am a
              <span className="text-span">
                Fullstack web developer.
              </span>
            </p>
            
          </div>
          <div className="col-sm-12 col-md-4 profile">
            <img className="img-fluid" src={pic} alt="mohamed bouljihel" />
          </div>
        </div>
        </div>

        
    </>
  );
}
