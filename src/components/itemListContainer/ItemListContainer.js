
import { useState, useEffect } from 'react';
import { getProducts } from '../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState ([]);

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [products])

    return(
        <div >
            <h1>{ props.greeting }</h1>
            <ItemList products={products} />
            <ItemDetail />
        </div>
    )
}

export default ItemListContainer