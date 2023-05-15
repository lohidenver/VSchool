import { HashLink } from "react-router-hash-link"
import "./navlinks.css"

const NavLinks = (props) => {
  return (
    <div className="nav-links">
    <ul>
      
      <li onClick={()=> props.isMobile && props.closeMenu()}>
          <HashLink smooth to='/#' className='nav-link'>
            Home
          </HashLink>
        </li>
        <li onClick={()=> props.isMobile && props.closeMenu()}>
          <HashLink smooth to='/#about' className='nav-link'>
            About
          </HashLink>
        </li>
        <li onClick={()=> props.isMobile && props.closeMenu()}>
          <HashLink smooth to='/#projects' className='nav-link'>
            Projects
          </HashLink>
        </li>
        <li onClick={()=> props.isMobile && props.closeMenu()}>
          <HashLink smooth to='/#contact' className='nav-link'>
            Contact
          </HashLink>
        </li>
    </ul>
    </div>
  )
}

export default NavLinks