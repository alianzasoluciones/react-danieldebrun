import { useState, useEffect } from 'react';
import { getProductsById } from '../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({id}) => {
    const [product, setProduct] = useState()

    useEffect(() => {
        getProductsById('1').then(response => {
            setProduct(response)
        })
    },[])

    return(
        <div >
            <ItemDetail {...product}/>
          
        </div>
    )
}

export default ItemDetailContainer