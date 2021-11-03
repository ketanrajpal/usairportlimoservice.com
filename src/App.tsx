import { BrowserRouter as Router } from "react-router-dom";

import { HeaderComponent } from "./components/header/header";
import { SliderComponent } from "./components/slider/slider";
import { WidgetComponent } from "./components/widget/widget";
import { TabsComponent } from "./components/tabs/tabs";
import { FooterComponent } from "./components/footer/footer";

const App = () => {
  return (
    <Router>
      <HeaderComponent />
      <SliderComponent />
      <WidgetComponent />
      <TabsComponent />
      <FooterComponent />
    </Router>
  );
};

export default App;
