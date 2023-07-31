import "./company.css";

const Company = () => {
  return (
    <section className="company">
      <div className="company__info">
        <div className="value">
          <h3 className="counter">350</h3>
          <p className="company__text">
            TRUSTED <br /> CLIENTS
          </p>
        </div>
        <div className="value">
          <h3 className="counter">215</h3>
          <p className="company__text">
            FINISHED <br /> PROJECTS
          </p>
        </div>
        <div className="value">
          <h3 className="counter">15</h3>
          <p className="company__text">
            YEARS OF <br /> EXPERIENCE
          </p>
        </div>
        <div className="value">
          <h3 className="counter">36</h3>
          <p className="company__text">
            VISITED <br /> CONFERENCES
          </p>
        </div>
      </div>
    </section>
  );
};

export default Company;
