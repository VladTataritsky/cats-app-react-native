import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const Item = ({catInfo, navigation}) => (
  <TouchableOpacity
    style={styles.list_item_container}
    onPress={() => navigation.navigate('Details', catInfo, navigation)}
    activeOpacity={1}>
    <View style={styles.list_item_header}>
      <Text style={styles.list_item_header_text}>{catInfo.name}</Text>
      <Text style={styles.list_item_header_text}>{catInfo.breed}</Text>
    </View>
    <Image
      style={styles.list_item_img}
      source={{
        uri: catInfo.imgSrc,
      }}
    />
    <View>
      <Text style={styles.list_item_short_description}>
        {catInfo.shortDescription}
      </Text>
    </View>
  </TouchableOpacity>
);

const CatsList = ({navigation, catsList}) => {
  return catsList.length ? (
    <FlatList
      data={catsList}
      keyExtractor={item => item.id}
      style={styles.cats_list}
      renderItem={({item}) => <Item catInfo={item} navigation={navigation} />}
    />
  ) : (
    <Text style={styles.no_found_text}>No Cats Found:(</Text>
  );
};

const styles = StyleSheet.create({
  cats_list: {
    marginBottom: 40,
  },
  list_item_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    margin: 10,
    padding: 10,
    borderRadius: 8,
  },
  list_item_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
  list_item_header_text: {
    fontSize: 24,
    fontWeight: '500',
    color: '#171716',
  },
  list_item_img: {
    width: '100%',
    height: 300,
  },
  list_item_short_description: {
    fontSize: 20,
    paddingTop: 8,
    color: '#2b2b29',
  },
  no_found_text: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default CatsList;
