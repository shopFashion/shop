import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "views/Pages/LoginPage.jsx";


// core components
import Admin from "layouts/Admin.jsx";
import Auth from "layouts/Auth.jsx";
import RTL from "layouts/RTL.jsx";

import "assets/css/material-dashboard-react.css?v=1.6.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route extends path="/admin" component={Admin} />
      {/* <Route path="/admin" component={LoginPage} /> */}
      {/* <Redirect from="/admin" to="admin/dashboard" /> */}

      <Route path="/auth" component={Auth} />
      {/* <Route path="/rtl" component={RTL} /> */}
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
