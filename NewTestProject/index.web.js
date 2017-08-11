import React, { Component } from 'react';
import mainComponent from './app/index';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


AppRegistry.registerComponent('mainComponent', () => mainComponent);
AppRegistry.runApplication('mainComponent', { rootTag: document.getElementById('react-app') });