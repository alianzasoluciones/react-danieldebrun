import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({stock, imagen,descripcion,precio , name, categoria}) => {
    
    return(
        <div>
            <img  src={imagen} alt='...'/>
            <h2>{name}</h2>
            <p>{categoria}</p>
            <p>{descripcion}</p>
            <p>{precio}</p>
            <ItemCount stock={stock} inicial={0}/>

        </div>
        
    )
}

export default ItemDetail