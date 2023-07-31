import "./card.css";
import { TbChartHistogram } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { FaSignal, FaHandHoldingUsd } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const data = [
  {
    id: 1,
    icon: <TbChartHistogram className="card__icon" />,
    title: "Consulting",
    desc: `We’ve been a strategy thought leader for nearly five decades
        and we bring unrivaled `,
  },
  {
    id: 2,
    icon: <FiSettings className="card__icon" />,
    title: "Planning",
    desc: `We’ve been a strategy thought leader for nearly five decades
        and we bring unrivaled `,
  },
  {
    id: 3,
    icon: <FaSignal className="card__icon" />,
    title: "Strategy",
    desc: `We’ve been a strategy thought leader for nearly five decades
        and we bring unrivaled `,
  },
  {
    id: 4,
    icon: <FaHandHoldingUsd className="card__icon" />,
    title: "Support",
    desc: `We’ve been a strategy thought leader for nearly five decades
        and we bring unrivaled `,
  },
];
const Card = () => {
  return (
    <div className="card__container">
      {data.map(({ id, icon, title, desc }) => {
        return (
          <article className="card" key={id}>
            {icon}
            <h3>{title}</h3>
            <p className="card__desc">{desc}</p>
            <div className="explore__more">
              <BsArrowRight className="arrow__icon" />
              <p className="explore__text">explore more</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Card;
