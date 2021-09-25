import React from "react";
import ItemCount from "./ItemCount";
import {CartContextUse} from '../context/CartContext'

export default function ItemDetail({ product }) {
  const { addItem, clear, removeItem, cart } = CartContextUse();

  const onAdd = (qty) => {
      addItem(product, qty)
  }
  return (
    <div>
      <p>{product.name}</p>
      <ItemCount onAdd={onAdd} />
      <button onClick={clear}>Borarr todo</button>
      {cart.map(element => {
        return (
          <>
            {element.item.name}
            <button onClick={() => removeItem(element.item.id)}>Quitar item</button>
          </>
        )
      })}
    </div>
  );
}
