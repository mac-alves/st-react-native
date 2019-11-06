import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/pages/Login';
import Home from "./src/pages/Home";
import Pessoal from "./src/pages/Pessoal";
import Financeiro from "./src/pages/Financeiro";

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Home:{
    screen:Home
  },
  Pessoal:{
    screen:Pessoal
  },
  Financeiro:{
    screen:Financeiro
  }
});

export default createAppContainer(AppNavigator);
