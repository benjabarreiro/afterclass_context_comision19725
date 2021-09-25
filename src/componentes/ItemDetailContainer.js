import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

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
          res(data.find((el) => el.id === id));
          rej(console.log("error"));
        }, 2000);
      });

    promise()
      .then((res) => setProduct(res))
      .catch((err) => err);
  }, [id]);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
}
