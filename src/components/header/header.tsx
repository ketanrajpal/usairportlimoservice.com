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
          <Link to="/new-york">New York</Link>
          <Link to="/new-jersey">New Jersey</Link>
          <Link to="/pennsylvania">Pennsylvania</Link>
          <Link to="/washington-dc">Washington DC</Link>
          <Link to="/connecticut">Connecticut</Link>
          <Link to="/massachusetts">Massachusetts</Link>
          <Link to="/georgia">Georgia</Link>
          <Link to="/california">California</Link>
          <Link to="/illinois">Illinois</Link>
          <Link to="/texas">Texas</Link>
          <Link to="/">
            <i className="fas fa-calendar-check"></i>Quick Quote or
            <br />
            Book now
          </Link>
        </nav>
      </header>
    </div>
  );
};
