import React from 'react';

import {Text, View, Button, FlatList} from 'react-native';

const names = ['Jack', 'John', 'Ann', 'Robert', 'Steve'];

const App = () => {
  React.useEffect(() => {
    fetch('https://api.github.com/users/xiaotian/repos')
      .then(
        resp => resp.json(), // this returns a promise
      )
      .then(repos => {
        for (const repo of repos) {
          console.log(repo.name);
        }
      })
      .catch(ex => {
        console.error(ex);
      });
  }, []);
  console.log('logging');
  return (
    <>
      <View>
        <FlatList data={names} renderItem={({item}) => <Text>{item}</Text>} />
      </View>
      <Text>Hello world!</Text>
      <Button onPress={() => console.log('test')} title="Example button" />
    </>
  );
};

export default App;
