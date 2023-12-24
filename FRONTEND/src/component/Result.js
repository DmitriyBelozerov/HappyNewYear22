import React, { useEffect } from "react";

function Result(props) {
    const [total, setTotal] = React.useState(null);

    useEffect(() => {
        setTotal(props.items.reduce(
            (sum, element) =>
                sum + Number(element.valuePrice)
            , 0
        ))
    }, [props.items])

    console.log(props.items);

    function calculateAmount (lastN) {
        return props.items.reduce(
            (sum, element, index, array) => {
                if (element.lastName === lastN) {
                    return sum + Number(element.valuePrice)
                }
                return sum + 0
            }
            , 0
        )
    }

    return (
        <>
            <h3>Общая сумма: {total} рублей</h3>
            <p>Количество семей / человек: 3</p>
            <p>Затраты на семью в среднем: {Math.round(total / 3)} руб.</p>
            <p>Затраты Белозеровы: { calculateAmount ('belozerov')}</p>
            <p>Затраты Устиновы: { calculateAmount ('ustinov')}</p>
            <p>Затраты Трофимовы: { calculateAmount ('trofimov')}</p>

        </>

    )
}

export default Result;