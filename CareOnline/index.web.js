import React from 'react';
import ReactNative, { AppRegistry } from 'react-native';
import CareOnline from './app/index';

// register the app
AppRegistry.registerComponent('CareOnline', () => CareOnline);

AppRegistry.runApplication('CareOnline', {
  initialProps: {},
  rootTag: document.getElementById('react-app')
});
