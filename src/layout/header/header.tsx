import {useState} from "react";
import { NavLink, useLocation } from "react-router-dom";
import menu_data from "../../data/menu-data";
import useSticky from "../../hooks/use-sticky";
import SearchPopup from "../../components/common/search-popup";
import OffCanvas from "../../components/common/off-canvas";
import MobileOffCanvas from "../../components/common/mobile-offcanvas";
import SvgIconCom from "../../components/common/svg-icon-anim";

const Header = ({style_2=false}:{style_2?:boolean}) => {
  const {sticky,isStickyVisible} = useSticky();
  const location = useLocation();
  const [isSearchOpen,setIsSearchOpen] = useState<boolean>(false);
  const [isOffCanvasOpen,setIsOffCanvasOpen] = useState<boolean>(false);
  const [openMobileOffCanvas,setOpenMobileOffCanvas] = useState<boolean>(false);
  // handle open search
  const handleOpenSearch = (audioPath: string) => {
    setIsSearchOpen(true)
    const audio = new Audio(audioPath);
    audio.play();
  };
  // handle open offcanvas
  const handleOpenOffCanvas = (audioPath: string) => {
    setIsOffCanvasOpen(true)
    const audio = new Audio(audioPath);
    audio.play();
  };
  // handle open search
  const handleOpenMobileOffCanvas = (audioPath: string) => {
    setOpenMobileOffCanvas(true)
    const audio = new Audio(audioPath);
    audio.play();
  };
  return (
    <header>
      <div id="sticky-header" className={`tg-header__area transparent-header ${sticky?'tg-sticky-menu':''} ${isStickyVisible?'sticky-menu__show':''}`}>
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler" onClick={() => handleOpenMobileOffCanvas('/assets/audio/click.wav')} >
                <i className="fas fa-bars"></i>
              </div>
              <div className="tgmenu__wrap">
                <nav className="tgmenu__nav">
                  <div className="logo">
                    <NavLink to="/">
                      <img src="/assets/img/logo/logo.png" alt="Logo" />
                    </NavLink>
                  </div>
                  <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                    <ul className="navigation">
                      {menu_data.map((menu) =>
                        menu.sub_menu ? (
                          <li
                            key={menu.id}
                            className={`menu-item ${menu.sub_menu && menu.sub_menu.some(sub => location.pathname === sub.link) ? 'menu-item-has-children active' : ''}`}
                          >
                            <NavLink to="#">{menu.title}</NavLink>
                            <ul className="sub-menu">
                              {menu.sub_menu.map((sub, i) => (
                                <li key={i} className={location.pathname === sub.link ? 'active' : ''}>
                                  <NavLink to={sub.link}>{sub.title}</NavLink>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ) : (
                          <li key={menu.id} className={location.pathname === menu.link ? 'active' : ''}>
                            <NavLink to={menu.link}>{menu.title}</NavLink>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="tgmenu__action d-none d-md-block">
                    <ul className="list-wrap">
                      <li className="search">
                        <a onClick={() => handleOpenSearch('/assets/audio/click.wav')} className="cursor-pointer">
                          <i className="flaticon-search-1"></i>
                        </a>
                      </li>
                      <li className="header-btn">
                        <NavLink to="/contact" className={`${style_2?'tg-btn-3 tg-svg':'tg-border-btn'}`}>
                          {style_2 && <SvgIconCom icon={'/assets/img/icons/shape02.svg'} id="svg-2" />}
                          <i className="flaticon-edit"></i> ~sing in
                        </NavLink>
                      </li>
                      <li className="side-toggle-icon" onClick={()=> handleOpenOffCanvas('/assets/audio/click.wav')}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- header-search --> */}
      <SearchPopup setIsSearchOpen={setIsSearchOpen} isSearchOpen={isSearchOpen} />
      {/* <!-- header-search-end --> */}

      {/* off canvas start */}
      <OffCanvas isOffCanvasOpen={isOffCanvasOpen} setIsOffCanvasOpen={setIsOffCanvasOpen} />
      {/* off canvas end */}

      {/*mobile off canvas start */}
      <MobileOffCanvas openMobileOffCanvas={openMobileOffCanvas} setOpenMobileOffCanvas={setOpenMobileOffCanvas} />
      {/*mobile off canvas end */}
    </header>
  );
};

export default Header;
