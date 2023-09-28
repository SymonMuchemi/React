import React from 'react';
import ReactDOM from 'react-dom/client';

import data from './pizzaData.js'

function App() {
    return (
        <div>
            <h1>Hello React</h1>
            <Pizza />
            <Pizza />
        </div>
    )
}

function Pizza(props) {
    console.log(data[2].name)
    return (
        <div>
            <img src='pizzas/spinaci.jpg' alt='pizza spinaci' />
            <h2>{data[4].name}</h2>
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
