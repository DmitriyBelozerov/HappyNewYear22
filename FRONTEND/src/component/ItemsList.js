import Item from "./Item";

function ItemsList(props) {
    return (
        <ul className="itemsList">
            {props.items.map(item => (<Item item={item}/>))}
        </ul>
    )
}

export default ItemsList;