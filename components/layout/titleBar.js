import React, {useState} from 'react';
import clsx from 'clsx';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import { useAuth } from "../../lib/useAuth.js";

import Tooltip from '@material-ui/core/Tooltip';

export default function appBar({open, handleDrawerOpen, setSortPageToggle}){
    const classes = useStyles();
    const {pageName, currentSeason, setCurrentSeason, seasonList, setPageName} = useAuth();

    
    const handleSeasonChange = (value) => {
      setSortPageToggle(false);
      setPageName('Programs');
      setCurrentSeason(value);}
    
    return (
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
              
              <IconButton children={<MenuIcon />} edge="start" color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} className={clsx(classes.menuButton, open && classes.menuButtonHidden)}/>
              <Typography children={pageName} component="h1" variant="h6" color="inherit" noWrap className={classes.title}/>
              
              <Grid container direction="row" justify="flex-end" alignItems="center" spacing={2} style={{width: 'auto'}}>
                
                <Grid item>
                </Grid>

                <Grid item>
                </Grid>

                <Grid item>
                </Grid>

              </Grid>
          </Toolbar>
      </AppBar>
    );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);