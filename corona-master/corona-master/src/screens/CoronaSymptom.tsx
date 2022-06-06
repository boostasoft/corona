import React from 'react'
import {StatusBar, View, Text, Image, StyleSheet, ScrollView, ImageSourcePropType} from 'react-native'
import { translate } from '../i18n'



const SymtomItem = ({source, text}: {
    source: ImageSourcePropType,
    text: string
})=>{
    return (
        <View style ={styles.symptom_item}>
            <Image source = {source} style ={styles.symptom_item_image}/>
            <Text style ={styles.symptom_item_text}>{text}</Text>
        </View>
    )
}

class CoronaSymptom extends React.Component{

    render(){

        
        return (
            <>
                <View style = {styles.container}>
                    <ScrollView style = {styles.scrollview}>
                        <Text style = {[styles.defaultText, {marginVertical : 15}]}>
                            {translate("symptoms.text_1")}
                        </Text>

                        <View>
                            <SymtomItem source = {require('../assets/img/symptoms/fever.png')} text = {translate("symptoms.fever")}/>
                            <SymtomItem source = {require('../assets/img/symptoms/sore-throat.png')} text = {translate("symptoms.sorethroat")}/>
                            <SymtomItem source = {require('../assets/img/symptoms/cough.png')} text = {translate("symptoms.cough")}/>
                            <SymtomItem source = {require('../assets/img/symptoms/runny-nose.png')} text = {translate("symptoms.runnynose")}/>
                            <SymtomItem source = {require('../assets/img/symptoms/difficulty-breathing.png')} text = {translate("symptoms.difficultybreathing")}/>
                            
                        </View>

                        <Text style = {[styles.defaultText, {marginVertical : 15}]}>
                        {translate("symptoms.text_2")}
                        </Text>

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

  symptom_item:{
      alignItems: 'center',
      flexDirection: 'row',
      marginVertical: 10
  },
  symptom_item_image:{
      height : 30,
      width: 30
  },
  symptom_item_text:{
      fontFamily: 'NunitoSans-SemiBold',
      fontSize: 15,
      marginLeft : 10
  }
})

export default CoronaSymptom;