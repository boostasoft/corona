/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button} from 'react-native';
import {translate} from '../i18n';
import I18n from '../i18n';

class MainScreen extends React.Component {
  render() {
    return (
      <>
        <View
          style={{
            flex: 1,
          }}>
          <Text>{translate('message')}</Text>

          <Button
            onPress={() => {
              console.log(I18n);
            }}
            title="Change locale"
          />
        </View>
      </>
    );
  }
}

export default MainScreen;
