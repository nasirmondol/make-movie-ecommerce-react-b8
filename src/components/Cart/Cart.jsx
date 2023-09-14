
const Cart = ({ nameCart, cost, remaining }) => {
    const { name } = nameCart;
    

    return (
        <div className='w-1/4'>
            <h2>This is cart: {nameCart.length}</h2>
            <h4>TotalCost: {cost}</h4>
            <h4>Remaining: {remaining}</h4>
            {
                nameCart.map(name => <p key={name.id}>{name.name}</p>)
            }
        </div>
    );
};

export default Cart;