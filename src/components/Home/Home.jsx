import { useState } from "react";
import Actors from "../Actors/Actors";
import Cart from "../Cart/Cart";

const Home = () => {
    const [nameCart, setNameCart] = useState([]);
    const [cost, setCost] = useState(0);
    const [remaining, setRemaining] = useState(0);

    const handleNameCart = name => {
        const exists = nameCart.find(match => match.id === name.id);
        let totalCost = name.salary;

        if (exists) {
            return alert('Already exists! Try another')
        }
        else {
            nameCart.forEach(item => {
                totalCost = totalCost + item.salary;
            })
            
            if(totalCost > 20000){
               return alert("it's too many cost!") 
            }
            setCost(totalCost);
            let remaining = 20000 - totalCost;
            setRemaining(remaining)
            setNameCart([...nameCart, name])
        }
    }
    console.log(nameCart);
    return (
        <div className="md:flex">
            <Actors handleNameCart={handleNameCart}></Actors>
            <Cart
                nameCart={nameCart}
                cost={cost}
                remaining={remaining}
            ></Cart>
        </div>
    );
};

export default Home;