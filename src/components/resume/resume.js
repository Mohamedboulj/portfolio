import "../resume/resume.style.css";
import pic from "../../img/cc.png";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";
import html from "../../img/html.png";
import css from "../../img/css.png";
import js from "../../img/js.png";
import bootstrap from "../../img/bootstrap.png";
import react from "../../img/react.png";
import git from "../../img/git.png";
import music from "../../img/music.png";
import voyage from "../../img/voyage.png";
import football from "../../img/football.png";
import cinema from "../../img/cinema.png";
import cv from "../../files/Mohamed_Bouljihel_FS_DEV.pdf";
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";
import { useEffect } from "react";
export function Resume() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <div id="resume" className="resume mb-5" data-aos="fade-up">
      <div className="mycontainer">
        <header className="row px-0 mx-0 mb-3">
          {/* <img src={pic} className="img-fluid mypic" alt="medpic" /> */}

          <div className="col px-0 nom_poste ">
            {/* <h2>Mohamed Bouljihel</h2> */}
            <h3 className="my-5 fw-600">&lt;FULSTACK WEB DEVELOPER/&gt;</h3>
            <a href={cv} className="hbtn hb-fill-middle2-bg hbor2 hpad2"><i className="bi bi-cloud-arrow-down-fill" aria-hidden="true"></i>Download</a>

          </div>

          {/* <ul className="col justify-content-center info">
            <li>Bd Cadi Tazi, lot YASMINA Imm B, App 2</li>
            <li>Mohammedia</li>
            <li>Tel :+212615110495</li>
            <li>med.blj93@gmail.com</li>
            <li>permis de conduire B</li>
            <li>
              <img src={linkedin} alt="linkedIn" />
              <a href="https://www.linkedin.com/in/mohamed-bouljihel">
                <label>|mohamed-bouljihel</label>
              </a>
            </li>
            <li>
              <img src={github} alt="github" />
              <a href="https://github.com/Mohamedboulj">
                <label>&nbsp;|Mohamedboulj</label>
              </a>
            </li>
          </ul> */}
        </header>
        <main>
          <div className="explan">
            <section className="exp">
              <div className="experience">
                <h2>Experiences</h2>
                <h4>Gestionnaire de stock Solestor Mohammedia</h4>
                <h5>Juil 2019 - Juin 2020</h5>
                <ul>
                  <li>
                    Réaliser, réceptionner et contrôler les commandes de
                    marchandises
                  </li>
                  <li>
                    Gérer les différents mouvements de stock dans le respect des
                    procédures
                  </li>
                  <li>
                    Préparer, réaliser et analyser les différents inventaires
                  </li>
                </ul>
                <h4>Stage PFE au sein de la Sté OMSAN LOGISTIQUE MAROC</h4>
                <h5>Fev 2018 - Sep 2018</h5>
                <ul>
                  <li>
                    Mise en place d’une grille pour le calcul et l’optimisation
                    du prix de revient
                  </li>
                  <li>Aide à la planification des tournées des camions</li>
                  <li>Gestion du problème des avaries</li>
                </ul>
                <h4>Stage d’initiation au sein de la Sté M’dina Bus</h4>
                <h5>Sep 2017 – Oct 2017</h5>
                <ul>
                  <li>
                    Ce stage me fût la passerelle vers le monde professionnel à
                    travers le domaine de transport
                  </li>
                  <li>
                    Initiation au problème des avaries souvent envisagés par les
                    bus et son effet sur l'efficacité de la chaîne logistique
                    (retard , gaspillage de carburant
                  </li>
                </ul>
              </div>
            </section>
            <section className="lan mb-3">
              <h2>Langues</h2>
              <div className="d-flex flex-row ">
                <div className="label">
                  <label HtmlFor="ar">Arabe</label>
                  <label HtmlFor="fr">Francais</label>
                  <label HtmlFor="an">Anglais</label>
                  <label HtmlFor="ta">Tamazight</label>
                </div>
                <div className="label">
                  <label HtmlFor="ar">&nbsp;: Maternelle</label>
                  <label HtmlFor="fr">&nbsp;: Courant</label>
                  <label HtmlFor="an">&nbsp;: Courant</label>
                  <label HtmlFor="ta">&nbsp;: Maternelle</label>
                </div>
              </div>
            </section>
          </div>
          <div className="forcom">
            <section>
              <section className="HtmlFor">
                <h2>Formation</h2>
                <div>
                  <h4>FORMATION a la 3W academy</h4>
                  <h5>Fev 2022- Mai 2022</h5>
                  <ul>
                    <li>Développememt Web Full-Stack (Php-Laravel-ReactJS)</li>
                  </ul>
                </div>
                <h4>MASTER spécialisé</h4>
                <h5>2016-2018</h5>
                <ul>
                  <li>
                    Ingénierie et optimisation des systèmes de transport et
                  logistique (IOSTL) |&nbsp; FS Ain Chock CASABLANCA
                  </li>
                  
                </ul>

                <h4>LICENCE FONDAMENTALE</h4>
                <h5>2012-2016</h5>
                <ul>
                  <li>
                    Sciences mathématiques appliquées |&nbsp;FS Ain chock
                  CASABLANCA
                  </li>
                  
                </ul>

                <h4>BACCALAURÉAT Sciences mathématiques A</h4>
                <h5>2012</h5>
                <ul>
                  <li>Lycée Sidi Ahmed Bennacer ZAGORA</li>
                </ul>
                
              </section>

              <section className="com mb-3">
                <h2 className="mb-3">Competences</h2>
                <div className="parent">
                  <div className="html">
                    <img src={html} alt="" />
                  </div>
                  <div className="css">
                    <img src={css} alt="" />
                  </div>
                  <div className="js">
                    <img src={js} alt="" />
                  </div>
                  <div className="bootstrap">
                    <img src={bootstrap} alt="" />
                  </div>
                  <div className="react">
                    <img src={react} alt="" />
                  </div>
                  <div className="github">
                    <img src={git} alt="" />
                  </div>
                </div>
              </section>
              <section className="ci">
                <h2>Centres d'interet</h2>
                <div className="hobbies d-flex flex-row justify-content-center mt-3">
                  <img src={football} alt="football" />
                  <img src={voyage} alt="assurance-voyage" />
                  <img src={music} alt="music" />
                  <img src={cinema} alt="projecteur-de-cinema" />
                </div>
              </section>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
