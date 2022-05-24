import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/BuyButton.css"

export const BuyButton = () => {
    return (
    <>
        <div className='buyButton'>
            <Link to={"/"}>
                <button className='button'>Keep shopping!</button>
            </Link>
            <Link to={"/cart"}>
                <button className='button'>Go to Cart!</button>
            </Link>
        </div>
    </>
    )
}