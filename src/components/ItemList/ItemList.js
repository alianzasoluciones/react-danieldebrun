import Item from '../Item/Item'

const ItemList = ({products, handlePage}) => {
    return (
        <div>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList