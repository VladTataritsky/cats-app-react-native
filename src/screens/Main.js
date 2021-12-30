import React from 'react';

import {StyleSheet, View} from 'react-native';
import CatsList from '../components/CatsList';

const MainScreen = ({navigation}) => (
  <View style={styles.root}>
    <CatsList navigation={navigation} />
  </View>
);

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ffbf0f',
  },
});

export default MainScreen;
