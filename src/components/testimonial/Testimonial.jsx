import "./testimonial.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import T1 from "../../assets/t1.png";
import T2 from "../../assets/t2.png";
import T3 from "../../assets/t3.png";

const data = [
  {
    id: 1,
    desc: `“We know a diverse workforce and an inclusive culture matters to our clients. Through philanthropy and employee volunteerism, we support the diverse communities where our employees live.”
    `,
    img: T1,
    name: "Mary Grey",
    role: "client of company",
  },

  {
    id: 2,
    desc: `“We know a diverse workforce and an inclusive culture matters to our clients. Through philanthropy and employee volunteerism, we support the diverse communities where our employees live.”
    `,
    img: T2,
    name: "Mary Grey",
    role: "client of company",
  },
  {
    id: 3,
    desc: `“We know a diverse workforce and an inclusive culture matters to our clients. Through philanthropy and employee volunteerism, we support the diverse communities where our employees live.”
    `,
    img: T3,
    name: "Mary Grey",
    role: "client of company",
  },
  {
    id: 4,
    desc: `“We know a diverse workforce and an inclusive culture matters to our clients. Through philanthropy and employee volunteerism, we support the diverse communities where our employees live.”
    `,
    img: T2,
    name: "Mary Grey",
    role: "client of company",
  },
  {
    id: 5,
    desc: `“We know a diverse workforce and an inclusive culture matters to our clients. Through philanthropy and employee volunteerism, we support the diverse communities where our employees live.”
    `,
    img: T1,
    name: "Mary Grey",
    role: "client of company",
  },
];

const options = {
  margin: 30,
  responsiveClass: true,
  dots: true,
  autoplay: true,
  smartSpeed: 1000,
  responsive: {
    300: {
      items: 1,
    },
    360: {
      items: 1,
    },
    700: {
      items: 1,
    },
    780: {
      items: 2,
    },
    1035: {
      items: 3,
    },
  },
};

const Testimonial = () => {
  return (
    <div className="tesimonial">
      <OwlCarousel className="owl-theme" {...options}>
        {data.map(({ id, desc, img, name, role }) => {
          return (
            <div className="item" key={id}>
              <p className="item__desc">{desc}</p>
              <hr />
              <div className="profile">
                <img src={img} alt="" className="person__img" />
                <div className="person__role">
                  <h3 className="person__name">{name}</h3>
                  <p className="role">{role}</p>
                </div>
              </div>
            </div>
          );
        })}
      </OwlCarousel>
    </div>
  );
};

export default Testimonial;
