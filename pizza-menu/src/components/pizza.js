import data from './pizzaData.js';

function Pizza(props) {
    let index = props.intProp;
    let image = data[index].name;
    let lowerCaseImageName = image.toLowerCase();
    let noPizzaName = lowerCaseImageName.replace("pizza", "");
    let noSpaceImageName = noPizzaName.replace(" ", "");

    console.log("Image name: " + noSpaceImageName)
    console.log(data[props.intProp].name)

    return (
        <div className='pizza'>
            <img src={`pizzas/${noSpaceImageName}.jpg`} alt=" " />
            <div>
                <h3>{data[index].name}</h3>
                <p>{data[index].ingredients}</p>
                <span>{data[index].price}</span>
            </div>
        </div>
    )
}

export default Pizza;
