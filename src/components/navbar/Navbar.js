import './style.css'
import logo from "../../img/hero/logo.png";
import { NavLink } from "react-router-dom";


const Navbar = () => {

     const activeLink = 'nav-list__link nav-list__link--active';
     const inactiveLink = 'nav-list__link';

    return ( 
         <nav className="header-row">
                 <NavLink to='/home' className={({isActive}) => isActive ? activeLink : inactiveLink}>
                        <img src={logo} srcset="./img/hero/logo@2x.png 2x" alt="BodyShape" className="header-logo" />
                 </NavLink>
                    <ul className="header-list">
                         <NavLink to='/instructors' className={({isActive}) => isActive ? activeLink : inactiveLink}>
                              <li><a href="#!">Инструкторы</a></li>
                         </NavLink>

                         <NavLink to='/sections' className={({isActive}) => isActive ? activeLink : inactiveLink}>
                         <li><a href="#!">Секции</a></li>
                         </NavLink>  

                         <li><a href="#!">Новости</a></li>

                         <NavLink to='/contacts' className={({isActive}) => isActive ? activeLink : inactiveLink}>
                         <li><a href="#!">Контакты</a></li>
                         </NavLink>
                    </ul>
               </nav>
     );
}
 
export default Navbar;