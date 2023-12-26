import Header from './component/Header'
import Form from './component/Form';
import ItemsList from './component/ItemsList';
import Result from './component/Result';
import React from 'react';
import api from './utils/api';
import Popup from './component/Popup';
import Ufa from './component/Ufa';
import Spb from './component/Spb';
import Footer from './component/Footer';


function App() {
    const [items, setItems] = React.useState([]);
    const [openPopup, setOpenPopup] = React.useState(false);
    const [itemForDelete, setItemForDelete] = React.useState(undefined)
    const [ufaView, setUfaView] = React.useState(false);
    const [spbView, setSpbView] = React.useState(false);

    React.useEffect(() => {
        api.getItems()
            .then((data) => {
                setItems(data)
            })
            .catch(err => console.log(err))
    }, [])

    function closePopup() {
        setOpenPopup(false);
        setItemForDelete(undefined);
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
        setItemForDelete(item);
        setTimeout(() => {
            setOpenPopup(false);
            setItemForDelete(undefined);
        }, 15000)
    }

    function showUfa() {
        setUfaView(true);
        setTimeout(() => {
            setUfaView(false);
        }, 10000)
    }

    function showSpb() {
        setSpbView(true);
        setTimeout(() => {
            setSpbView(false);
        }, 10000)
    }

    return (
        <>

            <Header showUfa={showUfa} />
            <Ufa show={ufaView}></Ufa>
            <Form onSubmitProduct={handleSubmitProduct} />
            <ItemsList items={items} deleteItem={confirmDelete} />
            <Result items={items} showSpb={showSpb} />
            <Popup isOpen={openPopup} onClose={closePopup} onDelete={deleteItem} ></Popup>
            <Spb show={spbView}></Spb>
            <Footer/>
        </>
    )
}

export default App;