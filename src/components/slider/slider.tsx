import Dropdown from "react-dropdown";

import "./slider.scss";
import Slide3 from "../../assets/images/slide-3.jpg";

export const SliderComponent = () => {
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
        <div className="slide" style={{ backgroundImage: `url('${Slide3}')` }}>
          <div className="caption">
            <h2>U.S. Airport Limo Service offer services in all major cities. Make Your Reservation Online &amp; Get 5% Discount</h2>
            <div className="dropdown">
              <Dropdown options={Options} placeholder={`Select an Airport`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
