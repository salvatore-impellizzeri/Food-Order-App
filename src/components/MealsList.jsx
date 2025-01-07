import { useEffect, useState } from "react";
import MealItem from './MealItem.jsx';

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
                <MealItem 
                    key={meal.id}
                    meal={meal}
                />
            ))}
        </ul>
    );
}