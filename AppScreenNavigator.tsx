import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {
  createStackNavigator, 
  TransitionSpecs, 
  HeaderStyleInterpolators
} from '@react-navigation/stack';
import { View } from 'react-native';


import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

import News from './src/screens/News';
import Statistics from './src/screens/Statistics';
import Tips from './src/screens/Tips';
import * as app from './app.json';

import {translate} from './src/i18n';
import CoronaSymptom from './src/screens/CoronaSymptom';
import CoronaPrevention from './src/screens/CoronaPrevention';
import CoronaTreatment from './src/screens/CoronaTreatment';
import EnhancedStats from './src/screens/EnhancedStats';
import Header from './src/components/layout/header';



//import MainScreen from './src/screens/MainScreen'
  
const Slide = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current, next, layouts }:{current: any, next:any, layouts:any}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.9],
                })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
}

const Tab = createMaterialTopTabNavigator()

const TabbarNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{
      indicatorStyle: {
        backgroundColor: '#fff',
        height: 3,
      },
      style: {backgroundColor: '#db162f'},
      activeTintColor: '#fff',
      inactiveTintColor: '#ffffffaa',
      showLabel: true,
    }}>
    {/*<Tab.Screen name="News" component={News} options = {{tabBarLabel: translate('home.news_tab_title')}}/>*/}
    
    <Tab.Screen name="Tips" component={Tips} options = {{tabBarLabel: translate('home.tips_tab_title')}}/>
    <Tab.Screen name="Statistics" component={Statistics} options = {{tabBarLabel: translate('home.stats_tab_title')}}/>
  </Tab.Navigator>
)

const Stack = createStackNavigator()

export const AppScreenNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator 
        initialRouteName="Home"
        headerMode="float"
        screenOptions={{
          cardOverlayEnabled: true,
          gestureEnabled: true,
          ...Slide,
         }}>
            <Stack.Screen name = "Home" component = {TabbarNavigator} 
             options= {{
                title: 'Custom animation',
                headerTintColor: '#fafafa',
                header: () => (<Header/>), 
                headerStyle: {
                  backgroundColor: '#db162f', 
                  elevation: 0
                }, 
                headerTitle: app.displayName,
              }} 
               />

            <Stack.Screen name = "CoronaSymptom" component = {CoronaSymptom} 
            options = {{headerTintColor: '#fafafa', headerStyle: {backgroundColor: '#db162f'}, headerTitle: translate('infos.symptoms')}} />

            <Stack.Screen name = "CoronaPrevention" component = {CoronaPrevention} 
            options = {{headerTintColor: '#fafafa', headerStyle: {backgroundColor: '#db162f'}, headerTitle: translate('infos.preventions')}} />
        
            <Stack.Screen name = "CoronaTreatment" component = {CoronaTreatment} 
            options = {{headerTintColor: '#fafafa', headerStyle: {backgroundColor: '#db162f'}, headerTitle: translate('infos.treatments')}} />

            <Stack.Screen name = "CountryStats" component = {EnhancedStats} 
            options = {{headerTintColor: '#fafafa', headerStyle: {backgroundColor: '#db162f'},           headerTitleStyle: {
            fontFamily: 'NunitoSans-Regular',
          },headerTitle: translate('statistics.individual.title')}} />
        
           
        </Stack.Navigator>
    </NavigationContainer>
)