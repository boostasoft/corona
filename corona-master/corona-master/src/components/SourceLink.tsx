import React from 'react'
import { View, StyleSheet, Text, Linking, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { translate } from '../i18n'


const SourceLink = ({text, url}:{text: string, url: string}) => {
    const open = async () => {
        const canOpen = Linking.canOpenURL(url);
        if(canOpen){
            await Linking.openURL(url)
        }else{
            Alert.alert(translate('open_url.failed')+ ": "+url)
        }
    }
    return (
        <TouchableOpacity onPress={open}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "dodgerblue"
    }
})

export default SourceLink;