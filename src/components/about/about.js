import "../about/about.style.css";
import "../../../node_modules/aos/dist/aos.css";
import { useEffect } from "react";
import pic from "../../img/mypic.png";

export function About() {
    useEffect(() => {
      
    }, []);
  return (
    <>
    <div id="about" className="about position-relative mt-4 px-4"  >
     
      <div className="row mx-4 ">
        <div className="col-7 position-relative">
          <div className="position-absolute top-50 start-50 translate-middle w-100 p-3">
            <p className="para text-light ">
              Welcome to my portfolio,<br/> my name is Mohamed Bouljihel,<br />  I am 29 y.o and I am
              a <span className="text-span"><em>Fullstack web developer.</em> </span> 
            </p>
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
