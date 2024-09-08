import './Navbar.css'
import logo from '../../../public/images/brand_logo.png'

const Navbar = () => {
    return (
        <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    )
};

export default Navbar;

