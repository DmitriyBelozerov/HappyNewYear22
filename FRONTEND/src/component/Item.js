function Item(props) {

    function handleDeleteItem() {
        props.deleteItem(props.item)
    }

    function handleLastname() {
         if (props.item.lastName === 'belozerov') {
            return 'Белозеровы'
        } else if (props.item.lastName === 'ustinov') {
            return 'Устиновы'
        } else if (props.item.lastName === 'trofimov') {
            return 'Трофимовы'
        } else {
            return 'фамилию не удалось определить...'
        }
    }

    return (
        <li className="item">
            <p className="item__product">{`${props.item.valueProduct} - ${props.item.valuePrice}р.  `}</p>
            <p className="item__last-name">{handleLastname()}</p>
            <button className="item__buttonDelete" onClick={handleDeleteItem}>
            </button>
        </li>

    )
}

export default Item;