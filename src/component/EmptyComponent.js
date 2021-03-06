import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';

import PropTypes from "prop-types";
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import logo from '../img/epitech_logo_azul.png'
import header from '../img/header-new.jpg'

const styles = theme => ({
    layout: {
        width: 'auto',
        background: "black",
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
    },
    mainFeaturedPost: {
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing.unit * 4,
    },
    mainFeaturedPostContent: {
        padding: `${theme.spacing.unit * 6}px`,
        [theme.breakpoints.up('md')]: {
            paddingRight: 0,
        },

    },
    mainGrid: {
        marginTop: theme.spacing.unit * 3,
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    markdown: {
        padding: `${theme.spacing.unit * 3}px 0`,
    },
    sidebarAboutBox: {
        padding: theme.spacing.unit * 2,
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing.unit * 3,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
});


class EmptyComponent extends Component {
    classes;

    constructor(props) {
        super(props);
        this.classes = props;
    }

    render() {
        return (
            <Grid container justify={"center"}
                  style={{marginBottom: 20, borderRadius: 4, borderWidth: 0.5, borderColor: '#005AB5'}}>
                <Grid item xs={12} lg={8}>
                    <Grid container justify={"center"}>
                        <div style={{width: "39.5vw", display: "flex", justifyContent: "center"}}>
                            <img style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                            }} alt={"image"} src={header}/>
                        </div>
                    </Grid>
                    <div className={this.classes.layout}>
                        <main style={{textAlign: 'center'}}>
                            {/* Main featured post */}
                            <Grid style={{
                                position: "absolute",
                                top: "0",
                                right: "0",
                                width: "30%",
                                backgroundColor: "rgb(230, 219, 205)"
                            }} className={this.classes.mainFeaturedPost} container justify={"center"}>
                                <Grid container xs={12} justify={"center"}>
                                    <Grid item xs={12}>
                                        <div className={this.classes.mainFeaturedPostContent}>
                                            <img style={{height: 80, marginTop: 30, marginBottom: 30}} src={logo}
                                                 alt={"logo epitech"}/>
                                            <Typography variant="h3" color="inherit" gutterBottom
                                                        style={{fontSize: "2em",color: '#005AB5'}}>
                                                ¿Quieres descubrir tu potencial para ser programador?
                                            </Typography>
                                            <Typography variant="h4" color="inherit" paragraph style={{marginTop: 30}}>
                                                Y gana un ipad
                                            </Typography>

                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {/* End main featured post */}

                        </main>
                    </div>

                </Grid>
            </Grid>
        );
    }
}

EmptyComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmptyComponent)