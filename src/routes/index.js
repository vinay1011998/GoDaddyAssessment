import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

const RepoList = lazy(() => import("./RepositoryList"));
const RepoDetails = lazy(() => import("./RepositoryDetails"));

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Switch>
          <Redirect exact from="/" to="/repos" />
          <Route exact path="/repos" component={RepoList} />
          <Route exact path="/repos/:id" component={RepoDetails} />
          <Redirect to="/repos" />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
