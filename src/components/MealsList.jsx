import MealItem from './MealItem.jsx';
import useHttp from '../hooks/useHttp.js';

const requestConfig = {};

export default function FoodList(){
    const {data: meals, isLoading, error} = useHttp('http://localhost:3000/meals', requestConfig, []);

    if(isLoading) {
        return <p>Fatching meals...</p>;
    }
    
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