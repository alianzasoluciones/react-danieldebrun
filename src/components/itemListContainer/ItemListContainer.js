
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

import { getDocs, collection, query, where} from 'firebase/firestore'
import { db } from '../../servicios/firebase'



const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([]);
    const [loading, setLoading] = useState(true)

    const { categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        const collectionRef = categoryId 
            ? query(collection(db, 'productos'), where('category', '==', categoryId)) 
            : collection(db, 'productos')

        getDocs(collectionRef).then(response => {
            
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
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