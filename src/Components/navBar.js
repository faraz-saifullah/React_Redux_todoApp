import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import store from '../index';

(function(){
  console.log(store);
})();

class NavBar extends React.Component {
  render() {
    return (
      <div className="flexGrow">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={{flexGrow: 1}}>
              Login Form
            </Typography>
            <Button color="inherit"><Link to="login">Login</Link></Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default connect(null, {})(NavBar);