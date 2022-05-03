import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";
import emailjs from 'emailjs-com';
import { useEffect, useRef } from "react";
import "../contact/contact.style.css"
import illustration from "../../img/undraw_Profile_re_4a55.png"
export function Contact() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_8qa0kms', 'template_sjbm5ze', e.target, '5dMXa4JuOWQZTJac2')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
  return (
    <div className="contenair mt-5 p-5">
      <div className="wrapper d-flex flex-row align-items-center w-auto">
        
        <img src={illustration} className="col-6 d-none d-md-block py-auto img-fluid" alt=""  data-aos="fade-right" />
        
        <div className="form col-12 col-md-6 d-flex flex-column " data-aos="fade-up">
          <span className="get_in_touch mb-4">LET'S GET IN TOUCH</span>
          <form ref={form} onSubmit={sendEmail} className="d-flex flex-column">
            <input type="text" className="name position-relative mb-2 px-5" name="destinateur" placeholder="Name" />
            <i class="bi bi-person-fill"></i>
            <input type="email" className="email position-relative mb-2 px-5"  name="destinatair" placeholder="email" />
            <i className="bi bi-envelope-fill"></i>
            <textarea name="message" className="mb-4 px-4" id="" cols="30" rows="7" placeholder="Message"></textarea>
            <button className="text-light" >Envoyer !</button>
          </form>
        </div>
      </div>
    </div>
  );

}
