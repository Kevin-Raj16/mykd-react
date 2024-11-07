import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-style-one">
      <div className="footer__top-wrap">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-7">
              <div className="footer-widget">
                <div className="footer-logo logo">
                  <NavLink to="/contact">
                    <img src="/assets/img/logo/logo.png" alt="Logo" />
                  </NavLink>
                </div>
                <div className="footer-text">
                  <p className="desc">Lorem ipsum dolor sitamet consectur adipiscing Duis esollici tudin augue euismod. Nulla ullam dolor sitamet consectetur</p>
                  <p className="social-title">Active <span>With Us <i className="fas fa-angle-double-right"></i></span></p>
                  <div className="footer-social">
                    <NavLink to="#"><img src="/assets/img/icons/social_icon01.png" alt="iocn"/></NavLink>
                    <NavLink to="#"><img src="/assets/img/icons/social_icon02.png" alt="iocn"/></NavLink>
                    <NavLink to="#"><img src="/assets/img/icons/social_icon03.png" alt="iocn"/></NavLink>
                    <NavLink to="#"><img src="/assets/img/icons/social_icon04.png" alt="iocn"/></NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6">
              <div className="footer-widget widget_nav_menu">
                <h4 className="fw-title">quick link</h4>
                <ul className="list-wrap menu">
                  <li><NavLink to="#">Gaming</NavLink></li>
                  <li><NavLink to="#">Product</NavLink></li>
                  <li><NavLink to="#">All NFTs</NavLink></li>
                  <li><NavLink to="#">Social Network</NavLink></li>
                  <li><NavLink to="#">Domain Names</NavLink></li>
                  <li><NavLink to="#">Collectibles</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6">
              <div className="footer-widget widget_nav_menu">
                <h4 className="fw-title">Supports</h4>
                <ul className="list-wrap menu">
                  <li><NavLink to="#">Setting & Privacy</NavLink></li>
                  <li><NavLink to="#">Help & Support</NavLink></li>
                  <li><NavLink to="#">Live Auctions</NavLink></li>
                  <li><NavLink to="#">Item Details</NavLink></li>
                  <li><NavLink to="#">24/7 Supports</NavLink></li>
                  <li><NavLink to="#">Our News</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-7">
              <div className="footer-widget">
                <h4 className="fw-title">Newsletter</h4>
                <div className="footer-newsletter">
                  <p>Subscribe our newsletter to get our latest update & newsconsectetur</p>
                  <form action="#" className="footer-newsletter-form">
                    <input type="email" placeholder="Your email address" />
                    <button type="submit"><i className="flaticon-paper-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright__wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="copyright__text">
                <p>Copyright © {new Date().getFullYear()} - All Rights Reserved By <span>Mykd</span></p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="copyright__card text-center text-md-end">
                <img src="/assets/img/others/payment_card.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;