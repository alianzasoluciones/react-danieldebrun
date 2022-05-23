import Item from '../item/Item'

function ItemList  ({products})  {
    
    return (
       
           products.map(prod => ( <Item key={prod.id}
           name ={prod.name}
           img ={prod.img}
           precio={prod.precio}
           />)
           )
    )
}

export default ItemList 