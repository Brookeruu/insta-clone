import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FBLogin from './FBLogin';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    backgroundColor: '#fafafa',
    width: '258px',
    height: '36px',
    marginTop: '1px',
    fontSize: '16px'
  },
  dense: {
    marginTop: 16,
  },
});

const fbButton = {
  class: "fb-login-button",
}

const signUp = {
  marginTop: '10px',
  backgroundColor: '#4c69ba',
  border: '1px solid #4c69ba',
  color: 'white',
  fontSize: '14px',
  fontWeight: 'bold',
  width: '258px',
  height: '36px',
}

class SignInBox extends React.Component {
  state = {
  name: '',
  age: '',
  multiline: 'Controlled',
  currency: 'EUR',
};

handleChange = name => event => {
  this.setState({
    [name]: event.target.value,
  });
};
  render() {

    const { classes } = this.props;

    return (
  <div>
    <div style={{
      backgroundColor: 'white',
      borderRadius: '3px',
      border: '1px solid #e6e6e6',
      width: '350px',
      marginBottom: '10px',
      paddingTop: '30px'
    }}>
      <div>
        <img src='%PUBLIC_URL%/../ig_logo.png'></img>
          <h4 style={{color: '#999', textAlign: 'center', lineHeight: '30px', margin: '20px'}}>Sign up to see photos and videos from your friends.</h4>
            <div style={{
              padding: '10px',
            }}>
              <FBLogin />
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: '10px'
            }}>
              <div style={{
                width: '40%',
              }}>
                <hr style={{borderColor: '#F5F5F5'}}/>
              </div>
              <div>
                <span> OR </span>
              </div>
              <div style={{width: '40%'}}>
                <hr />
              </div>
            </div>

            <div
              className={fbButton}
              data-size="large"
              data-button-type="login_with"
              data-auto-logout-link="false"
              data-use-continue-as="false">
            </div>

        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label="Mobile Number or Email"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Full Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Username"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Password"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
          />
        </form>

        <button style={signUp}>Sign up
        </button>
        <p style={{color: '#999', textAlign: 'center', lineHeight: '30px', margin: '20px'}}>By signing up, you agree to our <strong>Terms</strong> , <strong>Data Policy</strong> and <strong>Cookies Policy</strong> .</p>
      </div>


    </div>

    <div style={{
      backgroundColor: 'white',
      borderRadius: '3px',
      border: '1px solid #e6e6e6',
      width: '350px',
      paddingTop: '10px',
      paddingBottom: '10px'
    }}
      >
      <p>Have an account? <a href=''>Log in</a></p>
    </div>
  </div>
    );
  }
}
SignInBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignInBox);
