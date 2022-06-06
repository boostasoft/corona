import React from 'react';
import {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import {FakeCard} from '../fakes/components/FakeCard';

type Props = {};
export default class News extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollview}>
          <FakeCard />
          <FakeCard />
          <FakeCard />
          <FakeCard />
          <FakeCard />
          <FakeCard />
          <FakeCard />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview: {
    backgroundColor: '#FAFAFA', //'#F5FCFF'
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});
