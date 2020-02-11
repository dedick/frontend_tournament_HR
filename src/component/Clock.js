import React from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Config from '../config/Config'

momentDurationFormatSetup(moment);

class Clock extends React.Component {
    difference;
    then;
    styles = {
        card: {
            minWidth: 275,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            align: 'center'
        },
        pos: {
            marginBottom: 12,
            fontSize:20
        },
    };
    state = {};
    constructor(props) {
        super(props);
        this.then = new Date(this.props.player.timestamp);
        this.then = this.then.setMinutes(this.then.getMinutes() + Config.timeLimit);
        this.calculDifference();
        this.state = {
            time: this.difference,
            color: 'black',
            hidden: false
        };
    }
    fmtMSS(s){
        return ( s - (s %= 60) ) / 60 + ( 9 < s ? ':' : ':0' ) + s
    }
    calculDifference() {
        var time = (this.then - new Date()) / 1000;
        console.log("calculDifference " + time);
        if (time < (Config.timeAlert * 60) && time > 0){
            // REFACTOR
            if (this.state.color === 'white'){
                this.setState({
                    color: 'red',
                });
            } else  {
                this.setState({
                    color: 'white',
                });
            }
        } else if (time < 1) {
            console.log("Call callback mani");
            this.props.callback();
        }
        this.difference = this.fmtMSS(time.toFixed(0));
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.calculDifference();
        if (this.state.color === 'red'){
            this.setState({
                show : !this.state.show,
            })
        }
        this.setState({
            time: this.difference,
        });
    }
    render() {
        return (
            <Grid container justify={"center"}>
                <Card  style={{ textAlign: 'center'}}>
                    <CardContent >
                        <Typography style={{ fontSize: 20 }}>
                            <b>Time remaining:</b>
                        </Typography>
                        <Typography  style={{
                                fontSize: 30,
                                color: this.state.color,
                                textDecoration: this.state.show
                            }}>
                                <b>{this.state.time}</b>
                            </Typography>
                        <Typography component="h3"  style={{ color: '#005AB5' }} gutterBottom>
                            Computer { this.props.player.laptop }
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}

export default Clock