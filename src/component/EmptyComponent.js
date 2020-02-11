import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';

import PropTypes from "prop-types";
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import logo from '../img/epitech_logo_azul.png'

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
            <Grid container justify={"center"} style={{marginTop: 20, marginBottom: 20, borderRadius: 4, borderWidth: 0.5, borderColor: '#005AB5' }}>
                <Grid item  xs={12} lg={8}>
                    <CssBaseline />
                    <div className={this.classes.layout}>
                        <main style={{ textAlign: 'center'}}>
                            {/* Main featured post */}
                            <Paper className={this.classes.mainFeaturedPost}>
                                <Grid container  >
                                    <Grid item xs={12}>
                                        <div className={this.classes.mainFeaturedPostContent}>
                                            <img style={{ height: 150, marginTop: 30, marginBottom: 30 }} src={logo}  alt={"logo epitech"} />
                                            <Typography component="h1" variant="h3" color="inherit" gutterBottom style={{color: '#005AB5'}}>
                                                ¿Quieres descubrir tu potencial para ser programador?
                                            </Typography>
                                            <Typography variant="h4" color="inherit" paragraph style={{ marginTop: 30 }}>
                                                Y gana un ipad
                                            </Typography>

                                        </div>
                                    </Grid>
                                </Grid>
                            </Paper>
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