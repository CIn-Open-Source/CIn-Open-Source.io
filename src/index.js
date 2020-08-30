/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

import "assets/vendor/nucleo/css/nucleo.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import "assets/css/argon-design-system-react.css";

import Landing from "views/pages/Landing.js";
import Project from "views/pages/Project.js";

import { ThemeContext, themes } from "./views/themes/theme-context.js";

library.add(fab);
library.add(fas);

const App = () => {
  const [theme, toggleTheme] = useState(themes.dark);
  const value = { theme, toggleTheme };

  return (
    <>
      <Helmet>
        <style>
          {"body { background-color: #" + theme.background_color + "; }"}
        </style>
      </Helmet>
      <ThemeContext.Provider value={value}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" exact render={(props) => <Landing {...props} />} />
            <Route
              path="/project/:id"
              exact
              render={(props) => <Project {...props} />}
            />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
