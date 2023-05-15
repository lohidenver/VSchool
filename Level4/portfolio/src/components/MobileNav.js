import NavLinks from "./NavLinks";
import {CgMenuRound} from "react-icons/cg";
import {IoIosCloseCircleOutline} from "react-icons/io";
import { useState } from "react";

const MobileNav = () => {

    const [open, setOpen] = useState(false)


    const hamburgerOpen = <CgMenuRound className='navbar-mobile-hamburger'
    onClick={()=>setOpen(!open)} />

    const hamburgerClosed = <IoIosCloseCircleOutline className='navbar-mobile-hamburger'
    onClick={()=>setOpen(!open)} />

    const closeMenu = () => setOpen(false)

  return (
    <div className='navbar-mobile'>
      {open ? hamburgerClosed : hamburgerOpen}
      {open &&
      <NavLinks isMobile={true} closeMenu={closeMenu} />}
      
    </div>
  );
};

export default MobileNav;
