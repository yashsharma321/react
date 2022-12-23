import {Link} from 'react-router-dom';
const Header = () => {
    return(
        <ul>
           <li> <Link to="/" className='pagelink'> Home </Link> </li>
           <li> <Link to="/about" className='pagelink'> About Us </Link> </li>
           <li> <Link to="/contact" className='pagelink'> Contact Us </Link> </li>
           <li> <Link to="/service" className='pagelink'> Services</Link> </li>
           <li> <Link to="/customer" className='pagelink'> Customer</Link> </li>
           
        </ul>
    )
}

export default Header;