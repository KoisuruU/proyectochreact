import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

import '../styles/Item.css';

const Item = ({ name, thumbnail, price, id, stock }) => {
  const onAdd = (qty) => {
    alert(`You've added ${qty} copies of ${name}`);
  };

  return (
    <article className="product-card">
      <img className="product-card__image" src={thumbnail} alt="" />

      <h3 className="product-card__name">{name}</h3>
      <span className="product-card__name">US${price}</span>
      <h4>Stock: {stock} </h4>

      <ItemCount stock={stock} onAdd={onAdd} initial={1} />
    </article>
  );
};

export default Item;
