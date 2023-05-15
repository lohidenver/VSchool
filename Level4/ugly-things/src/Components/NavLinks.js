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
          <HashLink smooth to='/#' className='nav-link'>
            Add Ugly Thing
          </HashLink>
        </li>
        <li onClick={()=> props.isMobile && props.closeMenu()}>
          <HashLink smooth to='/#ugly' className='nav-link'>
            See Ugly Things
          </HashLink>
        </li>
    </ul>
    </div>
  )
}

export default NavLinks