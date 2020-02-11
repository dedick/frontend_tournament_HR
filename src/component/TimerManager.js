import React, { Component } from 'react';
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import Clock from "./Clock";
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import EmptyFragment from './EmptyComponent';
import Config from '../config/Config'

momentDurationFormatSetup(moment);

class TimerManager extends Component {
    test = [];
    state = {
        players: []
    };
    constructor() {
        super();
        this.getPlayers();
    }

    setClock(playerList) {
        this.test = [];
        for (let i = 0; i < playerList.length; i++) {
            playerList[i].time_end = moment().diff(moment(playerList[i].timestamp).add(Config.timeLimit, 'm'));
            if (playerList[i].time_end < 0) {
                this.test.push(playerList[i]);
            }
        }
        this.setState({players: this.test });
    }

    callbackTimer = () => {
        this.setClock(this.test);
    }

    getPlayers = () => {
        console.log("getPLayers request");
        axios.get('http://127.0.0.1:8000/players/onGame', {headers: {'Access-Control-Allow-Origin': '*'}})
            .then( (response) => {
                if (response.data && response.data.length > 0){
                    this.setClock(response.data);
                    console.log("setState");
                    setInterval(this.getPlayers, 60000);
                }
            }).catch((error) => {
            console.log(error);
        });
    }

    render () {
        return (
            <React.Fragment >
            { this.state.players && this.state.players.length > 0 ? (
                    <Grid style={{marginBottom: 20, marginTop: 20}} container direction="row" justify="space-around">
                        { this.state.players.map( row => (
                            <Grid item xs={3} key={row.id}>
                                <Clock callback={this.callbackTimer} player={row} class="clock" />
                            </Grid>
                        ))}
                    </Grid>
                ) : <EmptyFragment /> }
            </React.Fragment>
        )
    }
}


export default (TimerManager);