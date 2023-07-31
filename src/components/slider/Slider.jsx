import "./slider.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import P1 from "../../assets/p1.jpg";
import P2 from "../../assets/p2.jpg";
import P3 from "../../assets/p3.jpg";
import P4 from "../../assets/p4.jpg";
import P5 from "../../assets/p5.jpg";
import P6 from "../../assets/p6.jpg";
import P7 from "../../assets/p7.jpg";
import P8 from "../../assets/p8.jpg";
const image = [
  {
    id: 1,
    img: P1,
  },
  {
    id: 2,
    img: P2,
  },
  {
    id: 3,
    img: P3,
  },
  {
    id: 4,
    img: P4,
  },
  {
    id: 5,
    img: P5,
  },
  {
    id: 6,
    img: P6,
  },
  {
    id: 7,
    img: P7,
  },
  {
    id: 8,
    img: P8,
  },
];

const options = {
  margin: 20,
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
    1200: {
      items: 4,
    },
    1244: {
      items: 5,
    },
  },
};

const Slider = () => {
  return (
    <div className="sliders">
      <OwlCarousel className="slider-items owl-theme" {...options}>
        {image.map(({ id, img }) => {
          return (
            <img
              src={img}
              key={id}
              style={{ width: "100%", padding: "40px 0" }}
            />
          );
        })}
      </OwlCarousel>
    </div>
  );
};

export default Slider;
