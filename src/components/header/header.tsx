import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";

import "./header.scss";

export const HeaderComponent = () => {
  return (
    <div id="HeaderComponent">
      <header>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <nav>
          <Link to="/">
            <i className="fa fa-home"></i>
          </Link>
          <Link to="/new-york">Connecticut</Link>
          <Link to="/new-jersey">Massachusetts</Link>
          <Link to="/pennsylvania">New York</Link>
          <Link to="/washington-dc">New Jersey</Link>
          <Link to="/connecticut">Pennsylvania</Link>
          <Link to="">
            <i className="fas fa-phone-volume"></i>1-202-900-9033
          </Link>
          <Link to="/massachusetts">Maryland</Link>
          <Link to="/georgia">Washington DC</Link>
          <Link to="/california">North Carolina</Link>
          <Link to="/illinois">Georgia</Link>
          <Link to="/texas">Florida</Link>
          <Link to="/">
            <i className="fas fa-calendar-check"></i>Quick Quote or Book now
          </Link>
        </nav>
      </header>
    </div>
  );
};
