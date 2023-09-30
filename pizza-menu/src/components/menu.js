import Pizza from './pizza';
import data from '../pizzaData'

const Menu = () => {
    return (
        <>
            <main className='menu'>
                <h2>Our menu</h2>
                <div>
                    {data.map((pizza) => (
                        <Pizza pizzaObj={pizza}/>
                    ))}
                </div>
            </main>
        </>
    )
}

export default Menu;
