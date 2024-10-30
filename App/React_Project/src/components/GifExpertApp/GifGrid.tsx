import React from "react";
import { getGifs } from "/Users/administrador/Desktop/React/React/App/React_Project/src/helpers/getGifs.tsx";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "@/hooks/useFetchGifs";

interface GifGridProps {
  category: string;
}

export const GifGrid: React.FC<GifGridProps> = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category); // Asegúrate de desestructurar isLoading

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p> // Muestra un mensaje de carga
      ) : (
        <ul>
          {images.map((image) => (
            <li key={image.id}>
              <GifItem key={image.id} {...image} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
