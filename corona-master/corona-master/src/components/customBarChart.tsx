import React, { PureComponent } from 'react';
import {
	Dimensions,
	StyleSheet
} from 'react-native';
import { observer } from 'mobx-react';
import { CountryStat, TimeLines } from '../types/Stats';
import { BarChart } from 'react-native-chart-kit';

interface Props  {
	data: Array<number>
	barColor: string
	labels: Array<string>
	width: number
}

const CustomBarChart = ({ labels, data, barColor, width }: Props) => {
	return(
		<BarChart
			data={{
				labels: labels,
				datasets: [
					{
						data: data
					},
				],
			}}
			width={width} 
			height={400}
			withInnerLines={false}
			verticalLabelRotation={90}
			chartConfig={{
				barPercentage: 0.8,
				backgroundGradientFrom: '#ffffff00',
				backgroundGradientTo: '#ffffff00',
				decimalPlaces: 0,
				color: (opacity = 1) => barColor,
				labelColor: (opacity = 1) => `#6a737c`,
				style: {
					borderRadius: 8,
				},
				propsForDots: {
					r: '1',
				},
			}}
			style={[styles.barChartCard, {padding: 3}]}
		/>
	)};

const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: '#fff',
		flexDirection: 'column',
		marginVertical: 8,
		marginHorizontal: 8,
		elevation: 2,
		borderRadius: 8,
	},
	barChartCard: {
		height: 425,
	},
});

export default React.memo(CustomBarChart);
