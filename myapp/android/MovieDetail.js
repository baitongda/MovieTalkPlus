'use strict';

import React from 'react-native';
import GiftedSpinner from 'react-native-gifted-spinner';

import stylesBase from './stylesBase';
import stylesMovieDetail from './stylesMovieDetail';

let {
  Text,
  View,
  ScrollView
} = React;

//每次都构建一个新的
class MovieDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movieDetail: '',
      loaded: false
    };
    const REQUEST_URL = `https://api.douban.com/v2/movie/subject/${this.props.movie.id}`;
    this.fetchData(REQUEST_URL);
  }
  fetchData(REQUEST_URL){
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          movieDetail: responseData,
          loaded: true
        });
      })
      .done();
  }
  render(){
    if(!this.state.loaded){
      return(
          <View style={[stylesBase.container,stylesBase.loading]}>
            <GiftedSpinner
              size='large'
              color='#6435c9'
            />
          </View>
      );
    }
    let movie = this.state.movieDetail;
    if(!movie.summary){
      return (
        <View style={{marginBottom:10}}>
          <Text style={stylesMovieDetail.itemText}>没有简介</Text>
        </View>
      );
    }
    let summary = movie.summary.split(/\n/).map( p => {
      var timeKey = new Date().getTime()+p.length;

      return (
        <View style={{marginBottom:10}} key={timeKey}>
          <Text style={stylesMovieDetail.itemText}>{p}</Text>
        </View>
      );
    } );
    return(
      <ScrollView style={stylesBase.container}>
        <View style={stylesMovieDetail.item}>
          {summary}
        </View>
      </ScrollView>
    );
  }
}

export { MovieDetail as default };
