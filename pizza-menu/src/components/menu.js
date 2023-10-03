import Pizza from './pizza';
import data from '../pizzaData'
import {Fragment} from "react";

const Menu = () => {
    const pizzas = data;
    const numPizzas = pizzas.length
    return (
        <>
            <main className='menu'>
                <h2>Our menu</h2>
                { numPizzas > 0 ? (
                    <React.Fragment key={'anything'}>
                        <p>
                            Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all
                            delicious.
                        </p>
                        <ul className='pizzas'>
                            {data.map((pizza) => (
                                <Pizza pizzaObj={pizza} key={pizza.name}/>
                            ))}
                        </ul>
                    </React.Fragment>
                    ) : <p>We're still working on our menu. Please come back later 🙃</p>
                }
            </main>
        </>
    )
}

export default Menu;
