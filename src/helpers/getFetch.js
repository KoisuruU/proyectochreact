import { productList } from "../data/data";



export const getFetch = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
                const idProd = id ? productList.find(product => product.id === id ) : productList                                 
                resolve( idProd )                           
            }, 2000)
        })            
    
}
