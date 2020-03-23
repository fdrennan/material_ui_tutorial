import React from "react";
import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import theme from "./ui/Theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={() => <div>Home</div>} />
          <Route
            exact={true}
            path="/services"
            component={() => <div>Services</div>}
          />
          <Route
            exact={true}
            path="/customsoftware"
            component={() => <div>Custom Software</div>}
          />
          <Route
            exact={true}
            path="/mobileapps"
            component={() => <div>Mobile Apps</div>}
          />
          <Route
            exact={true}
            path="/websites"
            component={() => <div>Websites</div>}
          />
          <Route
            exact={true}
            path="/revolution"
            component={() => <div>Revolution</div>}
          />
          <Route
            exact={true}
            path="/about"
            component={() => <div>About</div>}
          />
          <Route
            exact={true}
            path="/contact"
            component={() => <div>Contact</div>}
          />
          <Route
            exact={true}
            path="/estimate"
            component={() => <div>Estimate</div>}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
