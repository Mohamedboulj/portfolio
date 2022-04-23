import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";
import { useEffect } from "react";
export function Contact() {
  useEffect(() => {
    AOS.init({duration:2000});
    AOS.refresh();
  }, []);
  return (
    <div id="contact" className="mb-4" data-aos="zoom-in">
      <div className="container py-4">
        {/* Bootstrap 5 starter form */}
        <form id="contactForm" data-sb-form-api-token="c875df7c-2715-439c-84ef-98f78ada51b1">
          {/* Name input */}
          <div className="mb-3">
            <label className="form-label" HtmlFor="name">
              Name
            </label>
            <input
              className="form-control"
              id="name"
              type="text"
              placeholder="Name"
              data-sb-validations="required"
            />
            <div className="invalid-feedback" data-sb-feedback="name:required">
              Name is required.
            </div>
          </div>

          {/* Email address input */}
          <div className="mb-3">
            <label className="form-label" HtmlFor="emailAddress">
              Email Address
            </label>
            <input
              className="form-control"
              id="emailAddress"
              type="email"
              placeholder="Email Address"
              data-sb-validations="required, email"
            />
            <div
              className="invalid-feedback"
              data-sb-feedback="emailAddress:required"
            >
              Email Address is required.
            </div>
            <div
              className="invalid-feedback"
              data-sb-feedback="emailAddress:email"
            >
              Email Address Email is not valid.
            </div>
          </div>

          {/* Message input */}
          <div className="mb-3">
            <label className="form-label" HtmlFor="message">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              type="text"
              placeholder="Message"
              style={{height: '10 rem'}}
              data-sb-validations="required"
            ></textarea>
            <div
              className="invalid-feedback"
              data-sb-feedback="message:required"
            >
              Message is required.
            </div>
          </div>

          {/* Form submissions success message */}
          <div className="d-none" id="submitSuccessMessage">
            <div className="text-center mb-3">Form submission successful!</div>
          </div>

          {/* Form submissions error message */}
          <div className="d-none" id="submitErrorMessage">
            <div className="text-center text-danger mb-3">
              Error sending message!
            </div>
          </div>

          {/* Form submit button */}
          <div className="d-grid">
            <button
              className="btn btn-primary btn-lg "
              id="submitButton"
              type="submit"
            >
              ENVOYER !
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
