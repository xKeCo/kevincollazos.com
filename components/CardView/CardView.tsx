// Local Components
import { Card } from "../Card/Card";

// Styles
import s from "./CardView.module.css";

// Porject data
// import { projects } from "../../data/projects";

// Hooks
import { useProjects } from "../../hooks";

type cardData = {
  title: string;
  status: string;
  mainImage: string;
  alt: string;
};

export const CardView = () => {
  const { projects } = useProjects();

  return (
    <div className={s.cardView}>
      {projects &&
        projects.map((card: cardData) => {
          return (
            <Card
              key={card.title}
              title={card.title}
              status={card.status}
              src={card.mainImage}
              alt={card.alt}
            />
          );
        })}
    </div>
  );
};
