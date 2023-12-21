import Header from './Header'
import Form from './Form';
import ItemsList from './ItemsList';
import React from 'react';

function App() {
    const [items, setItems] = React.useState([]);
    console.log(items);



    return (
        <>

            <Header />
            <Form />
            <ItemsList/>

        </>
    )
}

export default App;