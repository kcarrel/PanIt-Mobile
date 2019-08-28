import React, { Component } from 'react';
import Login from './Components/Login';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;