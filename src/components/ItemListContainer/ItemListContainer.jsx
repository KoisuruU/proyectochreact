import ItemList from "../ItemList/ItemList"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFetch } from "../../helpers/getFetch"


const ItemListContainer = ( { hey='Hey' } ) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { id } = useParams() 

    useEffect(() => {
        if (id) {
            getFetch()  // fetch llamada a una api  
            .then(respuesta=> setProducts(respuesta.filter((prods) => prods.category === id)))
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))                             
        } else {
            getFetch()  // fetch llamada a una api  
            .then(respuesta=> setProducts(respuesta))
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))                 
        }
    }, [id])

    // function onAdd(cant) {
    //     console.log(cant)
    // }
    
    console.log(id)


  return (
    <div>
      <h2 className="item-list-container__title">Our Albums!</h2>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer