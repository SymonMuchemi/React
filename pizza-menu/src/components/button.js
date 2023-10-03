const Order = ({closingHour, openHour}) => {
    return (
        <div className='footer'>
            <p>
                We're open from {openHour}:00 to {closingHour}:00. Come visit us or order online.
            </p>
            <button className='btn'>Order</button>
        </div>
    )
}

export default Order;
