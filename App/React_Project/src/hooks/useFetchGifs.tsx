import { getGifs } from "@/helpers/getGifs";
import React, { useEffect, useState } from "react";

interface Gif {
  id: string;
  title: string;
  url: string;
}

export const useFetchGifs = (category: string) => {
  const [images, setImages] = useState<Gif[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Agrega estado de carga

  const getImages = async () => {
    setIsLoading(true); // Comienza a cargar
    const newImages: Gif[] = await getGifs(category);
    setImages(newImages);
    setIsLoading(false); // Finaliza la carga
  };

  useEffect(() => {
    getImages();
  }, [category]);

  return {
    images,
    isLoading, // Retorna el estado de carga
  };
};
