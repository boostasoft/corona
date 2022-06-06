import React from 'react'
import { Text, Platform, StyleSheet } from 'react-native';

export const addSperatorToNumber = (x: any, sep : string=' ') => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep);
}

export const setDefaultFont = () => {
  const oldTextRender = Text.render;
  Text.render = function(...args) {
    const origin = oldTextRender.call(this, ...args)
    return React.cloneElement(origin, {
      style: [styles.defaultText, origin.props.style],
    })
  }
}

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'NunitoSans-Regular',
  
  }
});