'use strict';

import React from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import MovieList from './MovieList';

let {
  View
} = React;

class PageSearchResult extends React.Component {
  constructor(props){
    super(props);
    this.searchUrl = `http://api.douban.com/v2/movie/search?q=${this.props.query}`;
  }
  render(){
    return(
      <View style={{flex:1}}>
        <Icon.ToolbarAndroid
          style={{
            backgroundColor: '#6435c9',
            height: 56,
          }}
          navIconName="chevron-left"
          onIconClicked={this.props.navigator.pop}
          title={this.props.query}
          titleColor="white"
        />
        <View style={{flex:1}}>
          <MovieList navigator={this.props.navigator} requestType='search' requestURL={this.searchUrl}/>
        </View>
      </View>
    );
  }
}

export { PageSearchResult as default };
