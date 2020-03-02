import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Tab from './Tab';
import TimerManager from "./TimerManager";
import Grid from '@material-ui/core/Grid';

const styles = {
    navbar: {
        marginTop: 30
    }
};


class ScoreScreen extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Grid
                justify={"center"}
                alignItems={"center"}
                container
            >
                <Grid item xs={12}>
                    <TimerManager className={styles.navbar}/>
                </Grid>
                <Grid item xs={10} style={{
                    marginLeft: "-5%",
                    background: "rgb(232, 219, 206)"
                }}>
                    <Tab className={styles.navbar}/>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(ScoreScreen);