import { useState, useEffect } from 'react';
import { getProductsById } from '../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({id}) => {
    const [product, setProduct] = useState()

    useEffect(() => {
        getProductsById(id).then(response => {
            setProduct(response)
        })
    },)

    return(
        <div >
            <ItemDetail title={product?.name}/>
        </div>
    )
}

export default ItemDetailContainer