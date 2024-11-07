import { NavLink } from "react-router-dom";


const BlogPagination = () => {
  return (
    <ul className="list-wrap d-flex flex-wrap justify-content-center">
      <li>
        <NavLink to="#" className="page-numbers">
          01
        </NavLink>
      </li>
      <li>
        <span className="page-numbers current">02</span>
      </li>
      <li>
        <NavLink to="#" className="page-numbers">
          03
        </NavLink>
      </li>
      <li>
        <NavLink to="#" className="page-numbers">
          04
        </NavLink>
      </li>
      <li>
        <NavLink to="#" className="page-numbers">
          ....
        </NavLink>
      </li>
      <li>
        <NavLink to="#" className="next page-numbers">
          <i className="fas fa-angle-double-right"></i>
        </NavLink>
      </li>
    </ul>
  );
};

export default BlogPagination;
