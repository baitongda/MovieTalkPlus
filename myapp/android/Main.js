'use strict';

import React from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PageFeatured from './PageFeatured';

let {
  View,
  Navigator,
  ToolbarAndroid
} = React;

class Main extends React.Component {
  render(){
    return (
      <Navigator
        initialRoute={
          {
            name: 'PageFeatured',
            component: PageFeatured
          }
        }
        configureScene={(route) => {
          return Navigator.SceneConfigs.PushFromRight;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }} />
    );
  }
}

export { Main as default };
