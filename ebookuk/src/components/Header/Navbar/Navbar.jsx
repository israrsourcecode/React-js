import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to={"/"} className='nav-logo'>
        <img src="../src/assets/images/logo.svg" alt="" />
      </Link>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

    </nav>
  )
}

export default Navbar
