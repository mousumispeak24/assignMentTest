import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

import AuthContainer from "../auth/login";
import showCapitalPage from "../auth/showCapital";
// import DahboardContainer from "../dashboard/medicine";
// import TableContainerIs from "../../containers/dashboard/table";
// import NotificationContainer from "../dashboard/notification";
// import InviteContainer from "../dashboard/invite";
// import RewordRuleTabel from "../dashboard/rewordRules";
import ProtectedRoute from "../../components/protectedRoute";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import { STP_TOKEN } from "../../utils/config";

// import AlertDialog from "../../components/alert"
const RootContainer = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(
    ";;;;;;;;;;;;;;;;;;;;;;;;;;;in root;;;;;;;;;;;;;;;;;;;;;",
    isLoggedIn
  );

  return (
    <Router>
        <Switch>
          <Route exact path="/auth" component={AuthContainer} />
          <ProtectedRoute
            exact
            path="/showCapitalData"
            isLoggedIn={isLoggedIn}
            component={showCapitalPage}
          />
          {/* <Route exact path="/signup" component={SignUpContainer} /> */}
          {/* <Route
            exact
            path="/dashboard"
            isLoggedIn={isLoggedIn}
            component={DahboardContainer}
          /> */}
          {/* <ProtectedRoute
            exact
            path="/dashboard"
            isLoggedIn={isLoggedIn}
            component={DahboardContainer}
          />
          <ProtectedRoute
            exact
            path="/table"
            isLoggedIn={isLoggedIn}
            component={showCapitalPage}
          />
          <ProtectedRoute
            exact
            path="/notification"
            isLoggedIn={isLoggedIn}
            component={NotificationContainer}
          />
          <ProtectedRoute
            exact
            path="/invite"
            isLoggedIn={isLoggedIn}
            component={InviteContainer}
          />
          <ProtectedRoute
            exact
            path="/reward-rule"
            isLoggedIn={isLoggedIn}
            component={RewordRuleTabel}
          />
          <Redirect from="/" exact to="/auth" /> */}
          <Redirect from="/" exact to="/auth" />
          <Route exact path="*" component={AuthContainer} />
        </Switch>
      {/* )} */}
    </Router>
  );
};

export default RootContainer;
