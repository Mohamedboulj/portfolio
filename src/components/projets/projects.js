import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import"../../../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "../projets/projets.style.css"
import projet1 from "../../img/p1.png";
import projet2 from "../../img/p2.png";
import projet3 from "../../img/p3.png";
import projet4 from "../../img/p4.png";
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";
import { useEffect } from "react";
export function Projects() {
  useEffect(() => {
    AOS.init({duration: 2000});
    AOS.refresh();
  }, []);
  return (
    <div id="projects" className="projets mb-5" >
      <div className="All">
        <div className="row my-4">
          <div className="col-md mb-2 d-flex justify-content-center align-items-center flex-column" data-aos="fade-right">
            <img src={projet1} className="rounded" title="Weather Application"  alt="Weather Application" />
            <span><a href="https://mohamedboulj.github.io/Weather-application/" target={"_blank"}>View</a></span> 
          </div>
          <div className="col-md mb-2 d-flex justify-content-center align-items-center flex-column" data-aos="fade-right">
            <img src={projet2} className="rounded" title="Quotes Generator" alt="Quotes Generator" />
            <span><a href="https://mohamedboulj.github.io/QuotesGen/" target={"_blank"}>View</a></span>
            
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md mb-2 d-flex justify-content-center align-items-center flex-column" data-aos="fade-right">
            <img src={projet3} className="rounded" title="Website made with BS" alt="Website made with BS" />
            <span><a href="https://mohamedboulj.github.io/bootstarp-project1" target={"_blank"}>View</a></span>
            
          </div>
          <div className="col-md mb-2 d-flex justify-content-center align-items-center flex-column" data-aos="fade-right">
            <img src={projet4} className="rounded" title="React Todo Application" alt="React Todo Application" />
            <span><a href="https://mohamedboulj.github.io/Todolist/" target={"_blank"}>View</a></span>

          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end px-5"> <span><i className="bi bi-chevron-double-right"></i><a href="https://github.com/Mohamedboulj?tab=repositories" target={"_blank"}>See more</a></span></div>
    </div>
  );
}
