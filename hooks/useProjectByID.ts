import { useEffect, useState } from "react";
import { projects } from "../data/projects";

type ProjectData = {
  id: number;
  title: string;
  fullTitle: string;
  description: string;
  status: string;
  mainImage: string;
  alt: string;
  type: string[];
  year: string;
  site?: string;
  github?: string;
  video?: string;
  videoBgColor?: string;
  images?: {
    id: number;
    image: string;
    alt: string;
  }[];
};

export const useProjectByID = (title: any) => {
  const [project, setProject] = useState<ProjectData>();

  const getProjectByID = (title: string) => {
    const data = projects.find((project) => project.title === title);

    setProject(data);
  };

  useEffect(() => {
    getProjectByID(title);
  }, [title]);

  return { getProjectByID, project };
};
