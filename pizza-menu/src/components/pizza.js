function Pizza(props) {
    console.log(props);

    if (props.pizzaObj.soldOut) return null; 

    return (
        <li className='pizza'>
            <img src={`${props.pizzaObj.photoName}`} alt=" " />
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>Ksh {props.pizzaObj.price + "00"}</span>
            </div>
        </li>
    )
}

export default Pizza;
