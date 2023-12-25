import Header from './component/Header'
import Form from './component/Form';
import ItemsList from './component/ItemsList';
import Result from './component/Result';
import React from 'react';
import api from './utils/api';
import Popup from './component/Popup';

function App() {
    const [items, setItems] = React.useState([]);
    const [openPopup, setOpenPopup] = React.useState(false);
    const [itemForDelete, setItemForDelete] = React.useState(undefined)

    React.useEffect(() => {
        api.getItems()
            .then((data) => {
                setItems(data)
            })
            .catch(err => console.log(err))
    }, [])

    function closePopup() {
        setOpenPopup(false)
    }

    function handleSubmitProduct(valueProduct, valuePrice, lastName) {
        api.createItem(valueProduct, valuePrice, lastName)
            .then(data =>
                setItems([...items, data.data])
            )
            .catch(err => console.log(err))
    }

    function deleteItem() {
        api.deleteItem(itemForDelete._id)
            .then((data) => {
                setItems(items.filter(el => el._id !== data.data._id))
            })
            .catch(err => console.log(err))
            .finally(() => {
                closePopup(); setItemForDelete(undefined);
            })
    }

    function confirmDelete(item) {
        setOpenPopup(true);
        setItemForDelete(item)
    }
    console.log(itemForDelete);

    return (
        <>

            <Header />
            <Form onSubmitProduct={handleSubmitProduct} />
            <div>
                <ItemsList items={items} deleteItem={confirmDelete} />
                <Result items={items} />
            </div>
            <Popup isOpen={openPopup} onClose={closePopup} onDelete={deleteItem} ></Popup>

        </>
    )
}

export default App;