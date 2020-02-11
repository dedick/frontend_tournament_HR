import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import PropTypes from 'prop-types';
import EmptyComponent from "./EmptyComponent";


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

class PlayerList extends Component {
  state = {
    players: []
  };

  constructor(){
    super();
    this.getPlayers();
  }

  getPlayers = () => {
    axios.get('http://127.0.0.1:8000/players/score', {headers: {'Access-Control-Allow-Origin': '*'}})
        .then( (response) => {
          console.log(response);
          this.setState({players: response.data })
        }).catch((error) => {
          console.log(error);
        });
  }

  render() {
    return (
        <Paper className={styles.root}>
          <Table className={styles.table}>
            <TableHead>
              <TableRow>
                <TableCell className="col" align="center" style={{background: '#005AB5', color: 'white'}}><b>Apellido</b></TableCell>
                <TableCell className="col" align="center" style={{background: '#005AB5', color: 'white'}}><b>Nombre</b></TableCell>
                <TableCell align="center" className="col" style={{background: '#005AB5', color: 'white'}}><b>Escuela</b></TableCell>
                <TableCell align="center" className="col" style={{background: '#005AB5', color: 'white'}}><b>Punctuation</b></TableCell>
              </TableRow>
            </TableHead>
          <TableBody>
          { this.state.players ? (
              <React.Fragment>
              { this.state.players.map( row => (
                    <TableRow key={row.id}>
                      <TableCell className="col" align="center">{row.firstname}</TableCell>
                      <TableCell className="col" align="center">{row.lastname}</TableCell>
                      <TableCell align="center" className="col">
                              { row.school ? (
                                  <React.Fragment>
                                   {row.school}
                                  </React.Fragment>
                              ) : "N/A"}
                      </TableCell>
                      <TableCell align="center" className="col">{row.level}</TableCell>
                    </TableRow>
                  ))}
              </React.Fragment>
              ) : <EmptyComponent/> }
          </TableBody>
          </Table>
        </Paper>
    );
  }
}
PlayerList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlayerList);