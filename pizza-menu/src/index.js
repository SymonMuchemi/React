import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import data from './pizzaData.js'

function App() {
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

const Header = () => {
    /*const headerStyles = { 
        color: "#AAD",
        fontSize: "42px",
        fontWeight: "400",
        textTransform: "capitalize"
    }*/

    return (
        <header className='header'>
            <h1>
                Fast React pizza Co.
            </h1>
        </header>
    )
}

const Footer = () => {
    const time = new Date().toLocaleTimeString();
    let openingHour = 9;
    let closingHour = 22;
    let currentHour = new Date().getHours();
    let isOpen = (currentHour <= closingHour
        && currentHour >= openingHour)
    let shopText;

    if (isOpen) {
        shopText = "We are currently open.";
    }
    else {
        shopText = "We are currently close.";
    }

    return (
        <footer className='footer'>{time}: {shopText}</footer>
    )
}

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

function Pizza(props) {
    let index = props.intProp;
    let image = data[index].name;
    let lowerCaseImageName = image.toLowerCase();
    let noPizzaName = lowerCaseImageName.replace("pizza", "");
    let noSpaceImageName = noPizzaName.replace(" ", "");

    console.log("Image name: " + noSpaceImageName)
    console.log(data[props.intProp].name)

    return (
        <div>
            <img src={`pizzas/${noSpaceImageName}.jpg`} alt='pizza spinaci' />
            <h3>{data[index].name}</h3>
            <p>{data[index].ingredients}</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
