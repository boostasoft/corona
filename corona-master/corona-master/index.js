/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'mobx-react-lite/batchingForReactNative';
import App from './App';
import {name as appName} from './app.json';
import { setDefaultFont } from './src/helpers';


setDefaultFont();

AppRegistry.registerComponent(appName, () => 
	App
);
