import {NavLink} from "react-router-dom";

const Toolbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <NavLink to="/" className="navbar-brand logoImg">
              <img className="logoImg" src="https://livedemo00.template-help.com/wt_51695/images/logo-default-399x82.png" alt="logo"/></NavLink>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about-us" className="nav-link">About As</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
                </li>
              </ul>
            </div>
            <div className="btnContainer">
              <button type="button" className="headerBtn">Get a Quote</button>
            </div>
          </div>
        </nav>


    )
      ;
};

export default Toolbar;