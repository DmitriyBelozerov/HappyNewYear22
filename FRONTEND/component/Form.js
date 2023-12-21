function Form() {
    return (
        <section>
            <form className="form">
                <h2></h2>
                <input placeholder="Введите название продукта"></input>
                <input placeholder="Введите сумму"></input>
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