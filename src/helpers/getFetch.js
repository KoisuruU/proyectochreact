import { productList } from "../data/data";



export const getFetch = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
                const query = id ? productList.find(producto => producto.id === id ) : productList                                 
                resolve( query )                           
            }, 2000)
        })            
    
}
