import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FontAwesome from 'react-fontawesome';
import './AppBar.css';
import { Link } from 'react-router-dom'

const elicanStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const elicanAppBar = ({ isSignedIn, handleSignIn }) => {
  const classes = elicanStyles();
  return (
    isSignedIn ?
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Link to='/'><FontAwesome name="home" /></Link>
          </IconButton>
          <Typography variant={'body2'} className={classes.title}>
            ELICAN SCHOOL DATABASE
          </Typography>
          <Button color="inherit" onClick={handleSignIn}>LogOut</Button>
        </Toolbar>
      </AppBar>
    </div>
    :
    ''
  );
}

export default elicanAppBar;