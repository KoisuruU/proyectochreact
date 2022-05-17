import Item from "../Item/Item"
import React from "react"
import ItemCount from "../ItemCount/ItemCount"
import '../styles/ItemDetail.css'

const ItemDetail = ({product}) => {
  console.log(product)
  return (
    <article className="product-detail">
      <img src={product.thumbnail} alt="" className="product-detail__img" />
      <div className="product-detail__info">
        <h2 className="name">{product.name}</h2>
        <p className="description">{product.description}</p>
        <ul className="info-grid">
          <li>Price: US${product.price}</li>
          <li>Stock: {product.stock} copies</li>
        </ul>
        <ItemCount stock={product.stock} initial={1} />
      </div>
    </article>
  )
}

export default ItemDetail

