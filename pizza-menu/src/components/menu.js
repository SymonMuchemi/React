import Pizza from './pizza';
import data from '../pizzaData'

const Menu = () => {
    const pizzas = data;
    const numPizzas = pizzas.length
    return (
        <>
            <main className='menu'>
                <h2>Our menu</h2>
                { numPizzas > 0 ? (
                    <ul className='pizzas'>
                        {data.map((pizza) => (
                            <Pizza pizzaObj={pizza} key={pizza.name}/>
                        ))}
                    </ul>
                    ) : <p>We're still working on our menu. Please come back later 🙃</p>
                }
            </main>
        </>
    )
}

export default Menu;
