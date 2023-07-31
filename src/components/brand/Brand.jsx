import "./brand.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import B1 from "../../assets/01.svg";
import B2 from "../../assets/03.svg";
import B3 from "../../assets/04.svg";
import B4 from "../../assets/05.svg";
import B5 from "../../assets/06.svg";
import B6 from "../../assets/07.svg";
const data = [
  {
    id: 1,
    image: B1,
  },
  {
    id: 2,
    image: B2,
  },
  {
    id: 3,
    image: B3,
  },
  {
    id: 4,
    image: B4,
  },
  {
    id: 5,
    image: B5,
  },
  {
    id: 6,
    image: B6,
  },
];

const options = {
  margin: 30,
  responsiveClass: true,
  dots: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    970: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  },
};
const Brand = () => {
  return (
    <div className="company__brand">
      <div className="container">
        <OwlCarousel className="owl-theme" {...options}>
          {data.map(({ id, image }) => {
            return (
              <div className="items" key={id}>
                <img src={image} alt="" className="brand__logo" />
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Brand;
