import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.text}>School Attendace App</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    height: 45,
    backgroundColor: 'red',
  },

  text: {
    color: 'white',
    fontFamily: 'times',
    fontWeight: 'bold',
    fontSize: 28,
    paddingLeft: 35,
    paddingTop: 5,
  },
});
