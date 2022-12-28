import { useEffect, useState } from "react";
import { projects } from "../data/projects";

type ProjectData = {
  id: number;
  title: string;
  fullTitle: string;
  description: string;
  status: string;
  src: string;
  alt: string;
  type: string[];
  year: string;
  site?: string;
  github?: string;
};

export const useProjectByID = (title: any) => {
  const [project, setProject] = useState<ProjectData>();

  const getProjectByID = (id: string) => {
    const data = projects.find((project) => project.title === id);

    setProject(data);
  };

  useEffect(() => {
    getProjectByID(title);
  }, [title]);

  return { getProjectByID, project };
};
