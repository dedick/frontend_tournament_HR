import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
var CanvasJSReact = require('../lib/canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const styles = {
  navbar: {
    marginTop:30
  }
};


class ChartApplePie extends Component {

  constructor(){
    super();
  }

  render() {
    const options = {
        title: {
          text: "Basic Column Chart in React"
        },
        data: [{
          type: "column",
          dataPoints: [
            { label: "Apple",  y: 10  },
            { label: "Orange", y: 15  },
            { label: "Banana", y: 25  },
            { label: "Mango",  y: 30  },
            { label: "Grape",  y: 28  }
          ]
        }]
    };

    return (
        <div>
          {/*<CanvasJSChart options = {options}*/}
          {/*/>*/}
        </div>
    );
  }
}

export default withStyles(styles)(ChartApplePie);