import React from "react";
import social_data from "../../data/social-data";
import MobileMenus from "./mobile-menus";
import { NavLink } from "react-router-dom";
// prop type 
type IProps = {
  openMobileOffCanvas:boolean;
  setOpenMobileOffCanvas: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileOffCanvas = ({openMobileOffCanvas,setOpenMobileOffCanvas}:IProps) => {
  // handle close search
  const handleCloseOffCanvas = (audioPath: string) => {
    setOpenMobileOffCanvas(false)
    const audio = new Audio(audioPath);
    audio.play();
  };
  return (
    <div className={openMobileOffCanvas?'mobile-menu-visible':''}>
      <div className="tgmobile__menu">
        <nav className="tgmobile__menu-box">
          <div className="close-btn" onClick={() => handleCloseOffCanvas('/assets/audio/remove.wav')}>
            <i className="flaticon-swords-in-cross-arrangement"></i>
          </div>
          <div className="nav-logo">
            <NavLink to="/">
              <img src="/assets/img/logo/logo.png" alt="Logo" />
            </NavLink>
          </div>
          <div className="tgmobile__search">
            <form action="#">
              <input type="text" placeholder="Search here..." />
              <button>
                <i className="flaticon-loupe"></i>
              </button>
            </form>
          </div>
          <div className="tgmobile__menu-outer">
            <MobileMenus/>
          </div>
          <div className="social-links">
            <ul className="list-wrap">
              {social_data.map((s, i) => (
                <li key={i}>
                  <NavLink to={s.link} target="_blank">
                    <i className={s.icon}></i>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <div className="tgmobile__menu-backdrop" onClick={() => setOpenMobileOffCanvas(false)} />
    </div>
  );
};

export default MobileOffCanvas;
