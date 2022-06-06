import React from 'react';
import { View,  StyleSheet, Text, TouchableOpacity } from 'react-native';

import { translate } from './../i18n';
import { addSperatorToNumber } from './../helpers';


const StatsHighlightItem = ({ country, recoveries, totalCases, deaths, handlePress }: { country: string, recoveries: number, totalCases: number, deaths: number, handlePress: any  }) => {
  return (
    <TouchableOpacity
              onPress={handlePress}
              activeOpacity={0.9}
              style={styles.container}
              >
	    <View style={styles.left}>
	      <Text style={styles.country}  numberOfLines={1}>{country}</Text>
	      <Text style={styles.cases}>{addSperatorToNumber(totalCases)} {totalCases == 1
	      	? translate("statistics.case.singular"): translate("statistics.case.plural")}</Text>
	    </View>
	    <View style={styles.right}>
	      <Text style={styles.recovered}>{addSperatorToNumber(recoveries)} {translate("statistics.healed")}</Text>
	      <Text style={styles.death}>{addSperatorToNumber(deaths)} {translate("statistics.died")}</Text>
	    </View>
    </TouchableOpacity>
  );
} 

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D50000',
    flexDirection: 'row',
    height: 72,
    marginVertical: 8,
    marginHorizontal: 8,
    elevation: 8,
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
    color: '#fff',
  	maxWidth: 175,
  	fontFamily: 'NunitoSans-Bold',
  	fontSize: 24,
  },
  cases: {
  	fontSize: 14,
  	color: '#fff',
  	fontFamily: 'NunitoSans-Bold',
  },
  recovered: {
  	fontSize: 14,
  	color: '#fff',
  	fontFamily: 'NunitoSans-Bold',
  },
  death: {
  	fontSize: 14,
  	color: '#fff',
  	fontFamily: 'NunitoSans-Bold',
  }
});

export default React.memo(StatsHighlightItem);