import { Link } from "react-router-dom";
import "./contact.css";
import { IoIosArrowForward } from "react-icons/io";
import cImg from "../../assets/image-contacts.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrSend } from "react-icons/gr";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="about__us--content">
            <h1 className="about__us">About Us</h1>
            <p className="section">
              <Link className="home__link" to="/">
                home
              </Link>
              <IoIosArrowForward />
              contact
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="contact__content">
          <div className="contact__content--left">
            <p className="rounded contact__text">contact details</p>
            <h3 className="contact__title">Our Contacts</h3>
            <p className="contact__desc">
              Give us a call or drop by anytime, we endeavour to answer all
              enquiries within 24 hours on business days. We will be happy to
              answer your questions.
            </p>

            <div className="contact__info">
              <FaMapMarkerAlt className="contact__icon" />
              <div className="contact__info--text">
                <h4 className="c__heading">Call Us 24/7</h4>
                <p className="conatct__para">+1-800-456-478-23</p>
              </div>
            </div>
            <div className="contact__info">
              <BsFillTelephoneFill className="contact__icon" />
              <div className="contact__info--text">
                <h4 className="c__heading">Mail Us</h4>
                <p className="conatct__para">maxbizz@mail.com</p>
              </div>
            </div>
            <div className="contact__info">
              <GrSend className="contact__icon" />
              <div className="contact__info--text">
                <h4 className="c__heading">Visit Us Daily</h4>
                <p className="conatct__para">411 University St, Seattle, USA</p>
              </div>
            </div>
          </div>
          <div className="contact__content--right">
            <img src={cImg} alt="" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="form__container">
          <h3>Ready to Get Started</h3>
          <div className="name__email">
            <input type="text" placeholder="Your Name*" />
            <input type="email" placeholder="Your Email*" />
          </div>
          <input type="password" placeholder="Password" />
          <textarea cols="30" rows="10" placeholder="Message"></textarea>
          <button>Send Message</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
