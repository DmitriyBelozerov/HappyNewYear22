// import {cross} from '../images/crosscirclesvgrepocom.svg';

function Item(props) {
    console.log(props);

    function handleDeleteItem () {
        props.deleteItem(props.item)
    }

    return (
        <li className="item">
            <p>{`${props.item.valueProduct} - ${props.item.valuePrice}р. - ${props.item.lastName}'s`}</p>
            <button className="item__buttonDelete" onClick={handleDeleteItem}>
            </button>
        </li>

    )
}

export default Item;