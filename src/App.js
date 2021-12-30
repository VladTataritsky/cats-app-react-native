import React from 'react';

import {StyleSheet, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import MainScreen from './screens/Main';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.root}>
      <MainScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ffbf0f',
  },
});

export default App;
