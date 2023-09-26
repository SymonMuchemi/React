// function Hello(){
//     return (
//         <h1>Hello world </h1>
//     )
// }

const name = "Symon Muchemi";

const displayMessage = () => {
    return "I am learning react"
}

// using ES6 Syntax
const Hello = () => {
    return(
    <>
        <h1>Hello React { name } </h1>
        <p>{displayMessage()}</p>
    </>
    )
} // jsx example 1

export default Hello
