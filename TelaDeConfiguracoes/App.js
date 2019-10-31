import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, ImageBackground } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/pages/Login';
import Pessoal from "./src/pages/Pessoal";
import Financeiro from "./src/pages/Financeiro";

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Pessoal:{
    screen:Pessoal
  },
  Financeiro:{
    screen:Financeiro
  }
});

export default createAppContainer(AppNavigator);
