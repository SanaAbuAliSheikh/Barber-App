/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';
import Routes from './src/routes/Route';

const App: () => Node = () => {
  return (
    <View style={{flex:1,backgroundColor:'black'}}>
    <Routes />

    </View>
  );
};

export default App;
