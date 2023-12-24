import Header from './component/Header'
import Form from './component/Form';
import ItemsList from './component/ItemsList';
import Result from './component/Result';
import React from 'react';

function App() {
    const [items, setItems] = React.useState([]);
    console.log(items);


    function handleSubmitProduct(valueProduct, valuePrice) {
        setItems([{ valueProduct: valueProduct, valuePrice: valuePrice }, ...items]);
    }


    return (
        <>

            <Header />
            <Form onSubmitProduct={handleSubmitProduct} />
            <div>
                <ItemsList items={items} />
                {/* <Result summ={items}/> */}
            </div>

        </>
    )
}

export default App;