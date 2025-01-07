import { useContext } from 'react';
import logo from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
 
export default function Header(){
    const cartCtx = useContext(CartContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    return(
        <div id="main-header">
            <div id="title">
                    <img src={logo} alt="Logo ReactFood" />
                    <h1>reactfood</h1>
            </div>
            <Button textOnly={true}>Cart ({totalCartItems})</Button>
        </div>
    );
}