import React, { ReactNode, useState } from "react";

type PropType = {
  value: ReactNode;
};

function CounterApp({ value }: PropType) {
  // Hook
  const [counter, setCounter] = useState(4); // Desestructuración correcta

  const handleAdd = () => {
    //setCounter(counter + 1); // Cambiar el estado de forma correcta
    //Otra manera de implementarlo
    //Donde c es el valor de counter o de la propiedad que no cambia
    //despues de  la flecha espera una expresion u opearacion
    setCounter((c) => c + 1);
  };

  const handleSubstract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(0);

  return (
    <>
      <center>
        <h1>Counter App</h1>
        <h2>{counter}</h2> {/* Mostrar el contador */}
        <button onClick={handleAdd}>Add 1</button>
        <button onClick={handleSubstract}>Rest 1</button>
        <button onClick={handleReset}>Reset</button>
      </center>
    </>
  );
}

// Exportar para usarlo en otro lugar
export default CounterApp;
