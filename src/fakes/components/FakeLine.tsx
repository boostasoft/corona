import React from 'react'
import {View, StyleSheet, ViewStyle, TextStyle, StyleProp} from 'react-native'

export interface IFakeLine{
    bgColor?: string;
    width?: string | number ;
    height?: string | number;
    radius?: number,
   
}

export class FakeLine extends React.Component<IFakeLine>{

    
    render(){
        const {bgColor = '#eee', height = 2, width , radius = 1} =  this.props
        return (
            <View style = {{backgroundColor: bgColor, width: width, height: height, borderRadius: radius}}>
                
            </View>
        )
    }
}
