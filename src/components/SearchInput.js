import React, {useState, useCallback, useEffect} from 'react';

import {StyleSheet, TextInput} from 'react-native';

const SearchInput = ({setCatsList, fetchedCatsData}) => {
  const [searchInputValue, setSearchInputValue] = useState('');

  const isIncludesToSearchValue = useCallback(
    str =>
      str.toLocaleLowerCase().includes(searchInputValue.toLocaleLowerCase()),
    [searchInputValue],
  );

  useEffect(() => {
    const filteredCats = [...fetchedCatsData].filter(
      cat =>
        isIncludesToSearchValue(cat.name) ||
        isIncludesToSearchValue(cat.breed) ||
        isIncludesToSearchValue(cat.shortDescription),
    );
    setCatsList(filteredCats);
  }, [searchInputValue, isIncludesToSearchValue, fetchedCatsData, setCatsList]);

  return (
    <TextInput
      style={styles.input}
      placeholder="Search Cat"
      value={searchInputValue}
      onChangeText={setSearchInputValue}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    fontSize: 18,
    padding: 10,
    borderRadius: 4,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});

export default React.memo(SearchInput);
