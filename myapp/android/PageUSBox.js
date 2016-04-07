'use strict';

import React from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PageFeatured from './PageFeatured';
import PageSearch from './PageSearch';
import MovieList from './MovieList';

let {
  View
} = React;

class PageUSBox extends React.Component {
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

    }
    if (position === 2) {
      if(navigator) {
          navigator.replace({
              name: 'PageSearch',
              component: PageSearch
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
          title="北美票房"
          titleColor="white"
          actions={[
            { title: '推荐电影', iconName: 'star', iconSize: 30, iconColor: "#757388", show: 'always'},
            { title: '北美票房', iconName: 'stats-bars', iconSize: 30, iconColor: "white", show: 'always'},
            { title: '搜索', iconName: 'search', iconSize: 30, iconColor: "#757388", show: 'always'}
          ]}
          onActionSelected={this.onActionSelected.bind(this)}
        />
        <View style={{flex:1}}>
          <MovieList navigator={this.props.navigator} requestType='usbox' requestURL='https://api.douban.com/v2/movie/us_box'/>
        </View>
      </View>
    );
  }
}

export { PageUSBox as default };
