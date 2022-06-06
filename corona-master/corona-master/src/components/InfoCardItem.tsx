import React from 'react'
import { ImageSourcePropType, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'

const InfoCardItem = ({source, text, onPress}: {
    source: ImageSourcePropType,
    text: string,
    onPress: () => void
})=>{
    return (
        <TouchableOpacity onPress = {onPress} activeOpacity = {0.5} style={styles.card}>
               <Image style={styles.card_image} source = {source}/>
        <Text style={styles.card_title}>{text}</Text>
            </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({
    card:{
        height: 150,
        backgroundColor: '#fff',
        marginVertical: 10,
        elevation: 2,
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card_image:{
        height : 70,
        width : 70,
    },
    card_title:{
        marginLeft : 15,
        fontSize: 25,
        fontFamily: 'NunitoSans-SemiBold',
    }
})

export {InfoCardItem}

