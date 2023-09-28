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
    return (
        <h1>Fast React Pizza Co.</h1>
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

    if (isOpen){
        shopText = "We are currently open.";
    }
    else{
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
            <Pizza />
            <Pizza />
        </>
    )
}

function Pizza(props) {
    console.log(data[2].name)
    return (
        <div>
            <img src='pizzas/spinaci.jpg' alt='pizza spinaci' />
            <h2>{data[2].name}</h2>
            <p>{data[2].ingredients}</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
