import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";
import { useEffect } from "react";
import "../contact/contact.style.css"
import illustration from "../../img/undraw_Profile_re_4a55.png"
export function Contact() {
  useEffect(() => {
    AOS.init({duration:2000});
    AOS.refresh();
  }, []);
  return (
    // <div id="contact" className="mb-4" data-aos="zoom-in">
    //   <div className="container py-4">
    //     {/* Bootstrap 5 starter form */}
    //     <form id="contactForm" data-sb-form-api-token="c875df7c-2715-439c-84ef-98f78ada51b1">
    //       {/* Name input */}
    //       <div className="mb-3">
    //         <label className="form-label" HtmlFor="name">
    //           Name
    //         </label>
    //         <input
    //           className="form-control"
    //           id="name"
    //           type="text"
    //           placeholder="Name"
    //           data-sb-validations="required"
    //         />
    //         <div className="invalid-feedback" data-sb-feedback="name:required">
    //           Name is required.
    //         </div>
    //       </div>

    //       {/* Email address input */}
    //       <div className="mb-3">
    //         <label className="form-label" HtmlFor="emailAddress">
    //           Email Address
    //         </label>
    //         <input
    //           className="form-control"
    //           id="emailAddress"
    //           type="email"
    //           placeholder="Email Address"
    //           data-sb-validations="required, email"
    //         />
    //         <div
    //           className="invalid-feedback"
    //           data-sb-feedback="emailAddress:required"
    //         >
    //           Email Address is required.
    //         </div>
    //         <div
    //           className="invalid-feedback"
    //           data-sb-feedback="emailAddress:email"
    //         >
    //           Email Address Email is not valid.
    //         </div>
    //       </div>

    //       {/* Message input */}
    //       <div className="mb-3">
    //         <label className="form-label" HtmlFor="message">
    //           Message
    //         </label>
    //         <textarea
    //           className="form-control"
    //           id="message"
    //           type="text"
    //           placeholder="Message"
    //           style={{height: '10 rem'}}
    //           data-sb-validations="required"
    //         ></textarea>
    //         <div
    //           className="invalid-feedback"
    //           data-sb-feedback="message:required"
    //         >
    //           Message is required.
    //         </div>
    //       </div>

    //       {/* Form submissions success message */}
    //       <div className="d-none" id="submitSuccessMessage">
    //         <div className="text-center mb-3">Form submission successful!</div>
    //       </div>

    //       {/* Form submissions error message */}
    //       <div className="d-none" id="submitErrorMessage">
    //         <div className="text-center text-danger mb-3">
    //           Error sending message!
    //         </div>
    //       </div>

    //       {/* Form submit button */}
    //       <div className="d-grid">
    //         <button
    //           className="btn btn-primary btn-lg "
    //           id="submitButton"
    //           type="submit"
    //         >
    //           ENVOYER !
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div className="contenair mt-5 p-5">
      <div className="wrapper d-flex flex-row align-items-center w-auto">
        
        <img src={illustration} className="col-6 py-auto img-fluid" alt="" />
        
        <div className="form col-6 d-flex flex-column ">
          <span className="get_in_touch mb-4">LET'S GET IN TOUCH</span>
          <form className="d-flex flex-column">
            <input type="text" className="name position-relative mb-2 px-5" placeholder="Name" />
            <i class="bi bi-person-fill"></i>
            <input type="email" className="email position-relative mb-2 px-5" placeholder="email" />
            <i class="bi bi-envelope-fill"></i>
            <textarea name="message" className="mb-4 px-4" id="" cols="30" rows="7" placeholder="Message"></textarea>
            <button className="text-light" >Envoyer !</button>
          </form>
        </div>
      </div>
    </div>
  );
}
