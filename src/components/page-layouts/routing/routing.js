import React from "react";
import { Route, Switch } from "react-router-dom";
import MountVernonHigh from "../mount-vernon-high/mount-vernon-high";
import Home from "../home/home";

import GradeList from "../../content-components/grade-list/grade-list";
import SupplyList from "../../content-components/supply-list/supply-list";

class Routing extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />

        <Route
          exact
          path="/centennial-elementary"
          render={props => <GradeList {...props} schoolType={"elementary"} />}
        />
        <Route path="/centennial-elementary/:id" component={SupplyList} />

        <Route
          exact
          path="/harriet-rowley-elementary"
          render={props => <GradeList {...props} schoolType={"elementary"} />}
        />
        <Route path="/harriet-rowley-elementary/:id" component={SupplyList} />

        <Route
          exact
          path="/jefferson-elementary"
          render={props => <GradeList {...props} schoolType={"elementary"} />}
        />
        <Route path="/jefferson-elementary/:id" component={SupplyList} />

        <Route
          exact
          path="/little-mountain-elementary"
          render={props => <GradeList {...props} schoolType={"elementary"} />}
        />
        <Route path="/little-mountain-elementary/:id" component={SupplyList} />

        <Route
          exact
          path="/lincoln-elementary"
          render={props => <GradeList {...props} schoolType={"elementary"} />}
        />
        <Route path="/lincoln-elementary/:id" component={SupplyList} />

        <Route
          exact
          path="/madison-elementary"
          render={props => <GradeList {...props} schoolType={"elementary"} />}
        />
        <Route path="/madison-elementary/:id" component={SupplyList} />

        <Route
          exact
          path="/washington-elementary"
          render={props => <GradeList {...props} schoolType={"elementary"} />}
        />
        <Route path="/washington-elementary/:id" component={SupplyList} />

        <Route
          exact
          path="/laventure-middle"
          render={props => <GradeList {...props} schoolType={"middle"} />}
        />
        <Route path="/laventure-middle/:id" component={SupplyList} />

        <Route
          exact
          path="/mount-baker-middle"
          render={props => <GradeList {...props} schoolType={"middle"} />}
        />
        <Route path="/mount-baker-middle/:id" component={SupplyList} />

        <Route exact path="/mount-vernon-high" component={MountVernonHigh} />
      </Switch>
    );
  }
}

export default Routing;
