import React, { useState } from "react";

// Definimos el tipo para las props del componente
interface AddCategoryProps {
  onCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AddCategory: React.FC<AddCategoryProps> = ({ onCategories }) => {
  const [value, setValue] = useState<string>("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value); // Actualiza el estado con el valor del input
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value); // Aquí maneja el valor al enviar el formulario

    // Llama a la función que recibe el nuevo valor
    onCategories((categories) => [value, ...categories]);
    setValue(""); // Limpia el input después de enviar
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Agregar categoría"
        value={value}
        onChange={onInputChange} // Llama a onInputChange cada vez que cambia el input
      />
    </form>
  );
};
