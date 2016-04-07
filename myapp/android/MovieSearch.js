'use strict';

import React from 'react-native';
import stylesBase from './stylesBase';
import PageSearchResult from './PageSearchResult';

let {
  View,
  Text,
  TextInput
} = React;

class MovieSearch extends React.Component{
  constructor(props){
    super(props);
  }
  onSubmitEditing(){
    //let searchUrl = `http://api.douban.com/v2/movie/search?q=${this.state.query}`;
    //alert(searchUrl);
    var navigator = this.props.navigator;
    //console.log(navigator);
    if(navigator) {
        navigator.push({
            name: 'PageSearchResult',
            component: PageSearchResult,
            params: {
              query: this.state.query
            }
        })
    }
  }
  render(){
    return(
      <View style={[stylesBase.container]}>
        <View style={{
          padding: 7,
          paddingBottom: 0,
          borderColor: 'rgba(100, 53, 201, 0.1)',
          borderBottomWidth: 1
        }}>
        <TextInput
          style={{
            height: 50
          }}
          placeholder='搜索 ...'
          clearButtonMode='while-editing'
          returnKeyType = 'search'
          enablesReturnKeyAutomatically={true}
          onChangeText={(query)=>{
            this.setState({
              'query': query
            });
          }}
          onSubmitEditing={this.onSubmitEditing.bind(this)}
        />
        </View>
      </View>
    );
  }
}

export { MovieSearch as default };
