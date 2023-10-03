function Pizza({pizzaObj}) {
    console.log(pizzaObj);

    if (pizzaObj.soldOut) return null;

    return (
        <li className='pizza'>
            <img src={`${pizzaObj.photoName}`} alt=" " />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>Ksh {pizzaObj.price + "00"}</span>
            </div>
        </li>
    )
}

export default Pizza;
