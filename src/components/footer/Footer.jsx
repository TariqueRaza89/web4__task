import "./footer.css";
import FLogo from "../../assets/02_White.svg";

import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsTelephoneFill, BsSendFill, BsArrowRight } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__logo--socials">
            <img src={FLogo} className="footer__logo" alt="footer logo" />
            <p className="footer__text">
              We make this belief a reality by putting clients first, leading
              with exceptional ideas, doing the right thing, and giving back.
            </p>
            <div className="socials">
              <FaTwitter className="social__icon" />
              <FaFacebookF className="social__icon" />
              <FaLinkedinIn className="social__icon" />
            </div>
          </div>

          <div className="footer__contact">
            <h2>Contacts</h2>
            <div className="location__contents">
              <HiLocationMarker className="contact__icon" />
              <div>
                <div className="visit__us--text">Visit Us Daily</div>
                <h4 className="location__name">411 University St, Seattle</h4>
              </div>
            </div>
            <div className="phone__contents">
              <BsTelephoneFill className="contact__icon" />
              <div>
                <div className="visit__us--text">Have Any Question?</div>
                <h4 className="location__name">+123456</h4>
              </div>
            </div>
            <div className="mail__contents">
              <BsSendFill className="contact__icon" />
              <div>
                <div className="visit__us--text">Mail Us</div>
                <h4 className="location__name">maxbizz@gmail.com</h4>
              </div>
            </div>
          </div>
          <div className="subscribe">
            <h2>Subscribe</h2>
            <div className="email__field">
              <input type="email" placeholder="Your Email*" />
              <BsArrowRight className="s__icon" />
            </div>
            <p className="subs__text">
              Subscribe to our newsletter. Be always in trend!
            </p>
          </div>
        </div>
        <hr />
        <p className="copyright">
          Copyright © 2021 Maxbizz by OceanThemes. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
