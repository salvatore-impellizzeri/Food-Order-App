import Header from "./components/Header";
import MealsList from "./components/MealsList";
import { CartContextProvider } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <MealsList />
        <Cart />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
