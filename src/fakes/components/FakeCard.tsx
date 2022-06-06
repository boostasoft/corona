import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { FakeCircle } from './FakeCircle'
import { FakeLine } from './FakeLine'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SCREEN_WIDTH  = Dimensions.get('screen').width
const CONTENT_LINE_HEIGHT = 2
const CONTENT_LINE_RADIUS = CONTENT_LINE_HEIGHT / 2
const HEADER_LINE_HEIGHT = 5
const HEADER_LINE_RADIUS = HEADER_LINE_HEIGHT / 2

const ContentLine = ({width = SCREEN_WIDTH - 50, bgColor = '#adadad'})=>{

    return (
        <View  style = {styles.line}>
            <FakeLine height = {CONTENT_LINE_HEIGHT} radius = {CONTENT_LINE_RADIUS} bgColor ={bgColor} width = {width}/>
        </View>
    )
}
export const FakeCard = () => {
    return (
        <TouchableOpacity activeOpacity = {0.5} style = {styles.card}>
            <View style = {styles.header} >
                <FakeCircle bgColor = "#555" size = {30}/>
                <View style = {{marginLeft : 10}}>
                    <FakeLine height = {HEADER_LINE_HEIGHT} radius = {HEADER_LINE_RADIUS} bgColor = '#555' width = {SCREEN_WIDTH - 90}/>
                </View>
            </View>

            <View style = {styles.content}>
               
                <ContentLine width = {SCREEN_WIDTH - 50}/>
                <ContentLine width = {SCREEN_WIDTH - 60}/>
                <ContentLine width = {SCREEN_WIDTH - 70}/>
                <ContentLine width = {SCREEN_WIDTH - 50}/>
                <ContentLine width = {SCREEN_WIDTH - 70}/>
                <ContentLine/>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        height: 130,
        backgroundColor: '#fff',
        marginVertical: 10,
        elevation: 2,
        padding: 10,
        borderRadius: 5
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    content:{
        flex: 1,
        justifyContent : 'center'
    },
    line:{
        marginTop : 8
    }
})