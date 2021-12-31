import React from 'react';

import {StyleSheet, TextInput} from 'react-native';

const SearchInput = ({searchInputValue, setSearchInputValue}) => (
  <TextInput
    style={styles.input}
    placeholder="Search Cat"
    value={searchInputValue}
    onChangeText={setSearchInputValue}
  />
);

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    backgroundColor: 'white',
    fontSize: 18,
    padding: 10,
    borderRadius: 4,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});

export default SearchInput;
