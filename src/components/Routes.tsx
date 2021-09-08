import * as React from "react";
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from "react-router-dom";
import { IRoute, routes } from "../config/routes.config";
import { Home } from "./Home";

const routeCreater = (Component: React.ComponentType, routeConfig: IRoute) => ({
  Component,
  path: routeConfig.to,
});

const routeMap = [
  // Can add multiple routes here if we need navigation
  routeCreater(Home, routes.home),
];

const MainRoutesComponent: React.FunctionComponent<RouteComponentProps> = () => {
  return (
    <Switch>
      <>
        {routeMap.map(({ Component, path }) => {
          return <Route exact path={path} key={path} component={Component} />;
        })}
      </>
    </Switch>
  );
};

export const MainRoutes = withRouter(MainRoutesComponent);
