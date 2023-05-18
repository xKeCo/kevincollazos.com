// Local Components
import { Card } from '../Card/Card';

// Styles
import s from './CardView.module.css';

// Porject data
// import { projects } from "../../data/projects";

// Hooks
import { useProjects } from '../../hooks';

type cardData = {
  title: string;
  status: string;
  frontImage: string;
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
              src={card.frontImage}
              alt={card.alt}
            />
          );
        })}
    </div>
  );
};
