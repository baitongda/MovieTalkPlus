'use strict';

import React from 'react-native';

let {
  StyleSheet
} = React;

let stylesMovieList = StyleSheet.create({
 item: {
   flexDirection: 'row',
   borderBottomWidth: 1,
   borderColor: 'rgba(100, 53, 201, 0.1)',
   paddingBottom: 6,
   paddingTop: 6,
   flex: 1
 },
 itemContent: {
   flex: 1,
   marginLeft: 13,
   marginTop: 6
 },
 itemHeader: {
   fontSize: 18,
   fontFamily: 'Helvetica Neue',
   fontWeight: '300',
   color: '#6435c9',
   marginBottom: 6
 },
 itemMeta: {
   fontSize: 16,
   color: 'rgba(0, 0, 0, 0.6)',
   marginBottom: 6,
 },
 redText: {
   color: '#db2828',
   fontSize: 15,
 },
 image: {
    width: 99,
    height: 138,
    margin: 6
  }
});

export { stylesMovieList as default };
