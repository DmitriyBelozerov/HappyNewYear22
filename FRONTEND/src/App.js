import Header from './component/Header'
import Form from './component/Form';
import ItemsList from './component/ItemsList';
import Result from './component/Result';
import React from 'react';

function App() {
    const [items, setItems] = React.useState([]);



    console.log(items);


    function handleSubmitProduct(valueProduct, valuePrice, lastName) {
        setItems([{ valueProduct, valuePrice, lastName }, ...items]);
    }

    function deleteItem(item) {
        setItems(items.filter(elem => elem !==item))
    }


    return (
        <>

            <Header />
            <Form onSubmitProduct={handleSubmitProduct} />
            <div>
                <ItemsList items={items} deleteItem={deleteItem}/>
                <Result items={items}/>
            </div>

        </>
    )
}

export default App;