'use strict';

import React from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MovieDetail from './MovieDetail';

let {
  View
} = React;

class PageDetail extends React.Component {
  constructor(props){
    super(props);
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
          title={this.props.movie.title}
          titleColor="white"
        />
        <View style={{flex:1}}>
          <MovieDetail movie={this.props.movie}/>
        </View>
      </View>
    );
  }
}

export { PageDetail as default };
