import React from "react";

interface GifItemProps {
  title: string;
  url: string;
  id: string; // Cambia a string si `id` es de tipo string
}

export const GifItem: React.FC<GifItemProps> = ({ title, url, id }) => {
  return (
    <div className="Card" key={id}>
      <img src={url} alt={title} />
    </div>
  );
};
