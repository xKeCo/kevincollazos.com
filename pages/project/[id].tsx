// Next
import { useRouter } from "next/router";
import Image from "next/image";

// Styles
import s from "/styles/ProjectInfo.module.css";

// Hooks
import { useProjectByID } from "../../hooks/useProjectByID";

// LocalComponents
import { Loader, ProjectDetails, SEO } from "../../components";

// Image Zoom
import Zoom from "react-medium-image-zoom";

type imagesData = {
  id: number;
  image: string;
  alt: string;
};

function ProjectInfo() {
  const router = useRouter();
  const path = router.query.id;
  const id = path?.toString();

  const { project, loading, error } = useProjectByID(id);

  return (
    <>
      <SEO title={`${project?.fullTitle} | Project`} />

      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className={s.projectInfo}>
          <ProjectDetails
            fullTitle={project?.fullTitle}
            description={project?.description}
            type={project?.type || []}
            year={project?.year}
            site={project?.site}
            github={project?.github}
          />
          <div className={s.projectInfo__mainImage}>
            <Zoom zoomMargin={16}>
              <Image
                className={s.projectInfo__image}
                src={project?.mainImage || "/images/placeholder.png"}
                alt={`${project?.alt}`}
                placeholder="blur"
                blurDataURL={"/images/placeholder.png"}
                // width={1920}
                // height={1000}
                fill
                priority
              />
            </Zoom>
          </div>
          {project?.video && (
            <div
              className={s.projectInfo__video}
              style={{
                backgroundColor: project?.videoBgColor,
              }}
            >
              <div className={s.projectInfo__video__container}>
                <video
                  className={s.projectInfo__video__item}
                  src={project.video}
                  playsInline
                  autoPlay
                  loop
                  muted
                  width="100%"
                />
              </div>
            </div>
          )}
          {project?.images && (
            <div className={s.projectInfo__imagePhone}>
              <div className={s.projectInfo__imagePhone__item}>
                {project.images.map((image: imagesData) => (
                  <Zoom zoomMargin={16} key={image.id}>
                    <img
                      className={s.projectInfo__imagePhone__image}
                      src={image.image}
                      alt="mainImage"
                      // placeholder="blur"
                      // blurDataURL={"/images/placeholder.png"}
                      width="100%"
                      // width={1170}
                      // height={2224}
                      // priority
                    />
                  </Zoom>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default ProjectInfo;
