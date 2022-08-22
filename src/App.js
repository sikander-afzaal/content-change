import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

// import ContactUs from './pages/Contact.js'
import Navbar from "./Components/Navbar/Navbar.js";
import Footer from "./Components/Footer/Footer.js";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import * as locales from "@material-ui/core/locale";
import ProductsPage from "./pages/ProductsPage/ProductsPage.js";
import ProductPageDesktop from "./pages/productpagedesktop/productpagedesktop";
import Team from "./pages/Team/Team.jsx";
import About from "./pages/About/About.jsx";

function App() {
  const [locale, setLocale] = useState("enUS");
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
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
          <Route path="/about" component={About} exact />
        </Switch>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
