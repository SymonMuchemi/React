import Pizza from './pizza';
import data from '../pizzaData'

const Menu = () => {
    return (
        <>
            <main className='menu'>
                <h2>Our menu</h2>
                <ul className='pizzas'>
                    {data.map((pizza) => (
                        <Pizza pizzaObj={pizza} key={pizza.name}/>
                    ))}
                </ul>
            </main>
        </>
    )
}

export default Menu;
