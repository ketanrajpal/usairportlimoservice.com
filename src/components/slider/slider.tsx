import Dropdown from "react-dropdown";

import "./slider.scss";

import Slide1 from "../../assets/images/slide-1.jpg";
import Slide2 from "../../assets/images/slide-2.jpg";
import Slide3 from "../../assets/images/slide-3.jpg";
import Slide4 from "../../assets/images/slide-4.jpg";
import Slide5 from "../../assets/images/slide-5.jpg";
import Slide6 from "../../assets/images/slide-6.jpg";

export const SliderComponent = () => {
  const Images = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];

  const Options = [
    "Atlanta, GA - ATL",
    "Los Angeles, CA - LAX",
    "Chicago, IL - ORD",
    "Dallas, TX - DFW",
    "Denver, CO - DEN",
    "New York City, NY - JFK",
    "San Francisco, CA - SFO",
    "Seattle, WA - SEA",
    "Las Vegas, NV - LAS",
    "Orlando, FL - MCO",
    "Charlotte, NC - CLT",
    "Newark, NJ - EWR",
    "Phoenix, AZ - PHX",
    "Houston, TX - IAH",
    "Miami, FL - MIA",
    "Boston, MA - BOS",
    "Minneapolis, MN - MSP",
    "Detroit, MI - DTW",
    "Fort Lauderdale, FL - FLL",
    "Philadelphia, PA - PHL",
    "New York, NY - LGA",
    "Baltimore, MD - BWI",
    "Salt Lake City, UT - SLC",
    "San Diego, CA - SAN",
    "Washington, DC - IAD",
    "Washington, DC - DCA",
    "Tampa, FL - TPA",
    "Chicago, IL - MDW",
    "Honolulu, HI - HNL",
    "Portland, OR - PDX",
  ];

  return (
    <div id="SliderComponent">
      <div className="slider">
        <div className="slide" style={{ backgroundImage: `url('${Images[Math.floor(Math.random() * Images.length)]}')` }}>
          <div className="caption">
            <h2>U.S. Airport Limo Service offer services in all major cities. Make Your Reservation Online &amp; Get 5% Discount</h2>
            <div className="dropdown">
              <Dropdown options={Options} placeholder="Select an airport" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
