import  { BsFillBasket2Fill }  from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <>
      <Link to='/cart'>
        <h3> <BsFillBasket2Fill /> </h3>
      </Link>
    </>
  )
}

export default CartWidget