import React from 'react';
import {Component} from 'react';
import {
  StatusBar, 
  Platform
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { Provider } from "mobx-react";

import {AppScreenNavigator} from './AppScreenNavigator';
import Store from './src/store';




type Props = {};
declare var global: {HermesInternal: null | {}};

export default class App extends Component<Props> {

	componentDidMount() {
		SplashScreen.hide();
	}

  render() {
    return (
      <Provider store={Store}>
       <StatusBar barStyle="light-content" backgroundColor="#9c1123" />
        <AppScreenNavigator/>
      </Provider>
    );
  }

  
}

