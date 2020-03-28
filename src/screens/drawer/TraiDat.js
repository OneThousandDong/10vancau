import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Screen from './test.js';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const navOptionHandler= () => ({
	headerShown: false
})

TraiDat = () =>
 	 <Stack.Navigator>
      <Stack.Screen name="Screen" component={Screen} options={navOptionHandler}/>
   	</Stack.Navigator>

export default TraiDat;