import { Link } from "react-router-dom";
import "./about.css";
import { IoIosArrowForward } from "react-icons/io";
import AboutImg from "../../assets/aboutus.jpg";
import FounderImg from "../../assets/signature.png";
import Company from "../../components/company/Company";
// import PrincipleImg from "../../assets/principle.png";

import Testimonial from "../../components/testimonial/Testimonial";
import Brand from "../../components/brand/Brand";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="about__us--content">
            <h1 className="about__us">About Us</h1>
            <p className="section">
              <Link className="home__link" to="/">
                home
              </Link>
              <IoIosArrowForward />
              about
            </p>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="about__company">
          <div className="about__us--left">
            <img src={AboutImg} alt="" />
          </div>
          <div className="about__us--right">
            <p className="rounded about__comapny--text">about company</p>
            <h3 className="about__company--title">
              Make Digital Marketing Work For Your Business
            </h3>
            <p className="about__company--desc">
              Our clients’ needs are constantly changing, so we continually seek
              new and better ways to serve them. To do this, we are bringing new
              talent into the firm, acquiring new companies, and developing new
              capabilities, for example, in design.
            </p>
            <p className="about__company--desc">
              We serve clients at every level of their organization, whether as
              a trusted advisor to top management or as a hands-on coach.
            </p>
            <div className="about__co-founder">
              <img src={FounderImg} className="founder__img" alt="" />
              <div className="founder__info">
                <h6 className="founder__name">Peter Adams</h6>
                <p className="co_founder">co-founder of company</p>
              </div>
            </div>
          </div>
        </div>
        <Company />
      </div>
      <Brand />
      <div className="testimonial__container">
        <div className="container">
          <p className="rounded testi__text">testimonial</p>
          <h3 className="testi__title">What People Say About Us</h3>
          <p className="testi__desc">
            We help you see the world differently, discover opportunities you
            may never have imagined and achieve results that bridge what is with
            what can be.
          </p>
          <Testimonial />
        </div>
      </div>
    </>
  );
};

export default About;
