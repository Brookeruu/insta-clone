import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import SignInBox from './SignInBox';


const landingStyle  = {
  display: 'grid',
  gridGap: '1em',
  
  gridTemplateColumns: 'repeat(auto-fit, 400px)',
  gridTemplateRows: 'repeat(auto-fit, 800px)',
  justifyContent: 'center'
}

const phoneColumn = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end'
}

const column2 = {
  padding: '25px',
  margin: '25px'
}

class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>
          testing out landing page !
        </h1>
        <div style={landingStyle}>
          <div style={phoneColumn}>
            <img src="%PUBLIC_URL%/../ig_phones.png" alt="phone images from IG"></img>
          </div>

            <div style={column2}>

              <div>
                <SignInBox/>
              </div>

            </div>

          </div>
        </div>
        );
      }
    }

    export default LandingPage;
