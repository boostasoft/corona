/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
  View,
  Picker,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {observer} from 'mobx-react';

import CountryStatItem from './../components/countryStatItem';
import {FilteredStats, FilteredStat} from './../types/Stats';

import {translate} from './../i18n';

import {StatsStore} from '../store';

const Statistics = observer(({navigation}: {navigation: any}) => {
  const {filteredStats} = StatsStore;
  const [searchQuery, setSearchQuery] = React.useState('');

  useEffect(() => {
    StatsStore.getStatsData();
  }, []);

  const onChangeSearch = (query: string) => setSearchQuery(query);

  const filterList = (list: FilteredStats) => {
    return list.filter((listItem) =>
      listItem.country.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  };

  const renderItem = ({item, index}: {item: FilteredStat; index: number}) => {
    /*if (item.code == 'CM') {
      return <></>;
    }*/
    return (
      <CountryStatItem
        country={item.country}
        totalCases={item.totalCases}
        deaths={item.deaths}
        recoveries={item.recoveries}
        handlePress={
          /*revealStatsModal*/ (i: number) => {
            StatsStore.setCountryStat(null);
            navigation.navigate('CountryStats', {
              countryCode: filteredStats[i].code,
            });
          }
        }
        index={index}
      />
    );
  };

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            textAlignVertical: 'center',
            fontFamily: 'NunitoSans-SemiBold',
          }}>
          {translate('statistics.filters.filterBy')}{' '}
        </Text>
        <Picker
          selectedValue={StatsStore.filter}
          style={{height: 50, width: 175}}
          onValueChange={(itemValue) => {
            StatsStore.setFilter(itemValue);
            if (itemValue === translate('statistics.filters.values.country')) {
              StatsStore.filterByName();
            } else if (
              itemValue === translate('statistics.filters.values.deaths')
            ) {
              StatsStore.filterByDeaths();
            } else if (
              itemValue === translate('statistics.filters.values.recoveries')
            ) {
              StatsStore.filterByRecoveries();
            } else if (
              itemValue === translate('statistics.filters.values.cases')
            ) {
              StatsStore.filterByCases();
            }
          }}>
          <Picker.Item
            label={translate('statistics.filters.values.country')}
            value={translate('statistics.filters.values.country')}
          />
          <Picker.Item
            label={translate('statistics.filters.values.cases')}
            value={translate('statistics.filters.values.cases')}
          />
          <Picker.Item
            label={translate('statistics.filters.values.deaths')}
            value={translate('statistics.filters.values.deaths')}
          />
          <Picker.Item
            label={translate('statistics.filters.values.recoveries')}
            value={translate('statistics.filters.values.recoveries')}
          />
        </Picker>
      </View>
      <View style={styles.container}>
        {StatsStore.isLoading && !StatsStore.hasError && (
          <ActivityIndicator
            size="large"
            color="#db162f"
            style={{paddingVertical: 3}}
          />
        )}
        {StatsStore.hasError && filteredStats.length === 0 && (
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
        {searchQuery.length !== 0 && filterList(filteredStats).length === 0 && (
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              fontWeight: 'bold',
              color: 'rgba(0,0,0,0.45)',
            }}>
            {translate('statistics.search.no_results')}
          </Text>
        )}
        {/*(StatsStore.cameroonIndex !== null) && countriesStats.length > 0  && (
        <StatsHighlightItem
          country={countriesStats[StatsStore.cameroonIndex].name}
          totalCases={countriesStats[StatsStore.cameroonIndex].latest_data.confirmed}
          deaths={countriesStats[StatsStore.cameroonIndex].latest_data.deaths}
          recoveries={countriesStats[StatsStore.cameroonIndex].latest_data.recovered}
          handlePress={() => revealStatsModal(StatsStore.cameroonIndex)}
        />
      )*/}
        {filterList(filteredStats).length > 0 && (
          <FlatList<FilteredStat>
            data={filterList(filteredStats)}
            keyExtractor={(item: FilteredStat) => item.country}
            renderItem={renderItem}
            removeClippedSubviews={true}
            getItemLayout={(data: any, index: number) => ({
              length: 100,
              offset: 100 * index,
              index,
            })}
          />
        )}
      </View>
      <Searchbar
        placeholder={translate('statistics.search.placeholder')}
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{
          height: 56,
          borderRadius: 0,
          elevation: 12,
        }}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  scrollview: {
    backgroundColor: '#FAFAFA', //'#F5FCFF'
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});

export default Statistics;
