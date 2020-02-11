import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tab from './component/Tab';
import TimerManager from './component/TimerManager';
import Grid from '@material-ui/core/Grid';
import * as serviceWorker from './serviceWorker';
import NavBar from "./component/navbar";
import RouterComponent from "./component/RouterComponent";


const element = (
    <Grid container direction="column" spacing={24}>
        <NavBar />
        <Grid>
            <RouterComponent/>
        </Grid>

    </Grid>
    );

ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
