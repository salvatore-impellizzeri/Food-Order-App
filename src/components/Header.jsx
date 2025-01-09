import { useContext } from 'react';
import logo from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';
 
export default function Header(){
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    function handleShowCart() {
        userProgressCtx.showCart();
    }

    return(
        <div id="main-header">
            <div id="title">
                    <img src={logo} alt="Logo ReactFood" />
                    <h1>reactfood</h1>
            </div>
            <Button textOnly={true} onClick={handleShowCart} >
                Cart ({totalCartItems})
            </Button>
        </div>
    );
}