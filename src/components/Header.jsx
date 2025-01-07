import logo from '../assets/logo.jpg';

export default function Header(){
    return(
        <div id="main-header">
            <div id="title">
                    <img src={logo} alt="Logo ReactFood" />
                    <h1>reactfood</h1>
            </div>
            <button className='button'>
                Cart (3)
            </button>
        </div>
    );
}