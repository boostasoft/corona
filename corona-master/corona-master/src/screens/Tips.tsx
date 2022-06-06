import React from 'react'
import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, ScrollView, Alert
} from 'react-native';

import {InfoCardItem} from '../components/InfoCardItem'
import {translate} from '../i18n'
import {AdMobBanner} from 'react-native-admob';
import DeviceInfo from 'react-native-device-info';
import RNFetchBlob from 'rn-fetch-blob'

export default class Tips extends Component<any,any> {

 showSymptoms = ()=>{
    const {navigation} = this.props;
    navigation.navigate('CoronaSymptom')
  }

  showPreventions = ()=>{
    const {navigation} = this.props;
    navigation.navigate('CoronaPrevention')
  }

  showTreatments = ()=>{
    const {navigation} = this.props;
    navigation.navigate('CoronaTreatment')
  }

  async componentDidMount(){
    try {
      const data = await fetch('https://toolchain.boostasoft.tech:8088/covid-19/boostasoft/info')
      const res = await data.json()
      const versionName = res[0].covid_version
      
      if(versionName.toLowerCase() != DeviceInfo.getVersion().toLowerCase()){
        const link = res[0].download_link
        Alert.alert(
          translate("dialog_app.new_version.title"),
          translate("dialog_app.new_version.desc"),
          [
            {
              onPress: () => {
                const android = RNFetchBlob.android
 
                RNFetchBlob.config({
                    addAndroidDownloads : {
                      useDownloadManager : true,
                      title : 'Covid19Alert.apk',
                      description : translate("dialog_app.new_version.title"),
                      mime : 'application/vnd.android.package-archive',
                      mediaScannable : true,
                      notification : true,
                      path: RNFetchBlob.fs.dirs.DownloadDir+"Covid19Alert"+versionName+".apk"
                    }
                  })
                  .fetch('GET', link)
                  .then((res) => {
                      android.actionViewIntent(res.path(), 'application/vnd.android.package-archive')
                  })
              },
              text: translate("dialog_app.new_version.ok")
            },
            {
              onPress: () => {},
              text: translate("dialog_app.new_version.cancel"),
              style: "cancel"
            }
          ]
        )
      }
    } catch (error) {
      
    }
  }


  onFailToRecieveAd = (error: any) => console.log(error);

  render() {
    
    return (
      <View style={styles.container}>
      <ScrollView contentContainerStyle = {styles.scrollview}>
        <AdMobBanner
            adSize="smartBannerPortrait"
            adUnitID="ca-app-pub-9353796274293893/3859326172"
            didFailToReceiveAdWithError={this.onFailToRecieveAd}
            onAdLoaded={() => console.log('Ad loaded on the infos screen')}
          />
        <InfoCardItem onPress={this.showSymptoms} text={translate("infos.symptoms")}
          source={require('../assets/img/symptoms.png')}/>
        <InfoCardItem onPress={this.showPreventions}  text={translate("infos.preventions")} 
         source={require('../assets/img/avoid.png')}/>
        <InfoCardItem onPress={this.showTreatments}  text={translate("infos.treatments")} 
        source={require('../assets/img/medicine.png')}/>
        
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview:{
    paddingHorizontal: 15,
    paddingTop: 10
  }
});