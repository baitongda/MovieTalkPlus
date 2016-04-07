'use strict';

import React from 'react-native';
import Main from './myapp/android/Main';

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
