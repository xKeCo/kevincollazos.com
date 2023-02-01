// React
import { useCallback, useEffect, useState } from "react";

// Firebase db
import { db } from "../firebase/firebase";

// Firestore
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

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
  images?: imagesData;
};

type imagesData = {
  id: number;
  image: string;
  alt: string;
};

export const useProjects = () => {
  const [projects, setProject] = useState<ProjectData[]>();

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  const getProjects = useCallback(async () => {
    try {
      const docRef = collection(db, "projects");

      const q = query(docRef, orderBy("id", "asc"));

      onSnapshot(q, (querySnapshot) => {
        const docs = querySnapshot.docs.map((doc) => doc.data());

        setProject(docs as ProjectData[]);
        setLoading(false);
      });
    } catch (e) {
      console.log(e);
      setError(true);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getProjects();
  }, []);

  return { projects, loading, error };
};
