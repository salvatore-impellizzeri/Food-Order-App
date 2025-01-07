import logo from '../assets/logo.jpg';
import Button from './UI/Button';
 
export default function Header(){
    return(
        <div id="main-header">
            <div id="title">
                    <img src={logo} alt="Logo ReactFood" />
                    <h1>reactfood</h1>
            </div>
            <Button textOnly={true}>Cart (0)</Button>
        </div>
    );
}