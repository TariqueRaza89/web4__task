import "./startupcard.css";
import C1 from "../../assets/c1.jpg";
import C2 from "../../assets/c2.jpg";
import C3 from "../../assets/c3.jpg";
import { BsArrowRight } from "react-icons/bs";
const data = [
  {
    id: 1,
    image: C1,
    title: "Accounting & Finance",
    desc: "A great corporate strategy combines five elements: a bold yet realistic ambition, a carefully considered portfolio.",
  },
  {
    id: 2,
    image: C2,
    title: "Management Skills",
    desc: "A great corporate strategy combines five elements: a bold yet realistic ambition, a carefully considered portfolio.",
  },
  {
    id: 1,
    image: C3,
    title: "Business Planning",
    desc: "A great corporate strategy combines five elements: a bold yet realistic ambition, a carefully considered portfolio.",
  },
];
const StartupCard = () => {
  return (
    <div className="startup__card--container">
      {data.map(({ id, image, title, desc }) => {
        return (
          <article className="startup__card" key={id}>
            <img className="startup__img" src={image} alt="" />
            <div className="startup__info">
              <h3 className="start__title">{title}</h3>
              <p className="start__desc">{desc}</p>
              <div className="startup__btns">
                <p>explore more</p>
                <BsArrowRight />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default StartupCard;
