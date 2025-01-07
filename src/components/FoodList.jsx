import { useEffect, useState } from "react";
export default function FoodList(){
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function loadMeals(){
            const response = await fetch('http://localhost:3000/meals') 
            if(!response.ok){
                return new Error('Errore');
            }
            const meals = await response.json();
            console.log(meals);
            setMeals(meals);
        }

        loadMeals();
    }, []);

    return(
        <ul id="meals">
            {meals.map((meal) => (
                <li key={meal.id} class="meal-item">
                    <article>
                        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                        <h3>
                            {meal.name}
                        </h3>
                        <p className="meal-item-price">
                            {meal.price}
                        </p>
                        <p className="meal-item-description">
                            {meal.description}
                        </p>
                        <p className="meal-item-actions">
                            <button>
                                Add to Cart
                            </button>
                        </p>
                    </article>
                </li>
            ))}
        </ul>
    );
}