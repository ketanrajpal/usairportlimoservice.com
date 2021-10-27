import { useState } from "react";

import "./widget.scss";

export const WidgetComponent = () => {
  const [Widget] = useState([
    {
      icon: "fas fa-fighter-jet",
      name: "Fast & Safe",
      description:
        "We generally land ahead of time so you never need to hold up and our groups of approved drivers are furnished with unblemished vehicles and unlimited learning of the city to guarantee you arrive securely to your goal.",
    },
    {
      icon: "fas fa-dollar-sign",
      name: "Best Prices",
      description:
        "We offer the most competitive rates for top quality Tri-State Limo Services, Car Services, Airport Transport and Wedding Limousines. You can expect a reliable and professional service that’s also cost effective",
    },
    {
      icon: "fas fa-car",
      name: "Best Service",
      description:
        "We’re unmatched in the exceptional standards we provide for professional Limousine and Airport Transfer Services in CT, NJ, NY and PA. We guarantee that you will enjoy a smooth ride and safe arrival.",
    },
  ]);

  return (
    <div id="WidgetComponent">
      {Widget.map((item, index) => {
        return (
          <div key={index}>
            <i className={item.icon}></i>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};
