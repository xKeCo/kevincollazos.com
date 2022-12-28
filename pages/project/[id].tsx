// Next
import { useRouter } from "next/router";
import Image from "next/image";

// Styles
import s from "/styles/ProjectInfo.module.css";

// Hooks
import { useProjectByID } from "../../hooks/useProjectByID";

// Image Zoom
import Zoom from "react-medium-image-zoom";

function ProjectInfo() {
  const router = useRouter();
  const path = router.query.id;
  const id = path?.toString();

  const { project } = useProjectByID(id);

  return (
    <div className={s.projectInfo}>
      <div className={s.projectInfo__details}>
        <h1 className={s.projectInfo__title}>{project?.fullTitle}</h1>

        <div className={s.projectInfo__info}>
          <div className={s.projectInfo__description}>
            <p className={s.projectInfo__info__title}>DESCRIPTION</p>
            <p className={s.projectInfo__info__item}>{project?.description}</p>
          </div>

          <div className={s.projectInfo__DateType}>
            <div className={s.projectInfo__type}>
              <p className={s.projectInfo__info__title}>TYPE</p>
              {project?.type.map((type) => (
                <p key={type} className={s.projectInfo__info__item}>
                  {type}
                </p>
              ))}
            </div>

            <div className={s.projectInfo__year}>
              <p className={s.projectInfo__info__title}>YEAR</p>
              <p className={s.projectInfo__info__item}>{project?.year}</p>
            </div>
          </div>
        </div>
        {project?.site || project?.github ? (
          <div className={s.projectInfo__links}>
            <a href={`${project?.site}`} target="_blank" rel="noreferrer">
              <div className={s.projectInfo__button}>Live site</div>
            </a>
            <a href={`${project?.github}`} target="_blank" rel="noreferrer">
              <div className={s.projectInfo__button}>GitHub</div>
            </a>
          </div>
        ) : null}
      </div>
      <div className={s.projectInfo__mainImage}>
        <Zoom zoomMargin={16}>
          <Image
            className={s.projectInfo__image}
            src={project?.src || "/images/placeholder.png"}
            alt="mainImage"
            placeholder="blur"
            blurDataURL={"/images/placeholder.png"}
            // width={1920}
            // height={1000}
            fill
            priority
          />
        </Zoom>
      </div>
    </div>
  );
}

export default ProjectInfo;
