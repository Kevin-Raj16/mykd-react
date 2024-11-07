import { IBlog } from "../../types/blog-type";
import { NavLink } from "react-router-dom";

const BlogItem = ({blog}:{blog:IBlog}) => {
  return (
    <div className="blog-post-item">
      <div className="blog-post-thumb">
        <NavLink to={`/blog-details/${blog.id}`}>
          <img src={blog.img} alt="img" />
        </NavLink>
      </div>
      <div className="blog-post-content">
        <div className="blog-post-meta">
          <ul className="list-wrap">
            <li>
              By<NavLink to={`/blog-details/${blog.id}`}>{blog.author}</NavLink>
            </li>
            <li>
              <i className="far fa-calendar-alt"></i> {blog.author}
            </li>
            <li>
              <i className="far fa-comments"></i>
              <NavLink to={`/blog-details/${blog.id}`}>{blog.comments === 0 ? 'No comments' : `${blog.comments} comments`}</NavLink>
            </li>
          </ul>
        </div>
        <h2 className="title">
          <NavLink to={`/blog-details/${blog.id}`}>{blog.title}</NavLink>
        </h2>
        <p>
          {blog.desc}
        </p>
        <div className="blog-post-bottom">
          <div className="blog-post-read">
            <NavLink to={`/blog-details/${blog.id}`}>
              READ MORE <i className="fas fa-arrow-right"></i>
            </NavLink>
          </div>
          <div className="blog-post-share">
            <h5 className="share">share :</h5>
            <ul className="list-wrap">
              <li>
                <NavLink to={`https://www.facebook.com/`} target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to={`https://twitter.com/`} target="_blank">
                  <i className="fab fa-twitter"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to={`https://www.linkedin.com/`} target="_blank">
                  <i className="fab fa-linkedin-in"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
