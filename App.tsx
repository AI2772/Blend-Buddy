import React from 'react';
import Home from './src/screen/Home';
import codePush from 'react-native-code-push';


function App() {
  return (
    <Home />
  );
}

export default codePush(App);
