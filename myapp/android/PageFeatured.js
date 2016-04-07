'use strict';

import React from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PageUSBox from './PageUSBox';
import PageSearch from './PageSearch';
import MovieList from './MovieList';

let {
  View
} = React;

class PageFeatured extends React.Component {
  constructor(props){
    super(props);
  }
  onActionSelected(position) {
    var navigator = this.props.navigator;
    if (position === 0) {
    }
    if (position === 1) {
      if(navigator) {
          navigator.replace({
              name: 'usbox',
              component: PageUSBox,
          })
      }
    }
    if (position === 2) {
      if(navigator) {
          navigator.replace({
              name: 'PageSearch',
              component: PageSearch,
          })
      }
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
          title="推荐电影"
          titleColor="white"
          actions={[
            { title: '推荐电影', iconName: 'star', iconSize: 30, iconColor: "white", show: 'always'},
            { title: '北美票房', iconName: 'stats-bars', iconSize: 30, iconColor: "#757388", show: 'always'},
            { title: '搜索', iconName: 'search', iconSize: 30, iconColor: "#757388", show: 'always'}
          ]}
          onActionSelected={this.onActionSelected.bind(this)}
        />
        <View style={{flex:1}}>
          <MovieList navigator={this.props.navigator} requestType='featured' requestURL='https://api.douban.com/v2/movie/top250'/>
        </View>
      </View>
    );
  }
}

export { PageFeatured as default };
