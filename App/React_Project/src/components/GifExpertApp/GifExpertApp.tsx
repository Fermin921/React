import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import "./css/GifExpertApp.css";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const onAddCategory = (value: string) => {
    if (value.trim().length > 0) {
      setCategories([...categories, value]);
    }
  };

  return (
    <div className="card">
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategories={onAddCategory} />
      <br />
      <ul>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ul>
    </div>
  );
};
