const Footer = () => {
    let openingHour = 19;
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
            {   isOpen ? (
                    <div className='footer'>
                        <p>
                            We're open untill {closingHour}:00. Come visit us or order online.
                        </p>
                        <button className='btn'>Order</button>
                    </div>
                ) : <p>We are happy to welcome you between <strong>{openingHour}:00</strong>  and <strong>{closingHour}:00</strong>. </p>
            }
        </footer>
    )
}

export default Footer;
