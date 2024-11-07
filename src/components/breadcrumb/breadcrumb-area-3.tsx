import { NavLink } from "react-router-dom";

// props type 
type IProp = {
  title:string;
  subtitle:string;
}
const BreadcrumbAreaThree = ({title,subtitle}:IProp) => {
  return (
    <section
      className="breadcrumb-area breadcrumb__hide-img"
      style={{backgroundImage:`url(/assets/img/bg/breadcrumb_bg02.jpg)`}}
    >
      <div className="container">
        <div className="breadcrumb__wrapper">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb__content">
                <h2 className="title">{title}</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {subtitle}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbAreaThree;
