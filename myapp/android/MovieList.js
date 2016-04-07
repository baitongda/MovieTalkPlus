'use strict';

import React from 'react-native';
import GiftedSpinner from 'react-native-gifted-spinner';
import stylesBase from './stylesBase';
import stylesMovieList from './stylesMovieList';
import PageDetail from './PageDetail';

let {
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight
} = React;

//const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';

class MovieList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
      count: 20,
      start: 0,
      total: 0,
      movies: []
    };
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.requestURL = this.props.requestURL;
    this.requestType = this.props.requestType;
    this.fetchData();
    this.navigator = this.props.navigator;
  }
  getRequestURL(
    url = this.requestURL,
    count = this.state.count,
    start = this.state.start
  ){
    if(this.requestType === 'search'){
      return `${url}&count=${count}&start=${start}`;
    }else{
      return `${url}?count=${count}&start=${start}`;
    }
  }
  fetchData(){
    fetch(this.getRequestURL())
      .then(response => response.json())
      .then(responseData => {
        if(this.requestType === 'featured' || this.requestType === 'search'){
          let newStart = responseData.start + responseData.count;
          this.setState({
            movies: responseData.subjects,
            loaded: true,
            total: responseData.total,
            start: newStart
          });
        }else{
          this.setState({
            movies: responseData.subjects,
            loaded: true
          });
        }
      })
      .done();
  }
  showMovieDetail(movie){
    //alert('hello');
    var navigator = this.props.navigator;
    //console.log(navigator);
    if(navigator) {
        navigator.push({
            name: 'PageDetail',
            component: PageDetail,
            params: {
              movie: movie
            }
        })
    }
  }
  loadMore(){
    fetch(this.getRequestURL())
      .then(response => response.json())
      .then(responseData => {
        let newStart = responseData.start + responseData.count;
        this.setState({
          movies: [...this.state.movies,...responseData.subjects],
          start: newStart
        });
      })
      .done();
  }
  onEndReached(){
    if(this.state.total > this.state.start){
      this.loadMore();
    }
  }
  renderFooter(){
    if(this.state.total > this.state.start){
      return(
        <View style={{
          marginVertical: 20,
          alignSelf: 'center'
        }}>
             <GiftedSpinner
               color='#6435c9'
             />
         </View>
      );
    }else{
      return(
        <View style={{
          marginVertical: 20,
          alignSelf: 'center'
        }}>
          <Text
            style={{
              color: 'rgba(0, 0, 0, 0.3)'
            }}
          >已经加载了全部内容了</Text>
         </View>
      );
    }
  }
  renderMovieList(movie){
     if(this.props.requestType === 'usbox'){
       movie = movie.subject;
     }
     return(
       <TouchableHighlight
        underlayColor='rgba(34, 26, 38, 0.1)'
        onPress={() => {
          //console.log(`《${movie.title}》被点了！`);
          this.showMovieDetail(movie);
        }}
       >
         <View style={stylesMovieList.item}>
           <View style={stylesMovieList.itemImage}>
            <Image
              source={{uri: movie.images.large}}
              style={stylesMovieList.image}
            />
           </View>
           <View style={stylesMovieList.itemContent}>
              <Text style={stylesMovieList.itemHeader}>{movie.title}</Text>
              <Text style={stylesMovieList.itemMeta}>
                {movie.original_title}（ {movie.year} ）
              </Text>
              <Text style={stylesMovieList.redText}>{movie.rating.average}</Text>
           </View>
         </View>
       </TouchableHighlight>
     );
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
    return(
        <View style={stylesBase.container}>
          <ListView
            onEndReached={this.onEndReached.bind(this)}
            onEndReachedThreshold={0}
            renderFooter={this.renderFooter.bind(this)}
            initialListSize={this.state.count}
            pageSize={this.state.count}
            dataSource={this.dataSource.cloneWithRows(this.state.movies)}
            renderRow={this.renderMovieList.bind(this)}
          />
        </View>
    );
  }
}
export { MovieList as default };
