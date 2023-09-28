import React from 'react';
import ReactDOM from 'react-dom/client';

import data from './pizzaData.js'

function App() {
    return (
        <div>
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

const Header = () => {
    const headerStyles = { 
        color: "#AAD",
        fontSize: "42px",
        fontWeight: "400",
        textTransform: "capitalize"
    }

    return (
        <h1 style={headerStyles}>
            Fast React pizza Co.
        </h1>
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
        <footer>{time}: {shopText}</footer>
    )
}

const Menu = () => {
    return (
        <>
            <h2>Our menu</h2>
            <Pizza intProp={0} />
            <Pizza intProp={1} />
            <Pizza intProp={2} />
            <Pizza intProp={3} />
            <Pizza intProp={4} />
            <Pizza intProp={5} />
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
            <h2>{data[index].name}</h2>
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
