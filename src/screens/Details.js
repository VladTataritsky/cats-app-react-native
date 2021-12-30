import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

const DetailsScreen = ({route}) => {
  const {name} = route.params;
  return (
    <View style={styles.root}>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ffbf0f',
  },
});

export default DetailsScreen;
