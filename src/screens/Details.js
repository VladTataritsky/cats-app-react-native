import React from 'react';

import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';

const DetailsScreen = ({route, navigation}) => {
  const {name, imgSrc, breed, age, fullDescription} = route.params;

  React.useEffect(() => {
    navigation.setOptions({title: name});
  }, [name, navigation]);

  return (
    <ScrollView style={styles.root}>
      <View style={styles.view_container}>
        <Image
          style={styles.cat_img}
          source={{
            uri: imgSrc,
          }}
        />
        <View style={styles.view}>
          <Text>Breed:</Text>
          <Text style={styles.text_context}>{breed}</Text>
        </View>
        <View style={styles.view}>
          <Text>Age(years):</Text>
          <Text style={styles.text_context}>{age}</Text>
        </View>
        <View style={styles.view}>
          <Text>Description:</Text>
          <Text style={styles.text_context}>{fullDescription}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ffbf0f',
    flex: 1,
  },
  view_container: {
    padding: 20,
  },
  cat_img: {
    width: '100%',
    height: 300,
  },
  view: {
    paddingVertical: 10,
  },
  text_context: {
    fontSize: 22,
    color: '#2b2b29',
  },
});

export default DetailsScreen;
