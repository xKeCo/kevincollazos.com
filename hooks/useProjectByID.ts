// React
import { useEffect, useState } from "react";
// import { projects } from "../data/projects";

// Firebase
import { db } from "../firebase/firebase";

// Firebase
import { collection, getDocs, query, where } from "firebase/firestore";

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

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  const getProjectByID = async (title: string) => {
    try {
      if (title) {
        const docRef = collection(db, "projects");

        const q = query(docRef, where("title", "==", title));

        const projectData = await getDocs(q);

        const docs = { ...projectData.docs[0].data() };

        setProject(docs as ProjectData);

        setLoading(false);
      }
    } catch (error) {
      console.log(error);

      setError(true);

      setLoading(false);
    }
  };

  useEffect(() => {
    getProjectByID(title);
  }, [title]);

  return { project, error, loading };
};
