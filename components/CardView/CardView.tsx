// Local Components
import Link from "next/link";
import { Card } from "../Card/Card";

// Styles
import s from "./CardView.module.css";

// Porject data
import { projects } from "../../data/projects";

export const CardView = () => {
  return (
    <div className={s.cardView}>
      {projects.map((card) => {
        return (
          <Card
            key={card.title}
            title={card.title}
            status={card.status}
            src={card.src}
            alt={card.alt}
          />
        );
      })}
    </div>
  );
};
