import Order from "./button";

const Footer = () => {
    let openingHour = 9;
    let closingHour = 22;
    let currentHour = new Date().getHours();
    let isOpen = (currentHour <= closingHour
        && currentHour >= openingHour)
    
    // if (!isOpen)
    //     return (
    //         <p>We are happy to welcome you between 
    //             {" "}<strong>{openingHour}:00</strong>  and <strong>{closingHour}:00</strong>. </p>
    // )

    return (
        <footer className='footer'>
            {   isOpen ? <Order closingHour={closingHour}/> :
                <p>We are happy to welcome you between <strong>{openingHour}:00</strong>  and <strong>{closingHour}:00</strong>. </p>
                }
        </footer>
    )
}

export default Footer;
