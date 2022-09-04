import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import ContactUs from './pages/Contact.js'
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.js";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import * as locales from "@material-ui/core/locale";
import ProductsPage from "./pages/ProductsPage/ProductsPage.jsx";
import ProductPageDesktop from "./pages/productpagedesktop/productpagedesktop";
import Team from "./pages/Team/Team.jsx";
import About from "./pages/About/About.jsx";
import List from "./pages/List/List.jsx";
import Saloon from "./pages/Saloon/Saloon.jsx";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [locale, setLocale] = useState("enUS");
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div className="bg-app"></div>
      <div className="App">
        <ThemeProvider
          theme={(outerTheme) => createMuiTheme(outerTheme, locales[locale])}
        >
          <Navbar />
          <Switch>
            <Route path="/" component={ProductsPage} exact />
            <Route
              path="/productsdetails/:id"
              component={ProductPageDesktop}
              exact
            />
            <Route path="/team" component={Team} exact />
            <Route path="/saloon" component={Saloon} exact />
            <Route path="/about" component={About} exact />
            <Route path="/list" component={List} exact />
          </Switch>
          <div className="fixed-bottom-what">
            <a href="tel:+971 52 953 8096" target="blank">
              {" "}
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <a href="https://wa.me/971529538096?text=" target="blank">
              {" "}
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
          <Footer />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
