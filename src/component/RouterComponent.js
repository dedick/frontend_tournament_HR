import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ScoreScreen from "./ScoreScreen";
import DashboardScreen from "./DashboardScreen";

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class RouterComponent extends Component {
  state = {
    players: []
  };

  constructor(){
    super();
  }


  render() {
    return (
        <Router>
            {/*<Route component={RouterComponent}>*/}
            <Route exact path="/" component={ScoreScreen}/>
            <Route exact path="/dashboard" component={DashboardScreen}/>
                {/*<Route path="/list" component={Tab}/>*/}
                {/*<Route path="/about" component={About}/>*/}
            {/*</Route>*/}
        </Router>
    );
  }
}

export default withStyles(styles)(RouterComponent);