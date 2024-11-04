import Logo from '../logo/logo';
import './header.css';



function Header() {

    return (
        <header className='main-header'>
            <Logo/>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
            
        </header>
    )
}

export default Header