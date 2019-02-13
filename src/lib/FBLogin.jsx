import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}

const fbbuttonStyle = {
}

function FBLogin() {

  return (
    <div>
      <FacebookLogin style={{
        margin: '10px',

      }}
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        icon="fa-facebook"
        size="medium"
        />

    </div>
  );
}

export default FBLogin
