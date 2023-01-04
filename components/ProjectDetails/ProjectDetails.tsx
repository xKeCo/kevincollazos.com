// Styles
import s from "./ProjectDetails.module.css";

type props = {
  fullTitle?: string;
  description?: string;
  type: string[];
  year?: string;
  site?: string;
  github?: string;
};

export const ProjectDetails = ({
  fullTitle,
  description,
  type,
  year,
  site,
  github,
}: props) => {
  return (
    <div className={s.projectDetails__details}>
      <h1 className={s.projectDetails__title}>{fullTitle}</h1>

      <div className={s.projectDetails__info}>
        <div className={s.projectDetails__description}>
          <p className={s.projectDetails__info__title}>DESCRIPTION</p>
          <p className={s.projectDetails__info__item}>{description}</p>
        </div>

        <div className={s.projectDetails__DateType}>
          <div className={s.projectDetails__type}>
            <p className={s.projectDetails__info__title}>TYPE</p>
            {type.map((type) => (
              <p key={type} className={s.projectDetails__info__item}>
                {type}
              </p>
            ))}
          </div>

          <div className={s.projectDetails__year}>
            <p className={s.projectDetails__info__title}>YEAR</p>
            <p className={s.projectDetails__info__item}>{year}</p>
          </div>
        </div>
      </div>
      {site || github ? (
        <div className={s.projectDetails__links}>
          <a href={`${site}`} target="_blank" rel="noreferrer">
            <div className={s.projectDetails__button}>Live site</div>
          </a>
          <a href={`${github}`} target="_blank" rel="noreferrer">
            <div className={s.projectDetails__button}>GitHub</div>
          </a>
        </div>
      ) : null}
    </div>
  );
};
