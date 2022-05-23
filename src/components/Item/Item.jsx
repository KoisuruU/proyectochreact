import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import '../styles/Item.css';

const Item = (product) => {
  const onAdd = (qty) => {
    alert(`You've added ${qty} copies of ${product.name}`);
  };

  return (
    <article className="product-card">
      <img className="product-card__image" src={product.thumbnail} alt="" />
      <Link to={`/detail/${product.id}`}>
      <h3 className="product-card__name">{product.name}</h3>
      </Link>
      <span className="product-card__name">US${product.price}</span>
      <h4>Stock: {product.stock} </h4>

      <ItemCount stock={product.stock} onAdd={onAdd} initial={1} />
    </article>
  );
}

export default Item;
