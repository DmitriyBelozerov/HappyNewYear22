import React, { useEffect } from "react";

function Result(props) {
    const [total, setTotal] = React.useState(null);

    function showSpb() {
        props.showSpb();
    }

    useEffect(() => {
        setTotal(props.items.reduce(
            (sum, element) =>
                sum + Number(element.valuePrice)
            , 0
        ))
    }, [props.items])

    function calculateAmount(lastN) {
        return props.items.reduce(
            (sum, element) => {
                if (element.lastName === lastN) {
                    return sum + Number(element.valuePrice)
                }
                return sum + 0
            }
            , 0
        )
    }

    return (
        <section className="result">
            <h3>Общая сумма: {total} рублей</h3>
            <p>Количество семей: 3</p>
            <p>Затраты на семью в среднем: {Math.round(total / 3)} руб.</p>
            <p className="result__lastname">Затраты Белозеровы: {calculateAmount('belozerov')} руб.</p>
            <p onClick={showSpb}>Затраты Устиновы: {calculateAmount('ustinov')} руб.</p>
            <p>Затраты Трофимовы: {calculateAmount('trofimov')} руб.</p>
        </section>

    )
}

export default Result;