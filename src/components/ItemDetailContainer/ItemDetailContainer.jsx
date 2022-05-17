import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { productList } from '../../data/data'
import { getFetch } from '../../helpers/getFetch'

const ItemDetailContainer = () => {
    const [loader, setLoader] = useState(true);
    const [prod, setProductList] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        getFetch(id)  // fetch llamada a una api  
        .then(response=> setProductList(response.find(prod => prod.id === id)))
        .catch((err)=> console.log(err))
        .finally(()=>setLoader(false))     
    }, [])
// console.log(productList)
    return (
        <div>
            <ItemDetail product={productList}  />
        </div>
    )
}
// FechOne
//         .then(resp => setProducto(resp))
//         .catch(err => console.error(err))
export default ItemDetailContainer
