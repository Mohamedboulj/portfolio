import "../about/about.style.css";
import "../../../node_modules/aos/dist/aos.css";
import { useEffect } from "react";
import pic from "../../img/mypic.png";

export function About() {
  useEffect(() => {}, []);
  return (
    <>
      <div id="about" className="about   ">
        <div className="row m-0 px-4">
          <div className="col  px-5 d-flex flex-column justify-content-center align-items-center">
            <p className="lh-lg">
              Welcome to my portfolio !<br /> my name is Mohamed Bouljihel.
              <br /> I am 28 years old and I am a
              <br /> <span className="text-span">fullstack web developer.</span>
            </p>
            <div className="mt-3 d-flex flex-row justify-content-center align-items-center reachme">
            <a href="https://www.linkedin.com/in/mohamed-bouljihel" target={"_blank"}><i class="bi bi-linkedin"></i></a> 
            <a href="https://github.com/Mohamedboulj" className="mx-5" target={"_blank"}><i class="bi bi-github "></i></a>
            <a href="https://www.instagram.com/medb09/" target={"_blank"}><i class="bi bi-instagram"></i></a>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 profile">
            <img className="img-fluid" src={pic} alt="mohamed bouljihel" />
          </div>
        </div>
      </div>
    </>
  );
}
