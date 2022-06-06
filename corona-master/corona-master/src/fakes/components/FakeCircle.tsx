import React from 'react'
import {View, StyleSheet, ViewStyle, TextStyle} from 'react-native'

export interface IFakeCircle{
    bgColor?: string;
    size?: number;
   
    
}

export class FakeCircle extends React.Component<IFakeCircle>{

    render(){
        const {bgColor = "#eee", size = 20} = this.props
        return (
            <View style = {{backgroundColor: bgColor, height: size, width: size, borderRadius: size /2}}>
                {this.props.children}
            </View>
        )
    }
}
