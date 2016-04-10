'use strict';

import React from 'react-native';

let {
  View,
  WebView
} = React;

class User extends React.Component {
  render(){
    return (
      <WebView
        javaScriptEnabled={true}
        startInLoadingState={true}
        source={{uri:'http://m.sui.taobao.org/demos/'}}
      />
    );
  }
}

export { User as default };
