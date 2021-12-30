import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const catsData = [
  {
    id: 1,
    name: 'Luna',
    age: 4,
    breed: 'Persian cat',
    imgSrc:
      'https://easyscienceforkids.com/wp-content/uploads/2019/05/Persian-Cat-23-4-1.jpg',
    shortDescription:
      'The Persian cat is a long-haired breed of cat characterized by its round face and short muzzle',
    fullDescription:
      'The Persian cat is a long-haired breed of cat characterized by its round face and short muzzle. It is also known as the "Persian Longhair" in English-speaking countries. The first documented ancestors of Persian cats were imported into Italy from Persia around 1620.',
  },
  {
    id: 2,
    name: 'Lucy',
    age: 1,
    breed: 'Bengal cat',
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/b/ba/Paintedcats_Red_Star_standing.jpg',
    shortDescription:
      'The Bengal cat is a domesticated cat breed created from hybrids of domestic cats, especially the spotted Egyptian Mau, with the Asian leopard cat',
    fullDescription:
      "The Bengal cat is a domesticated cat breed created from hybrids of domestic cats, especially the spotted Egyptian Mau, with the Asian leopard cat (Prionailurus bengalensis). The breed name comes from the leopard cat's taxonomic name. Bengals have a wild appearance; their golden shimmer comes from their leopard cat ancestry, and their coats may show spots, rosettes, arrowhead markings, or marbling. They are an energetic breed which needs much exercise and play.",
  },
  {
    id: 3,
    name: 'Oliver',
    age: 3,
    breed: 'Maine Coon',
    imgSrc:
      'https://www.zooplus.ie/magazine/wp-content/uploads/2019/04/maine-coon-cat-breed.jpg',
    shortDescription: 'The Maine Coon is a large domesticated cat breed',
    fullDescription:
      'The Maine Coon is a large domesticated cat breed. It has a distinctive physical appearance and valuable hunting skills. It is one of the oldest natural breeds in North America. The breed originated in the state of Maine, USA, where it is the official state cat.',
  },
  {
    id: 4,
    name: 'Milo',
    age: 7,
    breed: 'Van cat',
    imgSrc: 'https://live.staticflickr.com/5738/30882466216_6cbc442a9e_b.jpg',
    shortDescription:
      'The Van cat is a distinctive landrace of the domestic cat found in the Lake Van region of the Armenian Highlands',
    fullDescription:
      'The Van cat is a distinctive landrace of the domestic cat found in the Lake Van region of the Armenian Highlands. Van cats are relatively large, have a chalky white coat, sometimes with ruddy coloration on the head and hindquarters, and have blue or amber eyes or have heterochromia.',
  },
];

const Item = ({catInfo, navigation}) => (
  <TouchableOpacity
    style={styles.list_item_container}
    onPress={() => navigation.navigate('Details', catInfo)}>
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

const CatsList = ({navigation}) => (
  <FlatList
    data={catsData}
    keyExtractor={item => item.id}
    renderItem={({item}) => <Item catInfo={item} navigation={navigation} />}
  />
);

const styles = StyleSheet.create({
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
});

export default CatsList;
