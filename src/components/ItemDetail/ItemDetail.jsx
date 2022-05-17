import Item from "../Item/Item"
import React from "react"


const ItemDetail = ({product}) => {
  console.log(product)
  return (
    // <div className="row" >
    //   <div className="col">
    //     <img className="" src={item.foto} />
    //   </div>
    //   <div className="col">
    //     <h1>{item.name}</h1>
    //     <h2>{item.categoria}</h2>
    //     <p>{item.price}</p>
    //   </div>
    //   {/* <div></div> */}
    // </div>
    <Item item={product} />
  )
}

export default ItemDetail

