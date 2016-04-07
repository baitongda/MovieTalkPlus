'use strict';

import React from 'react-native';

let {
  StyleSheet
} = React;

let stylesBase = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
    //marginTop: 64,
    //marginBottom: 49
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export { stylesBase as default };
