import { BrowserRouter as Router } from "react-router-dom";

import { HeaderComponent } from "./components/header/header";
import { SliderComponent } from "./components/slider/slider";
import { WidgetComponent } from "./components/widget/widget";

const App = () => {
  return (
    <Router>
      <HeaderComponent />
      <SliderComponent />
      <WidgetComponent />
    </Router>
  );
};

export default App;
