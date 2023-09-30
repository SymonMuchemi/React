function Pizza(props) {

    return (
        <div className='pizza'>
            <img src={`${props.pizzaObj.photoName}`} alt=" " />
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price}</span>
            </div>
        </div>
    )
}

export default Pizza;
