import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import '../styles/Item.css';

const Item = (item) => {
  const onAdd = (qty) => {
    alert(`You've added ${qty} copies of ${item.name}`);
  };

  return (
    <article className="product-card">
      <img className="product-card__image" src={item.thumbnail} alt="" />
      <Link to={`/detail/${item.id}`}>
      <h3 className="product-card__name">{item.name}</h3>
      </Link>
      <span className="product-card__name">US${item.price}</span>
      <h4>Stock: {item.stock} </h4>

      <ItemCount stock={item.stock} onAdd={onAdd} initial={1} />
    </article>
  );
}

export default Item;
