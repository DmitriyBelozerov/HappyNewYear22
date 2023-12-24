import React from "react";

function Form(props) {
    const [titleProduct, setTitleProduct] = React.useState('');
    const [titlePrice, setTitlePrice] = React.useState('');
    const [lastName, setLastName] = React.useState('');




    function handleSubmitProduct(e) {
        e.preventDefault();
        props.onSubmitProduct(titleProduct, titlePrice, lastName);
        setTitleProduct('');
        setTitlePrice('');
        setLastName('');
    }

    function handleChangeProduct(e) {
        setTitleProduct(e.target.value)
    }

    function handleChangePrice(e) {
        setTitlePrice(e.target.value)
    }

    function handleChangeLastname(e) {
        setLastName(e.target.value);
    }

    return (
        <section>
            <form className="form" onSubmit={handleSubmitProduct}>
                <input placeholder="Введите название продукта" onChange={handleChangeProduct} value={titleProduct || ''} required></input>
                <input type="number" placeholder="Введите сумму" onChange={handleChangePrice} value={titlePrice || ''} required></input>
                <select required onChange={handleChangeLastname} value={lastName}>
                    <option disabled selected ></option>
                    <option value={'belozerov'}>Белозеровы</option>
                    <option value={'ustinov'}>Устиновы</option>
                    <option value={'trofimov'}>Трофимовы</option>
                </select>
                <button>Добавить</button>
            </form>

            {/* <form className="form">
                <input placeholder="Введите количество пар или человек"></input>
                <button>Пересчитать</button>
            </form> */}
        </section>
    )
}

export default Form;