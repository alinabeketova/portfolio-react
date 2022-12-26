import { NavLink } from 'react-router-dom'
import BtnDarkMode from '../btnDarkMode/btnDarkMode'
import './style.css'

const Navbar = () => {

    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    return (
    <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <NavLink to="/" className="logo">
                    <strong>Portfolio</strong>
                </NavLink>
                <BtnDarkMode />
                <ul className="nav-list">

                    <li className="nav-list__item">
                        <NavLink
                            to='/' 
                            className={({isActive}) => {
                                return isActive ? activeLink : normalLink;
                            }}
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className="nav-list__item">
                        <NavLink
                            className={({isActive}) => {
                                return isActive ? activeLink : normalLink;
                            }}
                            to='/projects'
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink 
                            to='/contacts' 
                            className={({isActive}) => {
                                return isActive ? activeLink : normalLink;
                            }}
                        >
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    );
}
 
export default Navbar;