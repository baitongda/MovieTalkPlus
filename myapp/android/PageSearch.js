'use strict';

import React from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PageFeatured from './PageFeatured';
import PageUSBox from './PageUSBox';
import MovieSearch from './MovieSearch';

let {
  View
} = React;

class PageSearch extends React.Component {
  constructor(props){
    super(props);
  }
  onActionSelected(position) {
    var navigator = this.props.navigator;
    if (position === 0) {
      if(navigator) {
          navigator.replace({
              name: 'PageFeatured',
              component: PageFeatured
          })
      }
    }
    if (position === 1) {
      if(navigator) {
          navigator.replace({
              name: 'PageUSBox',
              component: PageUSBox
          })
      }
    }
    if (position === 2) {

    }
  }
  render(){
    return(
      <View style={{flex:1}}>
        <Icon.ToolbarAndroid
          style={{
            backgroundColor: '#6435c9',
            height: 56,
          }}
          title="搜索"
          titleColor="white"
          actions={[
            { title: '推荐电影', iconName: 'star', iconSize: 30, iconColor: "#757388", show: 'always'},
            { title: '北美票房', iconName: 'stats-bars', iconSize: 30, iconColor: "#757388", show: 'always'},
            { title: '搜索', iconName: 'search', iconSize: 30, iconColor: "white", show: 'always'}
          ]}
          onActionSelected={this.onActionSelected.bind(this)}
        />
        <View style={{flex:1}}>
          <MovieSearch navigator={this.props.navigator} />
        </View>
      </View>
    );
  }
}

export { PageSearch as default };
