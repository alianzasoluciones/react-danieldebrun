import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({stock, imagen,descripcion,precio , name, category}) => {
    
    return(
        <div>
            
            <img  src={imagen} style={{widht:100,height:100}} alt='...'/>
            <h2>{name}</h2>
            <p>{category}</p>
            <p>{descripcion}</p>
            <p>{precio}</p>
            <ItemCount stock={stock} inicial={0}/>
           

        </div>
        
    )
}

export default ItemDetail