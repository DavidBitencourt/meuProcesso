import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import SearchProcess from "../pages/SearchProcess";

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search-process" exact component={SearchProcess} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
