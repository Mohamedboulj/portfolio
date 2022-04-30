import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../projets/projets.style.css";
import projet1 from "../../img/p1.png";
import projet2 from "../../img/p2.png";
import projet3 from "../../img/p3.png";
import projet4 from "../../img/p4.png";
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";
import { useEffect } from "react";
export function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <div id="projects" className="projets mt-5 mb-5">
      <div className="All">
        <div className="row m-auto ">
          <div
            className="col-lg-6 d-flex justify-content-center align-items-center flex-column position-relative m-0"
            data-aos="fade-right"
          >
            <a
              href="https://mohamedboulj.github.io/Weather-application/"
              target={"_blank"}
              className="thumbnails text-center"
            >
              <img
                src={projet1}
                className="proj-thumbnails rounded "
                alt="Weather Application"
              />
            </a>
            <h3 className="proj-title position-absolute">Weather Application</h3>
          </div>

          <div
            className="col-lg-6 d-flex justify-content-center align-items-center flex-column position-relative m-0"
            data-aos="fade-right"
          >
            <a
              href="https://mohamedboulj.github.io/QuotesGen/"
              target={"_blank"}
              className="thumbnails text-center"
            >
              <img
                src={projet2}
                className="proj-thumbnails rounded "
                alt="Quotes Generator"
              />
            </a>
            <h3 className="proj-title position-absolute">Quotes Generator</h3>
          </div>
          <div
            className="col-lg-6 d-flex justify-content-center align-items-center flex-column position-relative m-0"
            data-aos="fade-right"
          >
            <a
              href="https://mohamedboulj.github.io/bootstarp-project1"
              target={"_blank"}
              className="thumbnails text-center"
            >
              <img
                src={projet3}
                className="proj-thumbnails rounded "
                alt="Website made with BS"
              />
            </a>
            <h3 className="proj-title position-absolute">Website made with BS</h3>
          </div>
          <div
            className="col-lg-6  d-flex justify-content-center align-items-center flex-column position-relative m-0"
            data-aos="fade-right"
          >
            <a
              href="https://mohamedboulj.github.io/Todolist/"
              target={"_blank"}
              className="thumbnails text-center"
            >
              <img
                src={projet4}
                className="proj-thumbnails rounded "
                alt="React Todo Application"
              />
            </a>
            <h3 className="proj-title position-absolute">Todo Application </h3>
          </div>
         
        </div>

        </div>
        
        <div className="seemore row px-4  m-auto ">
             <div className="my-2 d-flex justify-content-end px-5"><a href="https://github.com/Mohamedboulj?tab=repositories" target={"_blank"}>SEE MORE &nbsp;<i class="bi bi-github"></i></a></div>

       </div>
    </div>
  );
}
