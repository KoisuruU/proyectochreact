import Item from "../Item/Item"
import React, { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import '../styles/ItemDetail.css'
import { CartContext, useCartContext } from "../../context/cartContext"
import { useContext } from "react"
import { BuyButton } from "../BuyButton/BuyButton"

const ItemDetail = ({product, onAdd}) => {
  
  // const [inputType, setInputType] = useState('itemCount');

  // function handleInputType() {
  //   setInputType('buyButtons')
  // }
  // const CartContext = useContext(CartContext)
  // const {addToCart} = useCartContext;

  // const onAdd = (qty) => {
  //   console.log(qty)
  //   addToCart({ ...product, cantidad: qty })
  // }


  // console.log(product)

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
        <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
        <BuyButton/>
      </div>
    </article>
  )
}

export default ItemDetail

