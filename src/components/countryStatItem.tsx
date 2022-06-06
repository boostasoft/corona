import React from 'react';
import { View,  StyleSheet, Text, TouchableOpacity} from 'react-native';

import { translate } from './../i18n';
import { addSperatorToNumber } from './../helpers';


const CountryStatItem = ({ country, recoveries, totalCases, deaths, handlePress, index }: {country: string, recoveries: number, totalCases: number, deaths: number, handlePress: any, index: number  }) => {
  return (
        <TouchableOpacity
              onPress={() => handlePress(index)}
              activeOpacity={0.8}
              style={styles.container}
              >
	    <View style={styles.left}>
	      <Text style={styles.country}  numberOfLines={2}>{country}</Text>
	      <Text numberOfLines={1} style={styles.cases}>{addSperatorToNumber(totalCases)} {totalCases == 1
	      	? translate("statistics.case.singular"): translate("statistics.case.plural")}</Text>
	    </View>
	    <View style={styles.right}>
	      <Text numberOfLines={1} style={styles.recovered}>{addSperatorToNumber(recoveries)} {translate("statistics.healed")}</Text>
	      <Text numberOfLines={1} style={styles.death}>{addSperatorToNumber(deaths)} {translate("statistics.died")}</Text>
	    </View>
	    </TouchableOpacity>
  );
} 

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 100,
    marginVertical: 8,
    marginHorizontal: 8,
    elevation: 2,
    borderRadius: 8,
    padding: 16,
    justifyContent: 'space-between'
  },
  left: {
  	flexDirection: 'column',
  	justifyContent: 'space-evenly'
  },
  right: {
  	flexDirection: 'column',
  	justifyContent: 'space-between',
  },
  country: {
  	maxWidth: 175,
  	fontSize: 24,
    fontFamily: 'NunitoSans-SemiBold'
  },
  cases: {
  	fontSize: 14,
  	color: '#616161',
    fontFamily: 'NunitoSans-Light'
  },
  recovered: {
  	fontSize: 14,
  	color: '#35bd7e',
  },
  death: {
  	fontSize: 14,
  	color: '#f93641',
  }
});

export default React.memo(CountryStatItem);