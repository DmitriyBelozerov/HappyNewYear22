import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function Form(props) {
    const [titleProduct, setTitleProduct] = React.useState('');
    const [titlePrice, setTitlePrice] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();



    const handleSubmitForm = _ => {
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
            <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
                <input {...register('name', { required: true, maxLength: 40 })} type="text" placeholder="Введите название продукта" onChange={handleChangeProduct} value={titleProduct || ''}></input>
                {errors.name && <span className="form__error">Поле "Название продукта" обязательно к заполнению</span>}
                <ErrorMessage 
                    errors={errors}
                    name="name"
                    render={({ message }) => <p>{message}</p>}
                />
                <input {...register('price', { required: true, min: 1, max: 10000 })} type="number" placeholder="Введите сумму" onChange={handleChangePrice} value={titlePrice || ''} ></input>
                {errors.price && <span className="form__error">Поле "Сумма" обязательно к заполнению</span>}
                <select {...register('lastName', { required: true })} onChange={handleChangeLastname} value={lastName}>
                    <option disabled selected ></option>
                    <option value={'belozerov'}>Белозеровы</option>
                    <option value={'ustinov'}>Устиновы</option>
                    <option value={'trofimov'}>Трофимовы</option>
                </select>
                {errors.lastName && <span className="form__error">Поле "Фамилия" обязательно к заполнению</span>}

                <button className="form__button" type="submit">Добавить</button>
            </form>
        </section>
    )
}

export default Form;