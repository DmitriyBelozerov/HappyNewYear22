function Result(props) {
    return (
        <h3>{props.summ.array.forEach(element => {
            console.log(element);
        })}</h3>
    )
}

export default Result;