import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../routes/Home';
import Charts from '../routes/Charts';
import {Icon} from 'native-base'
import CountryPicker from '../routes/CountryPicker';
import picker from '../routes/picker';

const Tab = createMaterialBottomTabNavigator();


export default function MyTab(){
  return(
    <NavigationContainer>
       <Tab.Navigator
        initialRouteName="Home"
        activeColor="#000000"
        inactiveColor="#d2d2d2"
        barStyle={{
          backgroundColor: '#fff'
        }}
        
       >
          <Tab.Screen name="Home" component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: "#00000",
            tabBarIcon: ({})=> (
              <Icon name="home"></Icon>
            ),
           
            
          }}
           />
           
          <Tab.Screen name="Charts" component={Charts}
           options={{
            tabBarLabel: 'Charts',
            tabBarColor: "#00000",
            tabBarIcon: ({})=> (
              <Icon name="bookmarks"></Icon>
            ),
           
            
          }}
           />

           <Tab.Screen name="Country Picker" component={picker}
            options={{
            tabBarLabel: 'Charts',
            tabBarColor: "#00000",
            tabBarIcon: ({})=> (
              <Icon name="navigate"></Icon>
            ),
           
            
          }}
           ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}




