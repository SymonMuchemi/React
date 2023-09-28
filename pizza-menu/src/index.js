import React from 'react';
import ReactDOM from 'react-dom/client';

import data from './pizzaData.js'

function App() {
    return (
        <div>
            <Header />
            <Pizza />
            <Pizza />
        </div>
    )
}

const Header = () => {
    return (
        <h1>Fast React Pizza Co.</h1>
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
