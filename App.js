/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import Routes from './src/routes/Route';
import {Provider} from 'react-redux';
import store from './src/store';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <Routes />
      </View>
    </Provider>
  );
};

export default App;
