function Popup(props) {
    const classPopup = `popup ${props.isOpen && 'popup_open'}`;

    function deleteItem(e) {
        e.preventDefault();
        props.onDelete();
    }

    return (
        <div className={classPopup}>
            <form className="popup__window" onSubmit={deleteItem}>
                <h3 className="popup__title">Вы уверенны?</h3>
                <div className="popup__button-block">
                    <button className="popup__button" type='submit'>ДА</button>
                    <button className="popup__button" type='button' onClick={props.onClose}>НЕТ</button>

                </div>
            </form>
        </div>
    )
}

export default Popup;