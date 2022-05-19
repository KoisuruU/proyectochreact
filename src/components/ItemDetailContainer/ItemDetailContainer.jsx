import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { productList } from '../../data/data'
import { getFetch } from '../../helpers/getFetch'

const ItemDetailContainer = () => {
    const [loader, setLoader] = useState(true);
    const [product, setProduct] = useState({});
    const { id } = useParams()

    useEffect(() => {
        getFetch(id)  // fetch llamada a una api  
        .then(response=> setProduct(response))
        .catch((err)=> console.log(err))
        // .finally(()=>setLoader(false))     
    }, [])
// console.log(product)
// console.log(id)

    return (
        <div>
            <ItemDetail product={product}  />
        </div>
    )
}
// FechOne
//         .then(resp => setProducto(resp))
//         .catch(err => console.error(err))
export default ItemDetailContainer
