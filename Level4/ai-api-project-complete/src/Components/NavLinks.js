import { Link } from "react-router-dom"
import "./navlinks.css"

const NavLinks = (props) => {
  return (
    <div className="nav-links">
    <ul>
      
      <li onClick={()=> props.isMobile && props.closeMenu()}>
          <Link  to='/' className='nav-link'>
            Home
          </Link>
        </li>
       
        <li onClick={()=> props.isMobile && props.closeMenu()}>
          <Link  to='/aigpt' className='nav-link'>
            AiGPT
          </Link>
        </li>
        <li onClick={()=> props.isMobile && props.closeMenu()}>
          <Link  to='/aidalle' className='nav-link'>
            AI Image Generator
          </Link>
        </li>
        <li onClick={()=> props.isMobile && props.closeMenu()}>
          <Link  to='/about' className='nav-link'>
            About
          </Link>
        </li>
    </ul>
    </div>
  )
}

export default NavLinks