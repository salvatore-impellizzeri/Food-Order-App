import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import CartContext from "../store/CartContext";
import Button from "./UI/Button";

export default function MealsList({ meal }){
    const cartCtx = useContext(CartContext);

    function handleAddMealToCart(){
        cartCtx.addItem(meal);
    }

    return(
        <li key={meal.id} className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                <h3>
                    {meal.name}
                </h3>
                <p className="meal-item-price">
                    {currencyFormatter.format(meal.price)}
                </p>
                <p className="meal-item-description">
                    {meal.description}
                </p>
                <p className="meal-item-actions">
                    <Button onClick={handleAddMealToCart} >Add to Cart</Button>
                </p>
            </article>
        </li>
    );
}