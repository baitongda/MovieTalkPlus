'use strict';

import React from 'react-native';
import Main from './myapp/android/Main';
import User from './myapp/android/User';

let {
  AppRegistry
} = React;

class MovieTalkPlus extends React.Component {
  render(){
    return (
      <Main/>
    );
  }
}

AppRegistry.registerComponent('MovieTalkPlus', ()=>MovieTalkPlus);
