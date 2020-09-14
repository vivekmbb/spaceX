import React from "react";
import { Switch, Route } from "react-router-dom";
import { IndexComponent } from "./spaceX/components/IndexComponent";

function App() {
  return (
    <Switch>
      <Route path="/" component={IndexComponent} />
    </Switch>
  );
}

export default App;
