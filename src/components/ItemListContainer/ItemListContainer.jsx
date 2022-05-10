import ItemList from "../ItemList/ItemList"


const ItemListContainer = ( { hey='Hey' } ) => {
  return (
    <div>
      <h2 className="item-list-container__title">Our albums!</h2>
      <ItemList />
    </div>
  )
}

export default ItemListContainer