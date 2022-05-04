

const ItemListContainer = ( { hey='Hey' } ) => {
  return (
    <div>
        {hey} 
        <button onClick={() => alert('Hola')}>Click</button>
    </div>
  )
}

export default ItemListContainer