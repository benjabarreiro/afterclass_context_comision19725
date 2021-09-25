import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = [
      { id: "1", name: "prod1", stock: 5 },
      { id: "2", name: "prod2", stock: 5 },
      { id: "3", name: "prod3", stock: 5 },
      { id: "4", name: "prod4", stock: 5 },
    ];

    const promise = () =>
      new Promise((res, rej) => {
        setTimeout(() => {
          res(data);
          rej(console.log("error"));
        }, 0);
      });

    promise()
      .then((res) => setProducts(res))
      .catch((err) => err);
  }, []);
  return (
    <div>
      {products.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
}
