import Card from "../../components/card/Card";
import "./home.css";
import Slider from "../../components/slider/Slider";
import StartupCard from "../../components/startupcard/StartupCard";
// import Slider from "../../components/slider/Slider";
import Brand from "../../components/brand/Brand";

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <div className="container">
          <div className="hero__container">
            <p className="rounded">
              <span className="welcome__text">welcome</span> start growing your
              marketing today
            </p>
            <h2 className="hero__title">Corporate and Finance Solutions</h2>
            <p className="hero__desc">
              We are boutique firm designed for Private Equity, Family Offices,
              and Growth-Stage Companies seeking to maximize results
            </p>
            <div className="btns">
              <button className="btn explore__more--btn">explore more</button>
              <button className="btn getIn__touch--btn">get in touch</button>
            </div>
          </div>
        </div>
      </div>

      <div className="company__brand">
        <div className="container">
          <Brand />
        </div>
      </div>
      <div className="container">
        <div className="offer__content">
          <p className="rounded offer__text">what we offer</p>
          <div className="offer__text--container">
            <h2 className="offer__title">
              Make Digital Marketing Work For Your Business
            </h2>
            <p className="offer__desc">
              We serve clients at every level of their organization, whether as
              a trusted advisor to top management or as a hands-on coach. Our
              clients’ needs are constantly changing, so we continually seek new
              and better ways to serve them.
            </p>
          </div>
          <Card />
        </div>
      </div>
      <div className="startup__container">
        <div className="container">
          <p className="rounded what__we--do">what we do</p>
          <h2 className="startup__title">Creating Your Startup Business</h2>
          <p className="startup__desc">
            We help you see the world differently, discover opportunities you
            may never have imagined and achieve results that bridge what is with
            what can be.
          </p>
        </div>
      </div>
      <div className="container">
        <StartupCard />
        <div className="slider__container">
          <p className="rounded slider__text">our team</p>
          <h3 className="team__leader--title">Team Leaders of Company</h3>
          <p className="team__leader--desc">
            We help you see the world differently, discover opportunities you
            may never have imagined and achieve results that bridge what is with
            what can be.
          </p>
        </div>
      </div>
      <Slider />
    </section>
  );
};

export default Home;
