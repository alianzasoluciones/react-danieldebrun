
import { useState, useEffect } from 'react';
import { getProducts } from '../asyncmock';
import {useParams} from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getProductsByCategory } from '../asyncmock';


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([]);
    const [loading, setLoading] = useState(true)

    const { categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        if(!categoryId) {
            getProducts().then(response =>{
                setProducts(response)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        }else {
            getProductsByCategory(categoryId).then(response => {
                setProducts(response)
            }).catch(error => {
                console.log(error)
            }).finally(()=> {
                setLoading(false)
            })
        }
    }, [categoryId])
    
    if(loading) {
        return <h1>Buscando su Articulo</h1>
    }

    return(
        <div>
            <h1>{ greeting }</h1>
            {
                products.length > 0 ? <ItemList products={products} />
                : <h2>Disculpe estamos sin stock</h2>
            }
        </div>
    )

    
}

export default ItemListContainer