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

export default Footer;
