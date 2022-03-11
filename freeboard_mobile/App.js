/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {WebView} from 'react-native-webview';

const App: () => Node = () => {
  return <WebView source={{uri: 'https://naver.com'}} />;
};

export default App;
