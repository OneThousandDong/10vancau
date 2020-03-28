import React, { Component } from 'react';
import Detail from './src/detail';

import TraiDat from './src/screens/drawer/TraiDat.js';
import Screen2 from './src/screens/drawer/screen2';
import Screen3 from './src/screens/drawer/screen3';

import NavbarContent from './src/NavbarContent.js';
import {Button} from 'native-base';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

const navOptionHandler = () => ({
  headerShown: false
});


export default class App extends Component {

  createTopicStack = () =>
    <Stack.Navigator>
      <Stack.Screen name="Detail" component={Detail} options={navOptionHandler}/>
    </Stack.Navigator>

  createLoveStack = (props) => 
    <Stack.Navigator>
      <Stack.Screen name="Screen3333" component={Screen3} options={navOptionHandler}/>
    </Stack.Navigator>

  createDrawer = () =>
    <Drawer.Navigator drawerContent={props => <NavbarContent {...props} />}>
      <Drawer.Screen name="Trang chủ" component={this.createNextStack} 
        options={{
          drawerIcon: () => <Icon name="home-outline" color="yellow" size={30} />

        }}
      />
    </Drawer.Navigator>

  createTopTabs = () => 
    <MaterialTopTabs.Navigator
      tabBarOptions={{
        showIcon :'true',
        labelStyle: { fontSize: 16, color: 'white', fontWeight:'bold' },
        style: { backgroundColor: '#80aaff'},
        tabStyle :{flexDirection: 'row'}
      }}
    >
      <MaterialTopTabs.Screen name="CHỦ ĐỀ" component={this.createTopicStack} 
        options={{
          tabBarIcon: ({ tintcolor }) => (
            <Icon name="library-shelves" size={30} color={'white'} />
          )
        }}
      />
      <MaterialTopTabs.Screen name="YÊU THÍCH" component={this.createLoveStack} 
        options={{
          tabBarIcon: ({ tintcolor }) => (
            <Icon1 name="book" size={30} color={'white'} />
          )
        }}
      />
    </MaterialTopTabs.Navigator>
  
  createNextStack = ({navigation}) =>
    <Stack.Navigator>
      <Stack.Screen name="Top Tabs" children={this.createTopTabs} 
      options={{
        title: '10 VẠN CÂU HỎI VÌ SAO',
        headerTitleAlign: 'center',
        headerLeft: () => (
            <Button
              transparent
              onPress={() => navigation.openDrawer()}>
              <Icon name="menu" size={35} color={'white'} />
            </Button>
          ),
        headerStyle: {backgroundColor: '#80c1ff'},
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeftContainerStyle: {paddingLeft: 20}
        }}

      />
      <Stack.Screen name="Screen 3" children={Screen3}
      />
      <Stack.Screen name="Trai Dat" children={TraiDat}/>
    </Stack.Navigator>
  

  render() {
    return (
      <NavigationContainer>
       {this.createDrawer()}
      </NavigationContainer>
    );
  }
}