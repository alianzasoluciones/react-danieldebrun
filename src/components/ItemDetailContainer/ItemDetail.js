import  {useState, useEffect} from 'react';
import  { getProductsByID } from "../asyncmock";
import ItemList from '../ItemList/ItemList';
import ItemCount from '../ItemCount/ItemCount';


    const ItemDetail = ({id}) => {
    const [Productos, setProducts ] = useState([])
    
    const getProductsByID = (id) => {
        return new Promise (resolve => {
            setTimeout(()=> resolve(Productos.find(p => p.id === id)))
        },2000)

    }
    

    useEffect(()=> {
        getProductsByID('1').then (response => {
            setProducts(response)
        })
    },)
 

    

   
    const onAdd = (cantidad) => {
      console.log(`SE Agrego ${cantidad}`)
    }
  return (
    <div style={{display:'inline-block',margin: 20, padding: 10, widht: 100,fontFamily: "Arial", }}>
        <ItemList style={{display:'inline-block',margin: 30, padding: 20, widht: 50, fontFamily: "Arial"}} products={Productos} />
        <ItemCount style={{ border:'solid'}} stock= {10}  inicial= {1} onAdd= {onAdd}   />
        </div>
  )
 }

export default ItemDetail