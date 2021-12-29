import React from 'react';

import {Text, View, Button, FlatList} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

const names = ['Jack', 'John', 'Ann', 'Robert', 'Steve'];

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
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
