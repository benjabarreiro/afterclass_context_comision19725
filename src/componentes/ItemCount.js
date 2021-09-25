import React, { useState } from "react";

export default function ItemCount({onAdd}) {
  const [count, setCount] = useState(1);
  return (
    <div>
      <button onClick={() => setCount(count+1)}>Sumar</button>
      <button onClick={() => setCount(count-1)}>Restar</button>
	  <button onClick={() => onAdd(count)}>Agregar</button>
      <h1>{count}</h1>
    </div>
  );
}
