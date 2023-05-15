import NavLinks from "./NavLinks";
import {CgMenuRound} from "react-icons/cg";
import {IoIosCloseCircleOutline} from "react-icons/io";
import {useState} from "react";

const NavMobile = () => {
  const [open, setOpen] = useState(false);

  const menuOpen = (
    <CgMenuRound
      className='navbar-mobile-menu'
      onClick={() => setOpen(!open)}
    />
  );

  const menuClosed = (
    <IoIosCloseCircleOutline
      className='navbar-mobile-menu'
      onClick={() => setOpen(!open)}
    />
  );

  const closeMenu = () => setOpen(false);

  return (
    <nav className='nav-mobile'>
      {open ? menuClosed : menuOpen}
      {open && (
        <NavLinks
          isMobile={true}
          closeMenu={closeMenu}
        />
      )}
    </nav>
  );
};

export default NavMobile;
