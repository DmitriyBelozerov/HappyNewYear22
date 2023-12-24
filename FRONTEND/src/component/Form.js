import React from "react";

function Form(props) {
    const [titleProduct, setTitleProduct] = React.useState('');
    const [titlePrice, setTitlePrice] = React.useState('');



    function handleSubmitProduct(e) {
        e.preventDefault();
        props.onSubmitProduct(titleProduct, titlePrice);
        setTitleProduct('');
        setTitlePrice('');
    }

    function handleChangeProduct(e) {
        setTitleProduct(e.target.value)
    }

    function handleChangePrice(e) {
        setTitlePrice(e.target.value)
    }

    return (
        <section>
            <form className="form" onSubmit={handleSubmitProduct}>
                <h2></h2>
                <input placeholder="Введите название продукта" onChange={handleChangeProduct} value={titleProduct || ''} required></input>
                <input placeholder="Введите сумму" onChange={handleChangePrice} value={titlePrice || ''} required></input>
                <button>Добавить</button>
            </form>
            <form className="form">
                <input placeholder="Введите количество пар или человек"></input>
                <button>Пересчитать</button>
            </form>
        </section>
    )
}

export default Form;