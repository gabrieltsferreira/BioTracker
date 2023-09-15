import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Exercises() {
    return (
      <View style={styles.container}>
        <Text>Exercises</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });