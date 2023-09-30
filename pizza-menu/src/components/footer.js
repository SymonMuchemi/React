const Footer = () => {
    let openingHour = 9;
    let closingHour = 22;
    let currentHour = new Date().getHours();
    let isOpen = (currentHour <= closingHour
        && currentHour >= openingHour)

    return (
        <footer className='footer'>
            {
                isOpen && 
                        (
                        <div className='footer'>
                            <p>
                                We're open untill {closingHour}:00. Come visit us or order online
                            </p>
                            <button className='btn'>Order</button>
                        </div>
                        )
            }
        </footer>
    )
}

export default Footer;
