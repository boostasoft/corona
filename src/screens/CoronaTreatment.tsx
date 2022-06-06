import React from 'react'
import {StatusBar, View, Text, Image, ScrollView, StyleSheet} from 'react-native'
import { translate } from '../i18n'

const TreatmentItem = ({text}:{text:string}) => (
    <View style = {styles.treatment_item}>
        <Text  style = {styles.treatment_item_text}>{text}</Text>
    </View>

)

class CoronaTreatment extends React.Component{

    render(){

        
        return (
            <>
                <View style = {styles.container}>
                    <ScrollView style = {styles.scrollview}>
                        <Text style = {[styles.defaultText, {marginTop: 15}]}>
                        {translate("treatements.text_1")}
                        </Text>
                        <View style = {{marginVertical : 17, flexDirection: 'row', alignItems: 'center'}}>
                        <Text style = {{fontSize: 18, fontWeight: 'bold'}}>
                        {translate("treatements.text_2")}
                        </Text>
                        <View style = {{height: 1, backgroundColor: '#ddd', marginLeft: 10, flex:1}}/>
                        </View>
                        <Text  style = {[styles.defaultText]}>
                        {translate("treatements.text_3")}
                        </Text>
                        <TreatmentItem text = {translate("treatements.treatment_1")}/>
                        <TreatmentItem text = {translate("treatements.treatment_2")}/>
                        <TreatmentItem text = {translate("treatements.treatment_3")}/>
                        <TreatmentItem text = {translate("treatements.treatment_4")}/>
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
    treatment_item:{
        justifyContent: 'center',
        
        backgroundColor: '#f9f9f9',
        marginVertical : 6,
        padding: 15,
        borderRadius: 8,
        elevation : 0.5,
        borderWidth: 1,
        borderColor: "#e7e7e7"
    },
    treatment_item_text:{
        fontSize: 14,
        fontFamily: 'NunitoSans-SemiBold',
        //color: '#fafafa'
    }
})
export default CoronaTreatment;