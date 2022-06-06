/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {PureComponent} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
//import {Flag} from 'react-native-svg-flagkit';
import {Divider} from 'react-native-paper';
import {observer} from 'mobx-react';
import {LineChart} from 'react-native-chart-kit';
import {StatsStore} from '../store';
import {addSperatorToNumber} from './../helpers';
import {translate} from './../i18n';
import {TimeLines} from '../types/Stats';
import CustomBarChart from '../components/customBarChart';

interface Props extends PureComponent {
  route: any;
}

const EnhancedStats = observer((props: Props) => {
  React.useEffect(() => {
    StatsStore.getCountryStats(props.route.params.countryCode);
    /*
		setDateArray(getDateArray(countryStat.timeline).reverse());
		setDeathsArray(getDeathsArray(countryStat.timeline).reverse());
		setRecoveredArray(getRecoveredArray(countryStat.timeline).reverse());
		setConfirmedArray(getConfirmedArray(countryStat.timeline).reverse());
		setNewDeathsArray(getNewDeathsArray(countryStat.timeline).reverse());
		setNewRecoveredArray(getNewRecoveredArray(countryStat.timeline).reverse());
		setNewConfirmedArray(getNewConfirmedArray(countryStat.timeline).reverse());
		*/
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDateArray = (timelines: TimeLines) => {
    return timelines?.map((t) => {
      return t.date;
    });
  };
  const getDeathsArray = (timelines: TimeLines) => {
    return timelines?.map((t) => {
      return t.deaths;
    });
  };
  const getRecoveredArray = (timelines: TimeLines) => {
    return timelines.map((t) => {
      return t.recovered;
    });
  };
  const getConfirmedArray = (timelines: TimeLines) => {
    return timelines.map((t) => {
      return t.confirmed;
    });
  };
  const getNewConfirmedArray = (timelines: TimeLines) => {
    return timelines?.map((t) => {
      return t.new_confirmed;
    });
  };
  const getNewDeathsArray = (timelines: TimeLines) => {
    return timelines?.map((t) => {
      return t.new_deaths;
    });
  };

  const {countryStat} = StatsStore;

  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
      }}>
      {StatsStore.isLoading && (
        <ActivityIndicator
          size="large"
          color="#db162f"
          style={{paddingVertical: 3}}
        />
      )}
      {StatsStore.hasError && (
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            color: 'rgba(0,0,0,0.45)',
          }}>
          {translate('statistics.no_data')}
        </Text>
      )}
      {countryStat ? (
        <ScrollView style={[styles.scrollview, {width: '100%'}]}>
          <View style={{paddingVertical: 8}} />
          <View style={{paddingVertical: 4}} />
          <View
            style={[styles.cardContainer, {justifyContent: 'space-evenly'}]}>
            <Text style={[styles.statCountry]}>{countryStat.name} </Text>
            {/*<Flag id={countryStat.code} size={0.15} style={[styles.statFlag]} />*/}
          </View>

          <View style={[styles.cardContainer, styles.totalCard]}>
            <Text style={styles.cardTitle}>
              {translate('statistics.individual.total')}
            </Text>
            <Divider />
            <View style={{flexDirection: 'row', flex: 1}}>
              <View style={{flexDirection: 'column', flex: 0.5}}>
                <View style={styles.statContainer}>
                  <Text style={[styles.valueStats, styles.cases]}>
                    {addSperatorToNumber(countryStat.latest_data.confirmed)}
                  </Text>
                  <Text style={[styles.textStats, styles.cases]}>
                    {translate('statistics.individual.confirmed')}
                  </Text>
                </View>
                <View style={styles.statContainer}>
                  <Text style={[styles.valueStats, styles.death]}>
                    {addSperatorToNumber(countryStat.latest_data.deaths)}
                  </Text>
                  <Text style={[styles.textStats, styles.death]}>
                    {translate('statistics.individual.deaths')}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'column', flex: 0.5}}>
                <View style={styles.statContainer}>
                  <Text style={[styles.valueStats, styles.recovered]}>
                    {addSperatorToNumber(countryStat.latest_data.recovered)}
                  </Text>
                  <Text style={[styles.textStats, styles.recovered]}>
                    {translate('statistics.individual.recoveries')}
                  </Text>
                </View>
                <View style={styles.statContainer}>
                  <Text style={[styles.valueStats, styles.critical]}>
                    {addSperatorToNumber(countryStat.latest_data.critical)}
                  </Text>
                  <Text style={[styles.textStats, styles.critical]}>
                    {translate('statistics.individual.critical')}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={[styles.cardContainer, styles.todayCard]}>
            <Text style={styles.cardTitle}>
              {translate('statistics.individual.today')}
            </Text>
            <Divider />
            <View style={{flexDirection: 'column', flex: 1}}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <View
                  style={{
                    display: 'flex',
                    flex: 0.5,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={[styles.valueStats, styles.death]}>
                    {addSperatorToNumber(countryStat.today.confirmed)}
                  </Text>
                  <Text style={[styles.textStats, styles.death]}>
                    {translate('statistics.individual.confirmed')}
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flex: 0.5,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={[styles.valueStats, styles.critical]}>
                    {addSperatorToNumber(countryStat.today.deaths)}
                  </Text>
                  <Text style={[styles.textStats, styles.critical]}>
                    {translate('statistics.individual.deaths')}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={[
              styles.cardContainer,
              styles.totalCard,
              {backgroundColor: '#49a4f7', paddingHorizontal: 5},
            ]}>
            <Text style={[styles.cardTitle, {color: '#fff'}]}>
              {translate('statistics.individual.calculated_stats')}
            </Text>
            <View style={{flexDirection: 'column', flex: 1}}>
              <View style={{flexDirection: 'row', flex: 0.5}}>
                <View
                  style={{
                    display: 'flex',
                    flex: 0.5,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={[styles.valueStats]}>
                    {countryStat.latest_data.calculated.death_rate
                      ? addSperatorToNumber(
                          countryStat.latest_data.calculated.death_rate.toFixed(
                            2,
                          ),
                        ) + '%'
                      : 'N/A'}
                  </Text>
                  <Text style={[styles.textStats]}>
                    {translate('statistics.individual.death_rate')}
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flex: 0.45,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={[styles.valueStats]}>
                    {countryStat.latest_data.calculated.recovery_rate
                      ? addSperatorToNumber(
                          countryStat.latest_data.calculated.recovery_rate.toFixed(
                            2,
                          ),
                        ) + '%'
                      : 'N/A'}
                  </Text>
                  <Text style={[styles.textStats]}>
                    {translate('statistics.individual.recovery_rate')}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', flex: 0.5}}>
                <View
                  style={{
                    display: 'flex',
                    flex: 0.5,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={[styles.valueStats]}>
                    {countryStat.latest_data.calculated.recovered_vs_death_ratio
                      ? addSperatorToNumber(
                          countryStat.latest_data.calculated.recovered_vs_death_ratio.toFixed(
                            2,
                          ),
                        ) + '%'
                      : 'N/A'}
                  </Text>
                  <Text style={[styles.textStats]}>
                    {translate('statistics.individual.recovered_death_ratio')}
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flex: 0.45,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={[styles.valueStats]}>
                    {countryStat.latest_data.calculated
                      .cases_per_million_population
                      ? addSperatorToNumber(
                          countryStat.latest_data.calculated.cases_per_million_population.toFixed(
                            2,
                          ),
                        )
                      : 'N/A'}
                  </Text>
                  <Text style={[styles.textStats]}>
                    {translate('statistics.individual.case_density')}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {countryStat.timeline.length > 0 && (
            <>
              <LineChart
                data={{
                  labels: [
                    getDateArray(countryStat.timeline)[
                      getDateArray(countryStat.timeline).length - 1
                    ],
                    getDateArray(countryStat.timeline)[
                      Math.round(getDateArray(countryStat.timeline).length / 2)
                    ],
                    getDateArray(countryStat.timeline)[0],
                  ],
                  datasets: [
                    {
                      data: getRecoveredArray(countryStat.timeline).reverse(),
                      color: () => styles.recovered.color,
                    },
                    {
                      data: getDeathsArray(countryStat.timeline).reverse(),
                      color: () => styles.critical.color,
                    },
                    {
                      data: getConfirmedArray(countryStat.timeline).reverse(),
                      color: () => styles.cases.color,
                    },
                  ],
                  legend: [
                    translate('statistics.individual.recoveries'),
                    translate('statistics.individual.deaths'),
                    translate('statistics.individual.cases'),
                  ],
                }}
                width={
                  Dimensions.get('window').width -
                  styles.cardContainer.marginHorizontal * 3
                } // from react-native
                height={250}
                yAxisInterval={10}
                xLabelsOffset={-5}
                chartConfig={{
                  backgroundGradientFrom: '#ffffff00',
                  backgroundGradientTo: '#ffffff00',
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(63, 143, 244, ${opacity})`,
                  labelColor: () => '#6a737c',
                  style: {
                    borderRadius: 8,
                  },
                  propsForDots: {
                    r: '1',
                  },
                }}
                style={styles.cardContainer}
              />

              <View style={[styles.cardContainer]}>
                <Text style={styles.cardTitle}>
                  {translate('statistics.individual.cases_per_day')}
                </Text>
                <Divider />
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={true}>
                  <CustomBarChart
                    data={getNewConfirmedArray(countryStat.timeline)
                      .reverse()
                      .slice(-6, -1)}
                    labels={getDateArray(countryStat.timeline)
                      .reverse()
                      .slice(-6, -1)}
                    barColor={styles.cases.color}
                    width={
                      Dimensions.get('window').width -
                      styles.cardContainer.marginHorizontal * 3
                    }
                  />
                </ScrollView>
              </View>

              <View style={[styles.cardContainer]}>
                <Text style={styles.cardTitle}>
                  {translate('statistics.individual.deaths_per_day')}
                </Text>
                <Divider />
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={true}>
                  <CustomBarChart
                    data={getNewDeathsArray(countryStat.timeline)
                      .reverse()
                      .slice(-6, -1)}
                    labels={getDateArray(countryStat.timeline)
                      .reverse()
                      .slice(-6, -1)}
                    barColor={styles.critical.color}
                    width={
                      Dimensions.get('window').width -
                      styles.cardContainer.marginHorizontal * 3
                    }
                  />
                </ScrollView>
              </View>
            </>
          )}
          <View style={{paddingVertical: 16}} />
        </ScrollView>
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    marginVertical: 8,
    marginHorizontal: 8,
    elevation: 2,
    borderRadius: 8,
  },
  statContainer: {
    display: 'flex',
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: 'NunitoSans-Bold',
    color: '#626262',
    paddingBottom: 10,
    marginLeft: 16,
    marginTop: 16,
  },
  totalCard: {
    height: 260,
  },
  barChartCard: {
    height: 425,
  },
  todayCard: {
    height: 150,
  },
  chartCard: {
    height: 380,
  },
  textStats: {
    fontFamily: 'NunitoSans-SemiBold',
    textTransform: 'capitalize',
    color: '#fff',
    textAlign: 'center',
  },
  valueStats: {
    fontSize: 24,
    fontFamily: 'NunitoSans-Bold',
    color: '#fff',
  },
  cases: {
    color: '#5a595c',
  },
  recovered: {
    color: '#35bd7e',
  },
  death: {
    color: '#5a595c',
  },
  critical: {
    color: '#f93641',
  },
  scrollview: {},
  statCountry: {
    fontSize: 18,
    color: '#000',
    paddingVertical: 10,
    fontFamily: 'NunitoSans-Thin',
    textAlign: 'center',
    textTransform: 'uppercase',
    flex: 0.6,
  },
  statFlag: {
    flex: 0.4,
    textAlign: 'center',
  },
});

export default EnhancedStats;
