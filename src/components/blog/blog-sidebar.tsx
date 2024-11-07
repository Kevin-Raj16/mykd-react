import { NavLink } from 'react-router-dom';
import SidebarInstagram from './sidebar-instagram';
import blog_data from '../../data/blog-data';

const BlogSidebar = () => {
  return (
    <aside className="blog-sidebar">
        <div className="blog-widget">
            <div className="sidebar__author">
                <div className="sidebar__author-thumb">
                    <img src="/assets/img/blog/avatar.jpg" alt="img" />
                </div>
                <div className="sidebar__author-content">
                    <h4 className="name">Kaceytron G.</h4>
                    <p>Lorem ipsum sitamet conteur adipiscing Duis elementum solliciin</p>
                    <div className="sidebar__author-social">
                        <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                        <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                        <NavLink to="#"><i className="fab fa-linkedin-in"></i></NavLink>
                    </div>
                </div>
            </div>
        </div>
        <div className="blog-widget">
            <form className="sidebar-search-form position-relative">
                <input type="text" placeholder="Search here.."/>
                <button><i className="flaticon-loupe"></i></button>
            </form>
        </div>
        <div className="blog-widget widget_categories">
            <h4 className="fw-title">CATEGORIES</h4>
            <ul className="list-wrap">
                <li><NavLink to="#">gaming</NavLink><span className="float-right">(11)</span></li>
                <li><NavLink to="#">ELECTRONIC</NavLink><span className="float-right">(4)</span></li>
                <li><NavLink to="#">online</NavLink><span className="float-right">(21)</span></li>
                <li><NavLink to="#">TOURNAMENT</NavLink><span className="float-right">(15)</span></li>
                <li><NavLink to="#">controller</NavLink><span className="float-right">(2)</span></li>
                <li><NavLink to="#">live</NavLink><span className="float-right">(7)</span></li>
            </ul>
        </div>
        <div className="blog-widget">
            <h4 className="fw-title">Recent Posts</h4>
            <div className="rc__post-wrapper">
              {blog_data.slice(0,3).map((b) => (
                <div key={b.id} className="rc__post-item">
                    <div className="rc__post-thumb">
                        <NavLink to={`/blog-details/${b.id}`}>
                          <img src={b.img} alt="img" width={112} height={88} />
                        </NavLink>
                    </div>
                    <div className="rc__post-content">
                        <h6 className="title"><NavLink to={`/blog-details/${b.id}`}>{b.title}</NavLink></h6>
                        <span className="date">{b.date}</span>
                    </div>
                </div>
              ))}
            </div>
        </div>
        <div className="blog-widget">
            <h4 className="fw-title">Newsletter</h4>
            <div className="sidebar__newsletter">
                <p>Lorem ipsum sitamet conteur adipiscin</p>
                <form action="#" className="sidebar__newsletter-form">
                    <input type="email" name="email" placeholder="Enter Your Email"/>
                    <button type="submit"><i className="fas fa-arrow-right"></i></button>
                </form>
            </div>
        </div>
        <div className="blog-widget">
            <h4 className="fw-title">INSTAGRAM</h4>
            {/* instagram area start */}
            <SidebarInstagram/>
            {/* instagram area end */}
        </div>
        <div className="blog-widget">
            <h4 className="fw-title">Tag Cloud</h4>
            <div className="tagcloud">
                <NavLink to="#">E-sports</NavLink>
                <NavLink to="#">Fantasy</NavLink>
                <NavLink to="#">game</NavLink>
                <NavLink to="#">Tournaments</NavLink>
                <NavLink to="#">Matches</NavLink>
                <NavLink to="#">Streamers</NavLink>
            </div>
        </div>
    </aside>
  );
};

export default BlogSidebar;