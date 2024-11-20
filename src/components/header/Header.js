import logo from "../../img/hero/logo.png";
import herologo from "../../img/hero/hero-logo.png";


const Header = () => {
    return ( 
        <header className="header">
      <div className="container">
        <nav className="header-row">
          <ul className="header-list">
         
          </ul>
        </nav>

          <div className="header-img">
            <img src={herologo} srcset="./img/hero/hero-logo@2x.png 2x" alt="BodyShape" />
          </div>
        </div>
      </header>
  );
}
 
export default Header;

