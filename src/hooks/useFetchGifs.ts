import { getGifs } from "../helpers/getGifs";
import { useEffect, useState } from "react";

interface CategoriesProps  {
  category: string,
};

export const useFetchGifs = ( category: CategoriesProps ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs( category );
    setImages(newImages);
    setIsLoading(false);
  }

  useEffect( () => {
    getImages();
  }, []);

  return { images, isLoading }
}
