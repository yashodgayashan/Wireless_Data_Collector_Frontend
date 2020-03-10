import React, { Fragment } from "react";
import Login from "./login/Login";
import SignUp from "./signup/Signup";
import UserPortal from "./user-portal/UserPortal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Body = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/user-portal" component={UserPortal} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Body;
