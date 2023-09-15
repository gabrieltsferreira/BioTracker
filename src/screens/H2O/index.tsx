import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function H2O() {
    return (
      <View style={styles.container}>
        <Text>H2O</Text>
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