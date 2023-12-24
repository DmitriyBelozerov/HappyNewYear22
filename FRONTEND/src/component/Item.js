function Item(props) {
    console.log(props);
    return (
        <li>{`${props.item.valueProduct} - ${props.item.valuePrice}`}</li>
    )
}

export default Item;