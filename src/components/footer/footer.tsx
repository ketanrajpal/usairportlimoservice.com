import { useState } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

export const FooterComponent = () => {
  const [Links] = useState([
    { to: "/", text: "Manhattan" },
    { to: "/", text: "Brooklyn" },
    { to: "/", text: "Queens" },
    { to: "/", text: "Bronx" },
    { to: "/", text: "Staten Island" },
    { to: "/", text: "Boston, MA" },
    { to: "/", text: "Manhattan" },
    { to: "/", text: "Brooklyn" },
    { to: "/", text: "Queens" },
    { to: "/", text: "Bronx" },
    { to: "/", text: "Staten Island" },
    { to: "/", text: "Boston, MA" },
    { to: "/", text: "Manhattan" },
    { to: "/", text: "Brooklyn" },
    { to: "/", text: "Queens" },
    { to: "/", text: "Bronx" },
    { to: "/", text: "Staten Island" },
    { to: "/", text: "Boston, MA" },
  ]);

  return (
    <div id="FooterComponent">
      <footer>
        <div>
          <h1>Contact us</h1>
          <p>
            <strong>Address.</strong> Queens NY, Milford CT, Newark NJ, Philadelphia PA
            <br />
            <strong>Call Us.</strong> 1-718-766-6666
            <br />
            <strong>Email Us.</strong> nycairportslimo@gmail.com
            <br />
            <strong>Website.</strong> www.nycairportslimo.com
            <br />
            <br />
            <br />
            <small>2021 &copy; USA Airports Limo Service. All rights reserved.</small>
          </p>
        </div>
        <div>
          <h1>For bookings</h1>
          <p>NYC Airports Limo offers to book cars nearby your location for best fares. Make Your Reservation Online &amp; Get a 5% Discount.</p>
          <Link to="/">
            <i className="fas fa-calendar-check"></i>Quick Quote or Book now
          </Link>
        </div>
        <div>
          <h1>Quick Links</h1>
          <ul>
            {Links.map((link, index) => (
              <li key={index}>
                <Link to={link.to}>
                  <i className="fas fa-arrow-circle-right"></i>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
};
