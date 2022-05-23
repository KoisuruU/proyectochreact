import { productList } from "../data/data";



export const getFetch = (category) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
                const idProd = category ? productList.find(product => product.category === category ) : productList                               
                resolve( idProd )                           
            }, 2000)
        })            
    
}
