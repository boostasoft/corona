import React from 'react'
import {StatusBar, View, Text, Image, StyleSheet, ImageSourcePropType} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { translate } from '../i18n'



const PreventionItem = ({source, text}: {
    source: ImageSourcePropType,
    text: string
})=>{
    return (
        <View style ={styles.prevention_item}>
            <Image source = {source} style ={styles.prevention_item_image}/>
            <Text style ={styles.prevention_item_text}>{text}</Text>
        </View>
    )
}


class CoronaPrevention extends React.Component{

    render(){

        
        return (
            <>
                <View style = {styles.container}>
                    <ScrollView style = {styles.scrollview}>
                        <Text style = {[styles.defaultText, {marginTop: 15}]}>
                         {translate("preventions.text_1")}
                        </Text>
                        <Text style = {[styles.defaultText, {marginVertical: 15}]}>
                        {translate("preventions.text_2")}
                        </Text>
                        <PreventionItem source={require('../assets/img/preventions/hand-wash.png')} text = {translate("preventions.prevention_1")}/>
                        <PreventionItem source={require('../assets/img/preventions/keep-distance.png')} 
                        text = {translate("preventions.prevention_2")}/>
                        <PreventionItem source={require('../assets/img/preventions/avoid.png')} 
                        text = {translate("preventions.prevention_3")}/>
                        <PreventionItem source={require('../assets/img/preventions/stayhome.png')} 
                        text = {translate("preventions.prevention_4")}/>

                        <PreventionItem source={require('../assets/img/preventions/outbreak.png')} 
                        text = {translate("preventions.prevention_5")}/>

                        <PreventionItem source={require('../assets/img/preventions/infection.png')} 
                        text = {translate("preventions.prevention_6")}/>
                        
                        <View style={{ marginVertical: 15}}>
                            <Text style={{fontStyle: "italic", color:"#555", fontSize: 13}}>{translate("info_source")}</Text>
                        </View>
                    </ScrollView>
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      scrollview:{
        paddingHorizontal: 15,
      },
      defaultText:{
          fontSize: 15
      },
      prevention_item:{
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10
        },
        prevention_item_image:{
            height : 30,
            width: 30
        },
        prevention_item_text:{
            fontFamily: 'NunitoSans-SemiBold',
            fontSize: 15,
            marginLeft : 10,
            flex : 1
        },
        prevention_item_text_no_image:{
            marginVertical: 10,
            fontFamily: 'NunitoSans-SemiBold',
            fontSize: 15,
            marginLeft : 40,
            flex : 1
        }
})
export default CoronaPrevention;