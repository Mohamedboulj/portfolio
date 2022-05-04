import AOS from "aos";
import { ToastContainer, toast } from 'react-toastify';
import "../../../node_modules/react-toastify/dist/ReactToastify.css";
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
    const notify = () => toast.success('Message sent!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

    const sendEmail = (e) => {
      // if(form[name])
      e.preventDefault();
      emailjs.sendForm('service_8qa0kms', 'template_sjbm5ze', e.target, '5dMXa4JuOWQZTJac2')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset() ;
        notify()
    };
  return (
    <div className="contenair mt-5 p-5">
      <ToastContainer position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover />
      <div className="wrapper d-flex flex-row align-items-center w-auto">
        
        <img src={illustration} className="col-6 d-none d-md-block py-auto img-fluid" alt=""  data-aos="fade-right" />
        
        <div className="form col-12 col-md-6 d-flex flex-column " data-aos="fade-up">
          <span className="get_in_touch mb-4">LET'S GET IN TOUCH</span>
          <form ref={form} onSubmit={sendEmail} className="d-flex flex-column" >
            <input type="text" className="name position-relative mb-2 px-5" name="destinateur" placeholder="Name" required />
            <i class="bi bi-person-fill"></i>
            <input type="email" className="email position-relative mb-2 px-5"  name="email" placeholder="email" required/>
            <i className="bi bi-envelope-fill"></i>
            <textarea name="message" className="mb-4 px-4" id="" cols="30" rows="7" placeholder="Message" required ></textarea>
            <button className="text-light">Envoyer !</button>
          </form>
        </div>
      </div>
    </div>
  );

}
