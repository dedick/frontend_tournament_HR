import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = {
    root: {
        flexGrow: 1,
    },
    appbar: {
        alignItems: 'center',
        background: '#005AB5'
    }
};
const NavBar = () => {
    return(
        <div>
            <AppBar position="static" style={styles.appbar}>
                <Toolbar>
                    <Typography variant="title" color="inherit" >
                        Human Resources Machine Contest
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;