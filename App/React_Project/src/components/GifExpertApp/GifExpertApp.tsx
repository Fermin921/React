import React, { useState } from "react";
import { ButtonWithIcon } from "./button2";
import { AddCategory } from "./AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["categories", "setCategories"]);

  const onAddCategory = () => {
    setCategories([...categories, "nueva categoria"]); //Se hace una copia del arreglo y se agregar el segundo valor al arreglo
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onCategories={setCategories} />
      <br></br>
      <ol>
        {categories.map((category: string) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
