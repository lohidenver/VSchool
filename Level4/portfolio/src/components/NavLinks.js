import {HashLink} from "react-router-hash-link";

const NavLinks = (props) => {
  return (
    <div >
      <ul  className='navlinks-links'>
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
          <HashLink smooth to='/#skills' className='nav-link'>
            Skills
          </HashLink>
        </li>
        <li onClick={()=> props.isMobile && props.closeMenu()}>
          <HashLink smooth to='/#contact' className='nav-link'>
            Contact
          </HashLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
