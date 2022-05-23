export const productList = [
    {
    name: 'The Billage of Perception : Chapter One',
    price: 15,
    thumbnail:'https://cdn.shopify.com/s/files/1/0469/3927/5428/products/billlie-the-billage-of-perceiption-chapter-1-nolae-281665_1024x1024.jpg?v=1636003848',
    stock: 10,
    id: "1",
    description: "The Billage of Perception : Chapter One (stylized as the Billage of perception : chapter one) is the debut mini album by Billlie. It was released on November 10, 2021 with Ring x Ring serving as the album's title track. ",
    category: "FirstMiniAlbum "
    },
    {
    name: 'The Collective Soul and Unconscious: Chapter One - Soul Version',
    price: 18,
    thumbnail:'https://cdn.shopify.com/s/files/1/0266/9107/6287/products/billlie-the-collective-soul-and-unconscious-chapter-one-957296.jpg?v=1644776176',
    stock: 15,
    id: "2",
    description:"The Collective Soul and Unconscious: Chapter One (stylized in all lowercase) is the second mini album by Billlie. It was released on February 23, 2022 with 'GingaMingaYo (the strange world)' serving as the album's title track. The physical release is available in two versions: Soul and Unconscious. ",
    category: " SecondMiniAlbum"
    },
    {
    name: 'The Collective Soul and Unconscious: Chapter One - Unconscious Version',
    price: 18,
    thumbnail: 'https://cdn.shopify.com/s/files/1/0247/0871/0485/products/2d8c5067481e45f1db5724427d4efd36c51f4cf9812324dc6b690ba796c5783b.jpg?v=1644678484',
    stock: 15,
    id: "3",
    description: "The Collective Soul and Unconscious: Chapter One (stylized in all lowercase) is the second mini album by Billlie. It was released on February 23, 2022 with 'GingaMingaYo (the strange world)' serving as the album's title track. The physical release is available in two versions: Soul and Unconscious. ",
    category: "SecondMiniAlbum"
    },
                            ];


    export const getFetch = (id) => {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                    const idProd = id ? productList.find(product => product.id === id ) : productList                                  
                    resolve( idProd )                           
                }, 2000)
            })            
        
    }
