import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";

// import ContactUs from './pages/Contact.js'
import Navbar from "./Components/Navbar/Navbar.js";
import Footer from "./Components/Footer/Footer.js";
import Contact from "./pages/ContactUs/ContactUs.js";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { zhCN, enUS, esES } from "@material-ui/core/locale";
import * as locales from "@material-ui/core/locale";
import ProductsPage from "./pages/ProductsPage/ProductsPage.js";
import ProductPageDesktop from "./pages/productpagedesktop/productpagedesktop";
import Team from "./pages/Team/Team.jsx";

function App() {
  const [locale, setLocale] = useState("enUS");

  return (
    <div className="App">
      <ThemeProvider
        theme={(outerTheme) => createMuiTheme(outerTheme, locales[locale])}
      >
        <Navbar />
        <Switch>
          <Route path="/contact" component={Contact} exact />
          <Route path="/" component={ProductsPage} exact />
          <Route
            path="/productsdetails/:id"
            component={ProductPageDesktop}
            exact
          />
          <Route path="/team" component={Team} exact />
        </Switch>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
