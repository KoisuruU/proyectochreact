import { useContext } from "react"
import { useCartContext } from "../../context/cartContext"



const Cart = () => {

  // const cartContext = useContext(useCartContext);
  // const { cartList, emptyCart } = cartContext;
    return (
      <div>
        Cart
        {/* {cartList.map(product => <li>{product.name} - {product.price} - {product.qty}</li> )}
        <button onClick={emptyCart}>Empty Cart!</button> */}
      </div>
    )
  }
  
  export default Cart
  