import Pizza from "./pizza";

const Menu = () => {
    return (
        <>
            <main className='menu'>
                <h2>Our menu</h2>
                <Pizza intProp={0} />
                <Pizza intProp={1} />
                <Pizza intProp={2} />
                <Pizza intProp={3} />
                <Pizza intProp={4} />
                <Pizza intProp={5} />
            </main>
        </>
    )
}

export default Menu;
