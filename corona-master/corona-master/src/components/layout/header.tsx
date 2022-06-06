import React from 'react';
import {Text, View, Animated, StyleSheet} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as app from './../../../app.json';

import {StatsStore} from '../../store'

const ScrollableHeader = () => (
	<View style={styles.headerContainer}>
		<View style={styles.leftHeaderContainer}>
			<Text style={styles.logoText}>{app.displayName}</Text>
	   	</View>
	   	<View style={styles.rightHeaderContainer}>
	   	<View style={{flexDirection: 'row'}}>
			{/*<TouchableRipple
				onPress={() => alert('search clicked')}
				rippleColor="rgba(255, 255, 255, .32)"
				style={{
					marginRight: 4,
					borderRadius: 16,
					width: 32,
					height: 32,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				borderless>
				<Icon name="search" size={24} color="#fff" />
			</TouchableRipple>*/}
			<TouchableRipple
				onPress={() => {
					StatsStore.reload()
				}}
				rippleColor="rgba(255, 255, 255, .32)"
				style={{
					marginLeft: 2,
					borderRadius: 16,
					width: 32,
					height: 32,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				borderless>
				<Icon name="replay" size={24} color="#fff" />
			</TouchableRipple>
		</View>
	   	</View>
	</View>
);

const styles = StyleSheet.create({
 headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#db162f",
    alignItems:"center",
    height: 56,
    padding: 12
 },
 leftHeaderContainer: {
    alignItems: "flex-start",
    flexDirection: "row"
 },
 rightHeaderContainer: {
    alignItems: "flex-end",
    flexDirection: "row"
 },
 logoText: {
    color: "white",
    fontSize: 18,
    letterSpacing: 0.5,
    alignItems: "flex-start",
 },
});

export default ScrollableHeader;
