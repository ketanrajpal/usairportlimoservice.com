import { useState } from "react";
import "./tabs.scss";

import JFKAirportLimoServiceNYCImage from "../../assets/images/jfk-airport-limo-service-nyc.jpg";
import LGALimoServiceLaGaurdiaAirportImage from "../../assets/images/lga-limo-service-laguardia-airport.jpg";
import NewarkAirportLimoServiceEWRImage from "../../assets/images/newark-airport-limo-service-ewr.jpg";
import ManhattanLimoServiceJFKAirportImage from "../../assets/images/manhattan-limo-service-jfk-airport.jpg";
import NewYorkAirportCarServiceNYCImage from "../../assets/images/new-york-airport-car-service-nyc.jpg";
import AboutNYCAirportLimoServiceJFKImage from "../../assets/images/about-nyc-airport-limo-service-jfk.jpg";
import EWRLimoServiceNewarkAirportImage from "../../assets/images/ewr-limo-service-newark-airport.jpg";
import NYCAirportCarServiceNewYorkImage from "../../assets/images/nyc-airport-car-service-new-york.jpg";

export const TabsComponent = () => {
  const [Content] = useState<{ heading?: string; content?: string; image?: string }[]>([
    {
      heading: "JFK Airport Limo Service NYC",
      content:
        "At NYC Airports Limo we specialize in providing JFK limousine service and a profession service for cars, limos, airport shuttle, airport transportation and wedding limos. Best limo service to JFK, airport limo service JFK and limousine service JFK in CT, NY, NJ, PA, Long Island, Westchester and Upstate New York.",
    },
    {
      image: JFKAirportLimoServiceNYCImage,
    },
    {
      heading: "LGA Limo Service LaGaurdia Airport",
      content:
        "At NYC Airports Limo we specialize in providing JFK limousine service and a profession service for cars, limos, airport shuttle, airport transportation and wedding limos. Best limo service to JFK, airport limo service JFK and limousine service JFK in CT, NY, NJ, PA, Long Island, Westchester and Upstate New York.",
    },
    {
      image: LGALimoServiceLaGaurdiaAirportImage,
    },
    {
      image: NewarkAirportLimoServiceEWRImage,
    },
    {
      heading: "Newark Airport Limo Service EWR",
      content:
        "At NYC Airports Limo we specialize in providing JFK limousine service and a profession service for cars, limos, airport shuttle, airport transportation and wedding limos. Best limo service to JFK, airport limo service JFK and limousine service JFK in CT, NY, NJ, PA, Long Island, Westchester and Upstate New York.",
    },
    {
      image: ManhattanLimoServiceJFKAirportImage,
    },
    {
      heading: "Manhattan Limo Service JFK Airport",
      content:
        "At NYC Airports Limo we specialize in providing JFK limousine service and a profession service for cars, limos, airport shuttle, airport transportation and wedding limos. Best limo service to JFK, airport limo service JFK and limousine service JFK in CT, NY, NJ, PA, Long Island, Westchester and Upstate New York.",
    },
    {
      heading: "New York Airport Car Service NYC",
      content:
        "At NYC Airports Limo we specialize in providing JFK limousine service and a profession service for cars, limos, airport shuttle, airport transportation and wedding limos. Best limo service to JFK, airport limo service JFK and limousine service JFK in CT, NY, NJ, PA, Long Island, Westchester and Upstate New York.",
    },
    {
      image: NewYorkAirportCarServiceNYCImage,
    },
    {
      heading: "About NYC Airport Limo Service JFK",

      content:
        "At NYC Airports Limo we specialize in providing JFK limousine service and a profession service for cars, limos, airport shuttle, airport transportation and wedding limos. Best limo service to JFK, airport limo service JFK and limousine service JFK in CT, NY, NJ, PA, Long Island, Westchester and Upstate New York.",
    },
    {
      image: AboutNYCAirportLimoServiceJFKImage,
    },
    {
      image: EWRLimoServiceNewarkAirportImage,
    },
    {
      heading: "EWR Limo Service Newark Airport",
      content:
        "At NYC Airports Limo we specialize in providing JFK limousine service and a profession service for cars, limos, airport shuttle, airport transportation and wedding limos. Best limo service to JFK, airport limo service JFK and limousine service JFK in CT, NY, NJ, PA, Long Island, Westchester and Upstate New York.",
    },
    { image: NYCAirportCarServiceNewYorkImage },
    {
      heading: "NYC Airport Car Service New York",
      content:
        "At NYC Airports Limo we specialize in providing JFK limousine service and a profession service for cars, limos, airport shuttle, airport transportation and wedding limos. Best limo service to JFK, airport limo service JFK and limousine service JFK in CT, NY, NJ, PA, Long Island, Westchester and Upstate New York.",
    },
  ]);

  return (
    <div id="TabsComponent">
      <section>
        {Content.map((item, index) =>
          item.image ? (
            <article className="tabs-image" key={`tabs-image-${index}`} style={{ backgroundImage: `url(${item.image})` }}></article>
          ) : (
            <article className="tabs-item" key={`tabs-item-${index}`}>
              <h2>{item.heading}</h2>
              <p>{item.content}</p>
            </article>
          )
        )}
      </section>
    </div>
  );
};
