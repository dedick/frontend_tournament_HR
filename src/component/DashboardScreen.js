import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tab from './Tab';
import TimerManager from "./TimerManager";
import Grid from '@material-ui/core/Grid';
import ChartApplePie from "./ChartApplePie";
const styles = {
  navbar: {
    marginTop:30
  }
};


class DashboardScreen extends Component {

  constructor(){
    super();
  }

  render() {
    return (
        <ChartApplePie />
    );
  }
}

export default withStyles(styles)(DashboardScreen);