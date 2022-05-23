import React, {useState, useEffect} from 'react'
import MiFetch from '../MiFetch';
import products from '../productos/Productos';
import ItemList from '../ItemList/ItemList';
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer() {
    const [items, setItems] = useState([])

    useEffect (() =>{
      MiFetch( 2000 , products)
        .then(resultado => setItems(resultado))
    },[items])

    
    

    console.log(items)
    const onAdd = (cantidad) => {
      console.log(`SE Agrego ${cantidad}`)
    }
  return (
    <div>
        <ItemList products={items} />
        <ItemCount stock= {10}  inicial= {1} onAdd= {onAdd}  />
        </div>
  )
}

export default ItemListContainer