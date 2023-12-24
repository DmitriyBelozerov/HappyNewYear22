import Item from "./Item";

function ItemsList(props) {
    return (
        <ul className="itemsList">
            {props.items.map((item, index) => (<Item item={item} key={index} deleteItem={props.deleteItem}/>))}
        </ul>
    )
}

export default ItemsList;