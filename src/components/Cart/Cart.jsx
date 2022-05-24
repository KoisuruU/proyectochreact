import { useContext } from "react"
import { useCartContext } from "../../context/cartContext"



const Cart = () => {

  //  const cartContext = useContext(useCartContext);
  //  const { cartList, emptyCart } = cartContext;
    return (
      <div>
        <h1> Cart </h1>
        {/* {cartList.map(el => <li>Item: {el.product.name} - Cantidad: {el.qty}</li>)} */}
        {/* <button onClick={emptyCart}> Empty Cart! </button> */}
      </div>
    )
  }
  
  export default Cart
  